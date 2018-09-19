import React from 'react';

const SummaryOfNewCourse = (props) => {
    let holeNumbers = [];
    let holeYardage = [];
    let holePars = [];
    let holeHandicap = [];
    let yardageTotal = 0
    let parTotal = 0;

    for (let i in props.holeInformation) {
        let hole = props.holeInformation[i];
        holeNumbers = [...holeNumbers, <th scope='col' key={hole.holeNumber}>{hole.holeNumber}</th>];
        holeYardage = [...holeYardage, <td key={hole.holeNumber}>{hole.yardage}</td>];
        holePars = [...holePars, <td key={hole.holeNumber}>{hole.par}</td>];
        holeHandicap = [...holeHandicap, <td key={hole.holeNumber}>{hole.handicap}</td>];
        yardageTotal += hole.yardage;
        parTotal += hole.par;
    }

    return <div>
        <h1>Summary</h1>
        <h2>Course Name: {props.courseName}</h2>
        <h2>Course City: {props.courseCity}</h2>
        <h2>Number of Holes: {props.numberOfHoles}</h2>
        <div>
            <table className='course-table'>
                <thead>
                    <tr>
                        <th scope='col'> </th>
                        {holeNumbers}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>Yardage</th>
                        {holeYardage}
                        <td>{yardageTotal}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Par</th>
                        {holePars}
                        <td>{parTotal}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Handicap</th>
                        {holeHandicap}
                        <td>X</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button onClick={props.submitCourse}>Submit Course</button>
    </div>
}

export default SummaryOfNewCourse;