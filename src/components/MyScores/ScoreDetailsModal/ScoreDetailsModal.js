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
    maxWidth: 600,
    minHeight: 500,
    margin: '0 auto',
    padding: 30,
    position: 'relative'
}

const ScoreDetailsModal = (props) => {

    if (!props.showModal) {
        return null;
    }

    return <div style={backDropStyle}>
        <div style={modalStyle}>
            <h1>Test</h1>
            <button onClick={props.closeScoreModal}>Close</button>
        </div>
    </div>
}

export default ScoreDetailsModal;