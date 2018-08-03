import React from 'react';

const CourseDiv = (props) => {
    return (
        <div className="courseDiv">
            <h3>{props.course.name}</h3>
            <p>{props.course.city}</p>
            <p>{props.course.holes}</p>
            <button onClick={() => props.getCourseInformation(props.course.id)} className="btn">Course Details</button>
        </div>
    )
}

export default CourseDiv;