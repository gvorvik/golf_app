import React from 'react';
import { connect } from 'react-redux';
import ScoreInput from './ScoreInput/ScoreInput';


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
            <button onClick={props.handleSubmit}>Submit Score</button>
        </div>
    )
}

export default connect(mapStateToProps)(Scorecard);