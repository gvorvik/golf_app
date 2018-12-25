import React, {Fragment} from 'react';

const RecentScores = (props) => {
    let scores = props.recentScores.map((score, i) => {
        return <tr key={i} className="recent-score">
            <td>{score.date_played}</td>
            <td>{score.course.name}</td>
            <td>{score.total_score}</td>
        </tr>
    })

    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Course
                        </th>
                        <th>
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {scores}
                </tbody>
            </table>
        </Fragment>
    )
}

export default RecentScores;