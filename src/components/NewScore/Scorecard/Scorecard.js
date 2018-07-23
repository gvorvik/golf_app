import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ScoreInput from './ScoreInput/ScoreInput';
import HoleScoreDiv from './HoleScoreDiv/HoleScoreDiv';

const mapStateToProps = state => ({
    holeInfo: state.score.scoreReducer.holeInfo
});

const Scorecard = (props) => {
    let holeDivs;

    if(props.holeInfo) {
        holeDivs = props.holeInfo.map((hole, i) => {
            return <HoleScoreDiv 
                key={i}
                holeNumber={hole.holenumber}
                holeYardage={hole.yardage}
                holeHandicap={hole.handicap}
                holePar={hole.par}
            />
        })
    }

    return (
        <div>
            <h1>Scorecard</h1>
            {holeDivs}
            <Button variant="raised" color="primary">Submit Score</Button>
        </div>
    )
}

export default connect(mapStateToProps)(Scorecard);