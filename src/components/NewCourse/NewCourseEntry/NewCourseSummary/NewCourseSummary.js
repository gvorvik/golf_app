import React from 'react';

const SummaryOfNewCourse = (props) => {
    let holeInfo = [];

    for (let i in props.holeInformation) {
        let hole = props.holeInformation[i];
        let listItem = <tr key={hole.holeNumber}>
            <th scope='row'>{hole.holeNumber}</th>
            <td>{hole.par}</td>
            <td>{hole.yardage}</td>
            <td>{hole.handicap}</td>
        </tr>
        holeInfo = [...holeInfo, listItem]
    }

    return <div>
        <h1>Summary</h1>
        <h2>Course Name: {props.courseName}</h2>
        <h2>Course City: {props.courseCity}</h2>
        <h2>Number of Holes: {props.numberOfHoles}</h2>
        <div>
            <table className='course-table'>
                <thead>
                    <th scope='col'>Hole</th>
                    <th scope='col'>Yardage</th>
                    <th scope='col'>Par</th>
                    <th scope='col'>Handicap</th>
                </thead>
                <tbody>
                    {holeInfo}
                </tbody>
            </table>
        </div>
        <button onClick={props.submitCourse}>Submit Course</button>
    </div>
}

export default SummaryOfNewCourse;