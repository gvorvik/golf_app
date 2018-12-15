import React from 'react';
import {Query} from 'react-apollo';
import GetRoundsByCourse from './../../../queries/GetRoundsByCourse';

const ScoreList = (props) => (
    <Query
        query={GetRoundsByCourse}
        variables={{ course_id: props.selectedCourseID }}
        skip={!props.selectedCourseID}
    >
        {({ data = {}, loading, error }) => {
            if(loading) {return <div>Loading</div>};
            if(error) {return <div>Error!!!!</div>}
            let scores = data.getRoundsByCourse && data.getRoundsByCourse.map(score => {
                return <div className="scoreSearchDiv" key={score.id}>
                    <h2>{score.date_played}</h2>
                    <p>{score.total_score}</p>
                    <button onClick={() => props.getScoreDetails(score.id)} className="scoreDetailsBtn">Score Details</button>
                </div>
            });

            return (
                <div>
                    {scores}
                </div>
            )
        }}
    </Query>
)

export default ScoreList;