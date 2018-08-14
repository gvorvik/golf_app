import React from 'react';

const CourseDiv = (props) => {
    return (
        <div className="courseDiv">
            <h2>{props.course.name}</h2>
            <p>City: {props.course.city}</p>
            <p>{props.course.holes} holes</p>
            <button onClick={() => props.getCourseInformation(props.course.id)} className="courseDetailsBtn">Course Details</button>
        </div>
    )
}

export default CourseDiv;