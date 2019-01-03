import React from 'react';

const RoundsPlayed = (props) => {
    return (
    <div className="dashboard__rounds-played">
        <h2>Total Rounds</h2>
        {props.totalRounds}
    </div>
)}

export default RoundsPlayed;