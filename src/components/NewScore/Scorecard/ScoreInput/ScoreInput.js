import React from 'react';

const ScoreInput = (props) => {
    if (!props.getHoles) {return null;}

    let totalScore = Object.keys(props.scores).reduce((a, b) => {
        return a + Number(props.scores[b]);
    }, 0);

    let holeScores;

    holeScores = props.getHoles.map((hole, i) => {
        return <td className="score-cell" key={i}>
            <input onChange={props.handleScoreChange} name={hole.id} type="number" />
        </td>
    });

    holeScores = <tr><th scope="row">Score</th>{holeScores}<td>{totalScore}</td></tr>

    return holeScores;
}

export default ScoreInput;