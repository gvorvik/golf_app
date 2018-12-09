import React, {Fragment} from 'react';

const HoleHistory = (props) => {
        let holeScores = props.showHoleScores && props.holeScores.map(score => {
                return <div key={score.id}>
                    <p>Score: {score.score}</p>
                    <p>Date Played: {score.round_info.date_played}</p>
                </div>
            });
        return <Fragment>
            {holeScores}
        </Fragment>
}

export default HoleHistory;