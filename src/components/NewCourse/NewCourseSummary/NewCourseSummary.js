import React from 'react';

const SummaryOfNewCourse = (props) => {
    let holeInfo = [];

    for(let i in props.holeInformation) {
        let hole = props.holeInformation[i]; 
        let listItem = <li key={hole.holeNumber}>{hole.par}</li>
        holeInfo = [...holeInfo, listItem]
    }

    return <div>
            <h1>Hello Summary</h1>
            <h2>Course Name: {props.courseName}</h2>
            <h2>Course City: {props.courseCity}</h2>
            <h2>Number of Holes: {props.numberOfHoles}</h2>
            <ul>
                {holeInfo}
            </ul>
                {JSON.stringify(props.holeInformation)}
            
        </div>
}

export default SummaryOfNewCourse;