import React from 'react';
import RoundsPlayed from './RoundsPlayed/RoundsPlayed';
import TopCourses from './TopCourses/TopCourses';


const DashboardInfo = (props) => {
    return (
    <div id="dashboard-main">
        <div className="dashboard-info-div">
            <RoundsPlayed 
                totalRounds={props.totalRounds}
            />
            <TopCourses 
                topCourses={props.topCourses}
            />
        </div>
    </div>
)}

export default DashboardInfo;