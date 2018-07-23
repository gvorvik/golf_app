import React from 'react';
import { connect } from 'react-redux';
import SCORE_ACTIONS from '../../../../redux/actions/scoreActions';


const mapStateToProps = (state) => ({
    holeInfo: state.score.holeInfo,
    scoreReducer: state.score.scoreReducer,
    state
});

const ScoreInput = (props) => {

    const handleChange = (event) => {
        props.dispatch({
            type: SCORE_ACTIONS.RECORD_SCORE,
            payload: {
                holeId: event.target.name,
                score: Number(event.target.value)
            },
        });
    }

    let totalScore = 0;

    for (let thing in props.scoreReducer) {
        totalScore = totalScore + props.scoreReducer[thing];
    };

    let holeScores = null;

    if (props.holeInfo) {
        holeScores = props.holeInfo.map((hole, i) => {
            return <td key={i}>
                <input onChange={handleChange} name={hole.id} type="number" />
            </td>
        });
        holeScores = <tr><td>Score</td>{holeScores}<td>{totalScore}</td></tr>
        return (holeScores);
    } else {
        return null;
    }
}

export default connect(mapStateToProps)(ScoreInput);