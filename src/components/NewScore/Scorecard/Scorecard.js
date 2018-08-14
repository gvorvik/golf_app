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
    let holeButton;
    let totalPar = 0;
    let totalYardage = 0;

    if (props.holeInfo) {
        holeButton=<button onClick={props.handleSubmit}>Submit Score</button>;

        holeNumbers = props.holeInfo.map((hole, i) => {
            return <th className="score-cell" scope="col" key={i}>
                    {hole.holenumber}
            </th>
        });

        holePars = props.holeInfo.map((hole, i) => {
            return <td className="score-cell" key={i}>
                {hole.par}
            </td>
        });

        holeYardages = props.holeInfo.map((hole, i) => {
            return <td className="score-cell" key={i}>
                {hole.yardage}
            </td>
        });

        holeHandicaps = props.holeInfo.map((hole, i) => {
            return <td className="score-cell" key={i}>
                {hole.handicap}
            </td>
        });

        props.holeInfo.forEach((hole) => {
            totalPar = totalPar += hole.par;
        });
        props.holeInfo.forEach((hole) => {
            totalYardage = totalYardage += hole.yardage;
        });

        holeNumbers = <tr><th scope="row">Hole</th>{holeNumbers}<th scope="col">Total</th></tr>;
        holePars = <tr><th scope="row">Par</th>{holePars}<td>{totalPar}</td></tr>;
        holeYardages = <tr><th scope="row">Yardage</th>{holeYardages}<td>{totalYardage}</td></tr>;
        holeHandicaps = <tr><th scope="row">Handicap</th>{holeHandicaps}<td>X</td></tr>;
    }

    return (
        <div>
            <h1>Scorecard</h1>
            <table id="newScoreTable">
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
            {holeButton}
        </div>
    )
}

export default connect(mapStateToProps)(Scorecard);