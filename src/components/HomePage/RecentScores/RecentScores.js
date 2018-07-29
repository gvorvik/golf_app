import React from 'react';
import { connect } from 'react-redux';

const RecentScores = (props) => {
    let scores = props.recentScores.map(score=>{
    return <div>
        <h3>{score.name}</h3>
        <p>Date: {score.date_played}</p>
        <p>Score: {score.total_score}</p>
    </div>
    })
    return (
    <div>
        <h1>Recent Scores</h1>
        {scores}
    </div>
)}

export default RecentScores;