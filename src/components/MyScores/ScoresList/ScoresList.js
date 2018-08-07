import React from 'react';

const ScoreList = (props) => {
    const getScoreDetails = (id) => {
        console.log('button click', id);
    }

    let scores = props.searchResults.map(score => {
        return <div key={score.id}>
            <h2>{score.date_played}</h2>
            <p>{score.total_score}</p>
            <button onClick={() => getScoreDetails(score.id)}>Score Details</button>
        </div>
    });

    return (
        <div>
            <h1>YO</h1>
            {JSON.stringify(props.searchResults)}
            {scores}
        </div>
    )
}

export default ScoreList;