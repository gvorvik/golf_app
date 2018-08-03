import React from 'react';

const RecentScores = (props) => {
    let scores = props.recentScores.map((score, i)=>{
    return <div key={i} className="recent-score">
        <h3>{score.name}</h3>
        <p>Date: {score.date_played}</p>
        <p>Score: {score.total_score}</p>
    </div>
    })

    return (
    <div id="recent-scores-div">
        <h2>Latest Scores</h2>
        {scores}
    </div>
)}

export default RecentScores;