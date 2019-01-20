import React from 'react';
import { Mutation } from 'react-apollo';

import AddCourse from './../../../../mutations/AddCourse';

const HoleInformation = (props) => {

    let holeNumbers = []
    let holeYardages = [];
    let holePars = [];
    let holeHandicaps = [];

    for (let i = 1; i <= props.numberOfHoles; i++) {
        holeNumbers = [...holeNumbers, <th key={i} scope="col">{i}</th>];
        holeYardages = [...holeYardages, <td key={i}><input onChange={(e) => props.handleNewCourseInfoChange(Number(i), e)} name="yardage" type="number" /></td>];
        holePars = [...holePars, <td key={i}><input onChange={(e) => props.handleNewCourseInfoChange(Number(i), e)} name="par" type="number" /></td>];
        holeHandicaps = [...holeHandicaps, <td key={i}><input onChange={(e) => props.handleNewCourseInfoChange(Number(i), e)} name="handicap" type="number" /></td>];
    }

    return (
        <Mutation mutation={AddCourse}>
            {(addCourse, { data }) => (
                <div>
                    <h2>{props.courseName}</h2>
                    <h3>{props.courseCity}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th scope="row">Hole</th>
                                {holeNumbers}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Yardage</th>
                                {holeYardages}
                            </tr>
                            <tr>
                                <th scope="row">Par</th>
                                {holePars}
                            </tr>
                            <tr>
                                <th scope="row">Handicap</th>
                                {holeHandicaps}
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={props.previousStep}>Go Back</button>
                    <button onClick={() => {
                        let holesArray = props.holeInformation && Object.keys(props.holeInformation).reduce((accum, i) => {
                            return [...accum, props.holeInformation[i]];
                        }, []);
                        addCourse({ variables: { name: props.courseName, city: props.courseCity, holes: props.numberOfHoles, holeInformation: holesArray } })
                        props.submitCourse();
                    }}>
                        Submit Course
                    </button>
                </div>
            )}
        </Mutation>
    )
}

export default HoleInformation;