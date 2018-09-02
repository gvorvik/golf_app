import React from 'react';
import HoleCard from './HoleCard/HoleCard';
import NewCourseSummary from './../NewCourseSummary/NewCourseSummary';

const HoleInformation = (props) => {

    let holeList = [];

    for (let i = 1; i <= props.numberOfHoles; i++) {
        holeList = [...holeList, <HoleCard key={i} hole={i} addHoleToList={props.addHoleToList} previousHole={props.previousHole}/>]
    }

    if (props.numberOfHoles === 9) {
        switch (props.holeStep) {
            case 1:
                return holeList[0];
            case 2:
                return holeList[1];
            case 3:
                return holeList[2];
            case 4:
                return holeList[3];
            case 5:
                return holeList[4];
            case 6:
                return holeList[5];
            case 7:
                return holeList[6];
            case 8:
                return holeList[7];
            case 9:
                return holeList[8];
            default:
                return <NewCourseSummary 
                courseName={props.courseName}
                courseCity={props.courseCity}
                numberOfHoles={props.numberOfHoles}
                holeInformation={props.holeInformation}
                submitCourse={props.submitCourse}
            />;
        }
    } else {
        switch (props.holeStep) {
            case 1:
                return holeList[0];
            case 2:
                return holeList[1];
            case 3:
                return holeList[2];
            case 4:
                return holeList[3];
            case 5:
                return holeList[4];
            case 6:
                return holeList[5];
            case 7:
                return holeList[6];
            case 8:
                return holeList[7];
            case 9:
                return holeList[8];
            case 10:
                return holeList[9];
            case 11:
                return holeList[10];
            case 12:
                return holeList[11];
            case 13:
                return holeList[12];
            case 14:
                return holeList[13];
            case 15:
                return holeList[14];
            case 16:
                return holeList[15];
            case 17:
                return holeList[16];
            case 18:
                return holeList[17];
            default:
                return <NewCourseSummary 
                courseName={props.courseName}
                courseCity={props.courseCity}
                numberOfHoles={props.numberOfHoles}
                holeInformation={props.holeInformation}
                submitCourse={props.submitCourse}
            />;
        }
    }
}

export default HoleInformation;