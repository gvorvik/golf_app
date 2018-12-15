import React from 'react';
import { Query } from 'react-apollo';
import HoleInfoQuery from './../../../queries/HoleInfoQuery';
import HoleHistory from './../HoleHistory/HoleHistory';

const HoleSearch = (props) => (
    <Query
        query={HoleInfoQuery}
        variables={{course_id: props.course_id}}
        skip={!props.course_id}
    >
        { ({data = {}, client}) => {
            console.log(client, data);
            let courseChoices = props.getCourses && props.getCourses.map(course => {
                return <option key={course.id} value={course.id}>{course.name}</option>
            });

            let holes = data.getHoles && data.getHoles.map((hole, i) => <option key={i} value={i}>{hole.holenumber}</option>)

            let holeChoices = holes && (
                <div>
                    <select onChange={props.selectHole} defaultValue=' '>
                        <option value=' ' disabled> </option>
                        {holes}
                    </select>
                </div>
            );

            let selectedHole = (props.selectedHoleIndex || props.selectedHoleIndex === 0) && (
                <div>
                    <p>Hole {data.getHoles[props.selectedHoleIndex].holenumber}</p>
                    <p>Par {data.getHoles[props.selectedHoleIndex].par}</p>
                    <p>{data.getHoles[props.selectedHoleIndex].yardage} yards</p>
                    <p>{data.getHoles[props.selectedHoleIndex].handicap} Handicap</p>
                    <button onClick={props.showHoleScoresToggle}>Hole Scores</button>
                </div>
            );
    
            return (
                <div>
                    <select onChange={props.selectCourse} defaultValue=' '>
                        <option value=' ' disabled> </option>
                        {courseChoices}
                    </select>
                    {holeChoices}
                    {selectedHole}
                    <HoleHistory 
                        showHoleScores = { props.showHoleScores }
                        holeScores = {props.selectedHoleIndex || props.selectedHoleIndex === 0
                            ? data.getHoles[props.selectedHoleIndex].scores 
                            : null}
                        selectedHoleIndex = {props.selectedHoleIndex}
                    />
                </div>
            );
        }}
    </Query>
)

export default HoleSearch;