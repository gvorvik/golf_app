import React from 'react';
import { Query } from 'react-apollo';
import GetRoundScore from '../../../queries/GetRoundScore';

const backDropStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 800,
    minHeight: 500,
    margin: '0 auto',
    padding: 30,
    position: 'relative'
}

const ScoreDetailsModal = (props) => (
    <Query
        query={GetRoundScore}
        variables={{ round_id: props.selectedRoundID }}
        skip={!props.selectedRoundID}
    >
        {({ data = {}, loading, error }) => {
            if (!props.showModal || loading) {return null}
            if (error) {return <div>Error!!!!</div>}
            if (data.getRoundScores) {
                data.getRoundScores.sort(function(a, b){
                    let keyA = a.hole_info.holenumber,
                        keyB = b.hole_info.holenumber;
                    if(keyA < keyB) return -1;
                    if(keyA > keyB) return 1;
                    return 0;
                });
            }
            console.log(data);

            let holeNumbers;
            let holePars;
            let holeYardages;
            let holeHandicaps;
            let holeScores;
            let totalPar = 0;
            let totalYardage = 0;
            let totalScore = 0;
            let frontNinePar = 0;
            let frontNineYardage = 0;
            let frontNineScore = 0;
            let backNinePar = 0;
            let backNineYardage = 0;
            let backNineScore = 0;

            if (data.getRoundScores.length === 9) {
                holeNumbers = data.getRoundScores.map((hole, i) => {
                    return <th className="score-cell" scope="col" key={i}>
                        {hole.hole_info.holenumber}
                    </th>
                });

                holePars = data.getRoundScores.map((hole, i) => {
                    return <td className="score-cell" key={i}>
                        {hole.hole_info.par}
                    </td>
                });

                holeYardages = data.getRoundScores.map((hole, i) => {
                    return <td className="score-cell" key={i}>
                        {hole.hole_info.yardage}
                    </td>
                });

                holeHandicaps = data.getRoundScores.map((hole, i) => {
                    return <td className="score-cell" key={i}>
                        {hole.hole_info.handicap}
                    </td>
                });

                holeScores = data.getRoundScores.map((hole, i) => {
                    return <td className="score-cell" key={i}>
                        {hole.score}
                    </td>
                });

                data.getRoundScores.forEach((hole) => {
                    totalPar = totalPar + hole.hole_info.par;
                    totalYardage = totalYardage + hole.hole_info.yardage;
                    totalScore = totalScore + hole.score;
                });

                return <div style={backDropStyle}>
                    <div style={modalStyle}>
                        <h1>Score Details</h1>
                        <table className="course-table">
                            <thead>
                                <tr>
                                    <th scope="row">Hole</th>
                                    {holeNumbers}
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Par</th>
                                    {holePars}
                                    <td>{totalPar}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Score</th>
                                    {holeScores}
                                    <td>{totalScore}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Yardage</th>
                                    {holeYardages}
                                    <td>{totalYardage}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Handicap</th>
                                    {holeHandicaps}
                                    <td>X</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={props.closeScoreModal}>Close</button>
                    </div>
                </div>
            } else {
                data.getRoundScores.forEach((hole) => {
                    totalPar = totalPar + hole.hole_info.par;
                    totalYardage = totalYardage + hole.hole_info.yardage;
                    totalScore = totalScore + hole.score;

                    if (hole.hole_info.holenumber < 10) {
                        frontNinePar = frontNinePar + hole.hole_info.par;
                        frontNineYardage = frontNineYardage + hole.hole_info.yardage;
                        frontNineScore = frontNineScore + hole.score;
                    } else {
                        backNinePar = backNinePar + hole.hole_info.par;
                        backNineYardage = backNineYardage + hole.hole_info.yardage;
                        backNineScore = backNineScore + hole.score;
                    }

                });

                return <div style={backDropStyle}>
                    <div style={modalStyle}>
                        <h1>Score Details</h1>
                        <table className="course-table">
                            <thead>
                                <tr>
                                    <th scope="row">Hole</th>
                                    <th scope="row">{data.getRoundScores[0].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[1].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[2].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[3].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[4].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[5].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[6].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[7].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[8].hole_info.holenumber}</th>
                                    <th scope="col">Front Nine</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Par</th>
                                    <td>{data.getRoundScores[0].hole_info.par}</td>
                                    <td>{data.getRoundScores[1].hole_info.par}</td>
                                    <td>{data.getRoundScores[2].hole_info.par}</td>
                                    <td>{data.getRoundScores[3].hole_info.par}</td>
                                    <td>{data.getRoundScores[4].hole_info.par}</td>
                                    <td>{data.getRoundScores[5].hole_info.par}</td>
                                    <td>{data.getRoundScores[6].hole_info.par}</td>
                                    <td>{data.getRoundScores[7].hole_info.par}</td>
                                    <td>{data.getRoundScores[8].hole_info.par}</td>
                                    <td>{frontNinePar}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Yardage</th>
                                    <td>{data.getRoundScores[0].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[1].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[2].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[3].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[4].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[5].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[6].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[7].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[8].hole_info.yardage}</td>
                                    <td>{frontNineYardage}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Handicap</th>
                                    <td>{data.getRoundScores[0].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[1].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[2].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[3].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[4].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[5].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[6].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[7].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[8].hole_info.handicap}</td>
                                    <td>X</td>
                                </tr>
                                <tr>
                                    <th scope="row">Score</th>
                                    <td>{data.getRoundScores[0].score}</td>
                                    <td>{data.getRoundScores[1].score}</td>
                                    <td>{data.getRoundScores[2].score}</td>
                                    <td>{data.getRoundScores[3].score}</td>
                                    <td>{data.getRoundScores[4].score}</td>
                                    <td>{data.getRoundScores[5].score}</td>
                                    <td>{data.getRoundScores[6].score}</td>
                                    <td>{data.getRoundScores[7].score}</td>
                                    <td>{data.getRoundScores[8].score}</td>
                                    <td>{frontNineScore}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="course-table">
                            <thead>
                                <tr>
                                    <th scope="row">Hole</th>
                                    <th scope="row">{data.getRoundScores[9].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[10].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[11].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[12].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[13].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[14].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[15].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[16].hole_info.holenumber}</th>
                                    <th scope="row">{data.getRoundScores[17].hole_info.holenumber}</th>
                                    <th scope="col">Back Nine</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Par</th>
                                    <td>{data.getRoundScores[9].hole_info.par}</td>
                                    <td>{data.getRoundScores[10].hole_info.par}</td>
                                    <td>{data.getRoundScores[11].hole_info.par}</td>
                                    <td>{data.getRoundScores[12].hole_info.par}</td>
                                    <td>{data.getRoundScores[13].hole_info.par}</td>
                                    <td>{data.getRoundScores[14].hole_info.par}</td>
                                    <td>{data.getRoundScores[15].hole_info.par}</td>
                                    <td>{data.getRoundScores[16].hole_info.par}</td>
                                    <td>{data.getRoundScores[17].hole_info.par}</td>
                                    <td>{backNinePar}</td>
                                    <td>{totalPar}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Yardage</th>
                                    <td>{data.getRoundScores[9].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[10].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[11].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[12].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[13].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[14].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[15].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[16].hole_info.yardage}</td>
                                    <td>{data.getRoundScores[17].hole_info.yardage}</td>
                                    <td>{backNineYardage}</td>
                                    <td>{totalYardage}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Handicap</th>
                                    <td>{data.getRoundScores[9].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[10].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[11].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[12].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[13].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[14].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[15].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[16].hole_info.handicap}</td>
                                    <td>{data.getRoundScores[17].hole_info.handicap}</td>
                                    <td>X</td>
                                    <td>X</td>
                                </tr>
                                <tr>
                                    <th scope="row">Score</th>
                                    <td>{data.getRoundScores[9].score}</td>
                                    <td>{data.getRoundScores[10].score}</td>
                                    <td>{data.getRoundScores[11].score}</td>
                                    <td>{data.getRoundScores[12].score}</td>
                                    <td>{data.getRoundScores[13].score}</td>
                                    <td>{data.getRoundScores[14].score}</td>
                                    <td>{data.getRoundScores[15].score}</td>
                                    <td>{data.getRoundScores[16].score}</td>
                                    <td>{data.getRoundScores[17].score}</td>
                                    <td>{backNineScore}</td>
                                    <td>{totalScore}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="courseDetailsBtn" onClick={props.closeScoreModal}>Close</button>
                    </div>
                </div>
            }
        }}
    </Query>
)

export default ScoreDetailsModal;