import React from 'react';
import axios from 'axios';

const ScoreList = (props) => {

    let scores = props.searchResults.map(score => {
        return <div className="scoreSearchDiv" key={score.id}>
            <h2>{score.date_played}</h2>
            <p>{score.total_score}</p>
            <button onClick={() => props.getScoreDetails(score.id)}>Score Details</button>
        </div>
    });

    return (
        <div>
            {scores}
        </div>
    )
}

export default ScoreList;