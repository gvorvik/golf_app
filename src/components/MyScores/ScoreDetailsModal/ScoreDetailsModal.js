import React from 'react';

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

const ScoreDetailsModal = (props) => {
    if (!props.showModal) {
        return null;
    }

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

    if(props.scoreDetails.length === 9) {
        holeNumbers = props.scoreDetails.map((hole, i) => {
            return <th className="score-cell" scope="col" key={i}>
                    {hole.holenumber}
            </th>
        });
    
        holePars = props.scoreDetails.map((hole, i) => {
            return <td className="score-cell" key={i}>
                {hole.par}
            </td>
        });
    
        holeYardages = props.scoreDetails.map((hole, i) => {
            return <td className="score-cell" key={i}>
                {hole.yardage}
            </td>
        });
    
        holeHandicaps = props.scoreDetails.map((hole, i) => {
            return <td className="score-cell" key={i}>
                {hole.handicap}
            </td>
        });
    
        holeScores = props.scoreDetails.map((hole, i) => {
            return <td className="score-cell" key={i}>
                    {hole.score}
            </td>
        });
    
        props.scoreDetails.forEach((hole) => {
            totalPar = totalPar + hole.par;
            totalYardage = totalYardage + hole.yardage;
            totalScore = totalScore +hole.score;
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
        props.scoreDetails.forEach((hole) => {
            totalPar = totalPar + hole.par;
            totalYardage = totalYardage + hole.yardage;
            totalScore = totalScore + hole.score;

            if(hole.holenumber < 10) {
                frontNinePar = frontNinePar + hole.par;
                frontNineYardage = frontNineYardage + hole.yardage;
                frontNineScore = frontNineScore + hole.score;
            } else {
                backNinePar = backNinePar + hole.par;
                backNineYardage = backNineYardage + hole.yardage;
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
                            <th scope="row">{props.scoreDetails[0].holenumber}</th>
                            <th scope="row">{props.scoreDetails[1].holenumber}</th>
                            <th scope="row">{props.scoreDetails[2].holenumber}</th>
                            <th scope="row">{props.scoreDetails[3].holenumber}</th>
                            <th scope="row">{props.scoreDetails[4].holenumber}</th>
                            <th scope="row">{props.scoreDetails[5].holenumber}</th>
                            <th scope="row">{props.scoreDetails[6].holenumber}</th>
                            <th scope="row">{props.scoreDetails[7].holenumber}</th>
                            <th scope="row">{props.scoreDetails[8].holenumber}</th>
                            <th scope="col">Front Nine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Par</th>
                            <td>{props.scoreDetails[0].par}</td>
                            <td>{props.scoreDetails[1].par}</td>
                            <td>{props.scoreDetails[2].par}</td>
                            <td>{props.scoreDetails[3].par}</td>
                            <td>{props.scoreDetails[4].par}</td>
                            <td>{props.scoreDetails[5].par}</td>
                            <td>{props.scoreDetails[6].par}</td>
                            <td>{props.scoreDetails[7].par}</td>
                            <td>{props.scoreDetails[8].par}</td>
                            <td>{frontNinePar}</td>
                        </tr>
                        <tr>
                            <th scope="row">Yardage</th>
                            <td>{props.scoreDetails[0].yardage}</td>
                            <td>{props.scoreDetails[1].yardage}</td>
                            <td>{props.scoreDetails[2].yardage}</td>
                            <td>{props.scoreDetails[3].yardage}</td>
                            <td>{props.scoreDetails[4].yardage}</td>
                            <td>{props.scoreDetails[5].yardage}</td>
                            <td>{props.scoreDetails[6].yardage}</td>
                            <td>{props.scoreDetails[7].yardage}</td>
                            <td>{props.scoreDetails[8].yardage}</td>
                            <td>{frontNineYardage}</td>
                        </tr>
                        <tr>
                            <th scope="row">Handicap</th>
                            <td>{props.scoreDetails[0].handicap}</td>
                            <td>{props.scoreDetails[1].handicap}</td>
                            <td>{props.scoreDetails[2].handicap}</td>
                            <td>{props.scoreDetails[3].handicap}</td>
                            <td>{props.scoreDetails[4].handicap}</td>
                            <td>{props.scoreDetails[5].handicap}</td>
                            <td>{props.scoreDetails[6].handicap}</td>
                            <td>{props.scoreDetails[7].handicap}</td>
                            <td>{props.scoreDetails[8].handicap}</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <th scope="row">Score</th>
                            <td>{props.scoreDetails[0].score}</td>
                            <td>{props.scoreDetails[1].score}</td>
                            <td>{props.scoreDetails[2].score}</td>
                            <td>{props.scoreDetails[3].score}</td>
                            <td>{props.scoreDetails[4].score}</td>
                            <td>{props.scoreDetails[5].score}</td>
                            <td>{props.scoreDetails[6].score}</td>
                            <td>{props.scoreDetails[7].score}</td>
                            <td>{props.scoreDetails[8].score}</td>
                            <td>{frontNineScore}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="course-table">
                    <thead>
                        <tr>
                            <th scope="row">Hole</th>
                            <th scope="row">{props.scoreDetails[9].holenumber}</th>
                            <th scope="row">{props.scoreDetails[10].holenumber}</th>
                            <th scope="row">{props.scoreDetails[11].holenumber}</th>
                            <th scope="row">{props.scoreDetails[12].holenumber}</th>
                            <th scope="row">{props.scoreDetails[13].holenumber}</th>
                            <th scope="row">{props.scoreDetails[14].holenumber}</th>
                            <th scope="row">{props.scoreDetails[15].holenumber}</th>
                            <th scope="row">{props.scoreDetails[16].holenumber}</th>
                            <th scope="row">{props.scoreDetails[17].holenumber}</th>
                            <th scope="col">Back Nine</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Par</th>
                            <td>{props.scoreDetails[9].par}</td>
                            <td>{props.scoreDetails[10].par}</td>
                            <td>{props.scoreDetails[11].par}</td>
                            <td>{props.scoreDetails[12].par}</td>
                            <td>{props.scoreDetails[13].par}</td>
                            <td>{props.scoreDetails[14].par}</td>
                            <td>{props.scoreDetails[15].par}</td>
                            <td>{props.scoreDetails[16].par}</td>
                            <td>{props.scoreDetails[17].par}</td>
                            <td>{backNinePar}</td>
                            <td>{totalPar}</td>
                        </tr>
                        <tr>
                            <th scope="row">Yardage</th>
                            <td>{props.scoreDetails[9].yardage}</td>
                            <td>{props.scoreDetails[10].yardage}</td>
                            <td>{props.scoreDetails[11].yardage}</td>
                            <td>{props.scoreDetails[12].yardage}</td>
                            <td>{props.scoreDetails[13].yardage}</td>
                            <td>{props.scoreDetails[14].yardage}</td>
                            <td>{props.scoreDetails[15].yardage}</td>
                            <td>{props.scoreDetails[16].yardage}</td>
                            <td>{props.scoreDetails[17].yardage}</td>
                            <td>{backNineYardage}</td>
                            <td>{totalYardage}</td>
                        </tr>
                        <tr>
                            <th scope="row">Handicap</th>
                            <td>{props.scoreDetails[9].handicap}</td>
                            <td>{props.scoreDetails[10].handicap}</td>
                            <td>{props.scoreDetails[11].handicap}</td>
                            <td>{props.scoreDetails[12].handicap}</td>
                            <td>{props.scoreDetails[13].handicap}</td>
                            <td>{props.scoreDetails[14].handicap}</td>
                            <td>{props.scoreDetails[15].handicap}</td>
                            <td>{props.scoreDetails[16].handicap}</td>
                            <td>{props.scoreDetails[17].handicap}</td>
                            <td>X</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <th scope="row">Score</th>
                            <td>{props.scoreDetails[9].score}</td>
                            <td>{props.scoreDetails[10].score}</td>
                            <td>{props.scoreDetails[11].score}</td>
                            <td>{props.scoreDetails[12].score}</td>
                            <td>{props.scoreDetails[13].score}</td>
                            <td>{props.scoreDetails[14].score}</td>
                            <td>{props.scoreDetails[15].score}</td>
                            <td>{props.scoreDetails[16].score}</td>
                            <td>{props.scoreDetails[17].score}</td>
                            <td>{backNineScore}</td>
                            <td>{totalScore}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="courseDetailsBtn" onClick={props.closeScoreModal}>Close</button>
            </div>
        </div>
    }
}

export default ScoreDetailsModal;