import React from 'react';

const RoundsPlayed = (props) => {
    return (
    <div className="dashboard-info-div-child">
        <h2>Total Rounds</h2>
        {props.totalRounds}
    </div>
)}

export default RoundsPlayed;