import React, {Fragment} from 'react';
import RoundsPlayed from './RoundsPlayed/RoundsPlayed';
import TopCourses from './TopCourses/TopCourses';


const DashboardInfo = (props) => {
    return (
        <Fragment>
            <RoundsPlayed
                totalRounds={props.totalRounds}
            />
            <TopCourses
                topCourses={props.topCourses}
            />
        </Fragment>
    )
}

export default DashboardInfo;