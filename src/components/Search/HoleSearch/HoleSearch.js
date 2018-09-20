import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    courses: state.course.myCourses,
});

const HoleSearch = (props) => {

    let courseChoices = props.courses.map(course => {
        return <option key={course.id} value={course.id}>{course.name}</option>
    });

    let holeChoices = null;
    let selectedHole = null;

    if(props.holeInfo) {
        let holes = props.holeInfo.map(hole => <option key={hole.id} value={hole.id}>{hole.holenumber}</option>)
        holeChoices = (<select onChange={props.selectHole} defaultValue=' '>
            <option value=' ' disabled> </option>
            {holes}
        </select>);
    } 

    if(props.selectedHole) {
        selectedHole = <div>
            <p>Hole {props.selectedHole.holenumber}</p>
            <p>Par {props.selectedHole.par}</p>
            <p>{props.selectedHole.yardage} yards</p>
            <p>{props.selectedHole.handicap} Handicap</p>
            <button onClick={props.getHoleScores}>Get Hole Scores</button>
        </div>;
    }
    
    return (
        <div>
            <select onChange={props.selectCourse} defaultValue=' '>
                <option value=' ' disabled> </option>
                {courseChoices}
            </select>
            <div>
                {holeChoices}
            </div>
            {selectedHole}
        </div>
    );
}

export default connect(mapStateToProps) (HoleSearch);