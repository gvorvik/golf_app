import React from 'react';

const HoleHistory = (props) => {
        let holeScores = null;

        if(props.holeScores) {
            holeScores = props.holeScores.map(hole => {
                return <div key={hole.id}>
                    <p>Score: {hole.score}</p>
                    <p>Date Played: {hole.date_played}</p>
                </div>
            });
        }

        return <div>
            {holeScores}
        </div>
}

export default HoleHistory;