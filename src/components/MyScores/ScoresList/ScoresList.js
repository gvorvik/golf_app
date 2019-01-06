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
            if(loading || !data.getRoundsByCourse) {return null};
            if(error) {return <div>Error!!!!</div>}
            let scores = data.getRoundsByCourse && data.getRoundsByCourse.map(score => {
                return <tr key={score.id}>
                    <td>{score.date_played}</td>
                    <td>{score.total_score}</td>
                    <td><button onClick={() => props.getScoreDetails(score.id)} className="btn btn__table">Score Details</button></td>
                </tr>
            });

            return (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Score</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores}
                    </tbody>
                </table>
            )
        }}
    </Query>
)

export default ScoreList;