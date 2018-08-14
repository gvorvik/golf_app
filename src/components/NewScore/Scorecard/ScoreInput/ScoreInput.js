import React, { Component } from 'react';
import { connect } from 'react-redux';
import SCORE_ACTIONS from '../../../../redux/actions/scoreActions';


const mapStateToProps = (state) => ({
    holeInfo: state.score.holeInfo,
    scoreReducer: state.score.scoreReducer,
    state
});

class ScoreInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleChange = (event) => {
        this.props.dispatch({
            type: SCORE_ACTIONS.RECORD_SCORE,
            payload: {
                holeId: event.target.name,
                score: Number(event.target.value)
            },
        });
    }

    render() {

        let totalScore = 0;

        for (let thing in this.props.scoreReducer) {
            totalScore = totalScore + this.props.scoreReducer[thing];
        };

        let holeScores = null;

        if (this.props.holeInfo) {
            holeScores = this.props.holeInfo.map((hole, i) => {
                return <td className="score-cell" key={i}>
                    <input onChange={this.handleChange} name={hole.id} type="number" />
                </td>
            });
            holeScores = <tr><th scope="row">Score</th>{holeScores}<td>{totalScore}</td></tr>
            return holeScores;
        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps)(ScoreInput);