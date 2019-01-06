import React from 'react';

const CourseDiv = (props) => {
    return (
        <tr className="courseDiv">
            <td>{props.course.name}</td>
            <td>{props.course.city}</td>
            <td>{props.course.holes}</td>
            <td><button onClick={() => props.getCourseInformation(props.course.id)} className="btn btn__table">Course Details</button></td>
        </tr>
    )
}

export default CourseDiv;