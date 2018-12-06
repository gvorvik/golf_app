import React from 'react';
import { Query } from 'react-apollo';
import CourseInfo from './../../../queries/CourseInfo';
import ScoreInput from './ScoreInput/ScoreInput';
import SubmitScoreBtn from './SubmitScoreBtn/SubmitScoreBtn';


const Scorecard = (props) => (
    <Query
        query={CourseInfo}
        variables={{ course_id: props.selectedCourseId }}
        skip={!props.selectedCourseId}
    >
        {({ data = {}, loading }) => {
            if (loading) { return null }
            let holeNumbers;
            let holePars;
            let holeYardages;
            let holeHandicaps;
            let totalPar = 0;
            let totalYardage = 0;
            let { getHoles } = data;

            if (getHoles) {

                holeNumbers = getHoles.map((hole, i) => {
                    return <th className="score-cell" scope="col" key={i}>
                        {hole.holenumber}
                    </th>
                });

                holePars = getHoles.map((hole, i) => {
                    return <td className="score-cell" key={i}>
                        {hole.par}
                    </td>
                });

                holeYardages = getHoles.map((hole, i) => {
                    return <td className="score-cell" key={i}>
                        {hole.yardage}
                    </td>
                });

                holeHandicaps = getHoles.map((hole, i) => {
                    return <td className="score-cell" key={i}>
                        {hole.handicap}
                    </td>
                });

                getHoles.forEach((hole) => {
                    totalPar = totalPar += hole.par;
                    totalYardage = totalYardage += hole.yardage;
                });

                holeNumbers = <tr><th scope="row">Hole</th>{holeNumbers}<th scope="col">Total</th></tr>;
                holePars = <tr><th scope="row">Par</th>{holePars}<td>{totalPar}</td></tr>;
                holeYardages = <tr><th scope="row">Yardage</th>{holeYardages}<td>{totalYardage}</td></tr>;
                holeHandicaps = <tr><th scope="row">Handicap</th>{holeHandicaps}<td>X</td></tr>;
            }

            return (
                <div>
                    <h1>Scorecard</h1>
                    <table className="course-table">
                        <thead>
                            {holeNumbers}
                        </thead>
                        <tbody>
                            {holePars}
                            {holeYardages}
                            {holeHandicaps}
                            <ScoreInput
                                getHoles={getHoles}
                                handleScoreChange={props.handleScoreChange}
                                scores={props.scores}
                            />
                        </tbody>
                    </table>
                    <SubmitScoreBtn 
                        getHoles={getHoles} 
                        handleSubmit={props.handleSubmit} 
                        selectedCourseId={props.selectedCourseId}
                        date={props.date}
                        scores={props.scores}
                        history={props.history}
                    />
                </div>
            )
        }}
    </Query>
)

export default Scorecard;