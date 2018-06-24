import React from 'react';

const SummaryOfNewCourse = (props) => {
    let holeInfo = [];

    for(let i in props.holeInformation) {
        let hole = props.holeInformation[i]; 
        let listItem = <div key={hole.holeNumber}>
            <h2>Hole {hole.holeNumber}</h2> 
            <ul>
                <li>Par: {hole.par}</li>
                <li>Yards: {hole.yardage}</li>
                <li>Handicap: {hole.handicap}</li>
            </ul>
        </div>
        holeInfo = [...holeInfo, listItem]
    }

    return <div>
            <h1>Hello Summary</h1>
            <h2>Course Name: {props.courseName}</h2>
            <h2>Course City: {props.courseCity}</h2>
            <h2>Number of Holes: {props.numberOfHoles}</h2>
            <div>
                {holeInfo}
            </div>
        </div>
}

export default SummaryOfNewCourse;