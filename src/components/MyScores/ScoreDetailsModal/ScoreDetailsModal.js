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
    minHeight: 800,
    margin: '0 auto',
    padding: 30,
    position: 'relative'
}

const ScoreDetailsModal = (props) => {
    let scoreDetails = props.scoreDetails.map(score=>{
        return <div key={score.holenumber} className="scoreDetailsByHole">
        <h3>Hole {score.holenumber}</h3>
        <p>{score.yardage} yards</p>
        <p>Par {score.par}</p>
        <p>Score: {score.score}</p>
        </div>
    });

    if (!props.showModal) {
        return null;
    }

    return <div style={backDropStyle}>
        <div style={modalStyle}>
            <h1>Test</h1>
            {scoreDetails}
            <button onClick={props.closeScoreModal}>Close</button>
        </div>
    </div>
}

export default ScoreDetailsModal;