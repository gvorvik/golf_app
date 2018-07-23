import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ScoreInput from './ScoreInput/ScoreInput';
import SCORE_ACTIONS from '../../../redux/actions/scoreActions';


const mapStateToProps = state => ({
    holeInfo: state.score.holeInfo,
    scoreReducer: state.score.scoreReducer,
});

const Scorecard = (props) => {
    let holeNumbers;
    let holePars;
    let holeYardages;
    let holeHandicaps;
    let totalPar = 0;
    let totalYardage = 0;

    const handleSubmit = () => {
        for (let thing in props.scoreReducer) {
            if (props.scoreReducer[thing] === 0) {
                return alert('You cannot have a score of 0 on a hole');
            }
        }
        props.dispatch({
            type: SCORE_ACTIONS.SUBMIT_SCORE,
            payload: props.scoreReducer,
        });
    }

    if (props.holeInfo) {
        holeNumbers = props.holeInfo.map((hole, i) => {
            return <td key={i}>
                {hole.holenumber}
            </td>
        });

        holePars = props.holeInfo.map((hole, i) => {
            return <td key={i}>
                {hole.par}
            </td>
        });

        holeYardages = props.holeInfo.map((hole, i) => {
            return <td key={i}>
                {hole.yardage}
            </td>
        });

        holeHandicaps = props.holeInfo.map((hole, i) => {
            return <td key={i}>
                {hole.handicap}
            </td>
        });

        props.holeInfo.forEach((hole) => {
            totalPar = totalPar += hole.par;
        });
        props.holeInfo.forEach((hole) => {
            totalYardage = totalYardage += hole.yardage;
        });

        holeNumbers = <tr><td>Hole</td>{holeNumbers}<td>Total</td></tr>;
        holePars = <tr><td>Par</td>{holePars}<td>{totalPar}</td></tr>;
        holeYardages = <tr><td>Yardage</td>{holeYardages}<td>{totalYardage}</td></tr>;
        holeHandicaps = <tr><td>Handicap</td>{holeHandicaps}<td>X</td></tr>;
    }

    return (
        <div id="scorecardDiv">
            <h1>Scorecard</h1>
            <table>
                <thead>
                    {holeNumbers}
                </thead>
                <tbody>
                    {holePars}
                    {holeYardages}
                    {holeHandicaps}
                    <ScoreInput />
                </tbody>
            </table>
            <Button variant="raised" color="primary" onClick={handleSubmit}>Submit Score</Button>
        </div>
    )
}

export default connect(mapStateToProps)(Scorecard);