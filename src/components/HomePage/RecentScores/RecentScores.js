import React from 'react';

const RecentScores = (props) => {
    let scores = props.recentScores.map((score, i) => {
        return <tr key={i} className="recent-score">
            <td>{score.date_played}</td>
            <td>{score.course.name}</td>
            <td>{score.total_score}</td>
            <td>
                <button className="btn btn__table">
                    Score Details
                </button>
            </td>
        </tr>
    })

    return (
        <div className="dashboard__recent-scores">
            <h2>Most Recent Scores</h2>
            <div className="dashboard__recent-scores-table">
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
                            <th>
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentScores;