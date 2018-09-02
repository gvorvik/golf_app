import React from 'react';

const TopCourses = (props) => {
    let topCourses = props.topCourses.map((course, i) => {
        return <div key={i} className="topCourseDiv">
            <h4>{course.name}</h4>
            <p>{course.count} rounds played</p>
        </div>
    });

    return (
    <div className="dashboard-info-div-child">
        <h2>Top Courses</h2>
        {topCourses}
    </div>
)}

export default TopCourses;