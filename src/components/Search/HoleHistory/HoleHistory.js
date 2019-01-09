import React from 'react';

const HoleHistory = (props) => {
        if (!props.showHoleScores) {return null};
        let holeScores = props.showHoleScores && props.holeScores.map(score => {
                return <tr key={score.id}>
                    <td>{score.score}</td>
                    <td>{score.round_info.date_played}</td>
                </tr>
            });
        return <table>
            <thead>
                <tr>
                    <th>Date Played</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {holeScores}
            </tbody>
        </table>
}

export default HoleHistory;