import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ScoreInput from './ScoreInput/ScoreInput';
import HoleScoreDiv from './HoleScoreDiv/HoleScoreDiv';

const mapStateToProps = state => ({
    holeInfo: state.score.scoreReducer.holeInfo
});

const Scorecard = (props) => {
    let holeNumbers;
    let holePars;
    let holeYardages;
    let holeHandicaps;
    let holeScores;
    let totalPar = 0;
    let totalYardage = 0;

    if(props.holeInfo) {
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
        holeScores = props.holeInfo.map((hole, i) => {
            return <td key={i}>
                <input type="number"/>
            </td>
        });
        props.holeInfo.forEach((hole) => {
            totalPar=totalPar+=hole.par;
        });
        props.holeInfo.forEach((hole) => {
            totalYardage=totalYardage+=hole.yardage;
        });
    }

    return (
        <div id="scorecardDiv">
            <h1>Scorecard</h1>
            <table>
                <thead>
                    <tr>
                        <td>Hole</td>
                        {holeNumbers}
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Par</td>
                        {holePars}
                        <td>{totalPar}</td>
                    </tr>
                    <tr>
                        <td>Yardage</td>
                        {holeYardages}
                        <td>{totalYardage}</td>
                    </tr>
                    <tr>
                        <td>Handicap</td>
                        {holeHandicaps}
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        {holeScores}
                        <td>X</td>
                    </tr>
                </tbody>
            </table>
            <Button variant="raised" color="primary">Submit Score</Button>
        </div>
    )
}

export default connect(mapStateToProps)(Scorecard);