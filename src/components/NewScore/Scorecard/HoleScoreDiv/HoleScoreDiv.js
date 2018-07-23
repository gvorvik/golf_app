import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    state
);

const HoleScoreDiv = (props) => {

    return (
        <div>
            <h1>Hole {props.holeNumber}</h1>
            <p>Par {props.holePar}</p>
            <p>{props.holeYardage} Yards</p>
            <p>Handicap: {props.holeHandicap}</p>
        </div>
    )
}

export default connect(mapStateToProps)(HoleScoreDiv);