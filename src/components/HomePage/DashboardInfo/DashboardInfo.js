import React from 'react';
import RoundsPlayed from './RoundsPlayed/RoundsPlayed';
import TopCourses from './TopCourses/TopCourses';
import Test from './Test/Test';

const DashboardInfo = (props) => {
    return (
    <div id="dashboard-main">
        <h1>My Profile</h1>
        <div className="dashboard-info-div">
            <RoundsPlayed />
            <TopCourses />
            <Test />
        </div>
    </div>
)}

export default DashboardInfo;