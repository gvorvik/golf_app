import React from 'react';
import { Query } from 'react-apollo';
import CourseInfo from './../../../queries/CourseInfo';

const backDropStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 800,
    minHeight: 500,
    margin: '0 auto',
    padding: 30,
    position: 'relative'
}

const CourseDetailsModal = (props) => (
    <Query
        query={CourseInfo}
        variables={{course_id: props.selectedCourseId}}
        skip={!props.selectedCourseId}
    >
        {
            ({ data = {}, loading }) => {
                if (!props.showModal || loading) {
                    return null;
                }

                let holeNumbers;
                let holePars;
                let holeYardages;
                let holeHandicaps;
                let totalPar = 0;
                let frontNinePar = 0;
                let backNinePar = 0;
                let totalYardage = 0;
                let frontNineYardage = 0;
                let backNineYardage = 0;

                if (data.getHoles.length === 9) {
                    holeNumbers = data.getHoles.map((hole, i) => {
                        return <th className="score-cell" scope="col" key={i}>
                            {hole.holenumber}
                        </th>
                    });

                    holePars = data.getHoles.map((hole, i) => {
                        return <td className="score-cell" key={i}>
                            {hole.par}
                        </td>
                    });

                    holeYardages = data.getHoles.map((hole, i) => {
                        return <td className="score-cell" key={i}>
                            {hole.yardage}
                        </td>
                    });

                    holeHandicaps = data.getHoles.map((hole, i) => {
                        return <td className="score-cell" key={i}>
                            {hole.handicap}
                        </td>
                    });


                    data.getHoles.forEach((hole) => {
                        totalPar = totalPar + hole.par;
                        totalYardage = totalYardage + hole.yardage;
                    });

                    return <div style={backDropStyle}>
                        <div style={modalStyle}>
                            <h1>Score Details</h1>
                            <table className="course-table">
                                <thead>
                                    <tr>
                                        <th scope="row">Hole</th>
                                        {holeNumbers}
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Par</th>
                                        {holePars}
                                        <td>{totalPar}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Yardage</th>
                                        {holeYardages}
                                        <td>{totalYardage}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Handicap</th>
                                        {holeHandicaps}
                                        <td>X</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="courseDetailsBtn" onClick={props.closeCourseModal}>Close</button>
                        </div>
                    </div>
                } else if (data.getHoles.length === 18) {

                    data.getHoles.forEach((hole) => {
                        totalPar = totalPar + hole.par;
                        totalYardage = totalYardage + hole.yardage;

                        if (hole.holenumber < 10) {
                            frontNinePar = frontNinePar + hole.par;
                            frontNineYardage = frontNineYardage + hole.yardage;
                        } else {
                            backNinePar = backNinePar + hole.par;
                            backNineYardage = backNineYardage + hole.yardage;
                        }

                    });

                    return <div style={backDropStyle}>
                        <div style={modalStyle}>
                            <h1>Score Details</h1>
                            <table className="course-table">
                                <thead>
                                    <tr>
                                        <th scope="row">Hole</th>
                                        <th scope="row">{data.getHoles[0].holenumber}</th>
                                        <th scope="row">{data.getHoles[1].holenumber}</th>
                                        <th scope="row">{data.getHoles[2].holenumber}</th>
                                        <th scope="row">{data.getHoles[3].holenumber}</th>
                                        <th scope="row">{data.getHoles[4].holenumber}</th>
                                        <th scope="row">{data.getHoles[5].holenumber}</th>
                                        <th scope="row">{data.getHoles[6].holenumber}</th>
                                        <th scope="row">{data.getHoles[7].holenumber}</th>
                                        <th scope="row">{data.getHoles[8].holenumber}</th>
                                        <th scope="col">Front Nine</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Par</th>
                                        <td>{data.getHoles[0].par}</td>
                                        <td>{data.getHoles[1].par}</td>
                                        <td>{data.getHoles[2].par}</td>
                                        <td>{data.getHoles[3].par}</td>
                                        <td>{data.getHoles[4].par}</td>
                                        <td>{data.getHoles[5].par}</td>
                                        <td>{data.getHoles[6].par}</td>
                                        <td>{data.getHoles[7].par}</td>
                                        <td>{data.getHoles[8].par}</td>
                                        <td>{frontNinePar}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Yardage</th>
                                        <td>{data.getHoles[0].yardage}</td>
                                        <td>{data.getHoles[1].yardage}</td>
                                        <td>{data.getHoles[2].yardage}</td>
                                        <td>{data.getHoles[3].yardage}</td>
                                        <td>{data.getHoles[4].yardage}</td>
                                        <td>{data.getHoles[5].yardage}</td>
                                        <td>{data.getHoles[6].yardage}</td>
                                        <td>{data.getHoles[7].yardage}</td>
                                        <td>{data.getHoles[8].yardage}</td>
                                        <td>{frontNineYardage}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Handicap</th>
                                        <td>{data.getHoles[0].handicap}</td>
                                        <td>{data.getHoles[1].handicap}</td>
                                        <td>{data.getHoles[2].handicap}</td>
                                        <td>{data.getHoles[3].handicap}</td>
                                        <td>{data.getHoles[4].handicap}</td>
                                        <td>{data.getHoles[5].handicap}</td>
                                        <td>{data.getHoles[6].handicap}</td>
                                        <td>{data.getHoles[7].handicap}</td>
                                        <td>{data.getHoles[8].handicap}</td>
                                        <td>X</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="course-table">
                                <thead>
                                    <tr>
                                        <th scope="row">Hole</th>
                                        <th scope="row">{data.getHoles[9].holenumber}</th>
                                        <th scope="row">{data.getHoles[10].holenumber}</th>
                                        <th scope="row">{data.getHoles[11].holenumber}</th>
                                        <th scope="row">{data.getHoles[12].holenumber}</th>
                                        <th scope="row">{data.getHoles[13].holenumber}</th>
                                        <th scope="row">{data.getHoles[14].holenumber}</th>
                                        <th scope="row">{data.getHoles[15].holenumber}</th>
                                        <th scope="row">{data.getHoles[16].holenumber}</th>
                                        <th scope="row">{data.getHoles[17].holenumber}</th>
                                        <th scope="col">Back Nine</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Par</th>
                                        <td>{data.getHoles[9].par}</td>
                                        <td>{data.getHoles[10].par}</td>
                                        <td>{data.getHoles[11].par}</td>
                                        <td>{data.getHoles[12].par}</td>
                                        <td>{data.getHoles[13].par}</td>
                                        <td>{data.getHoles[14].par}</td>
                                        <td>{data.getHoles[15].par}</td>
                                        <td>{data.getHoles[16].par}</td>
                                        <td>{data.getHoles[17].par}</td>
                                        <td>{backNinePar}</td>
                                        <td>{totalPar}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Yardage</th>
                                        <td>{data.getHoles[9].yardage}</td>
                                        <td>{data.getHoles[10].yardage}</td>
                                        <td>{data.getHoles[11].yardage}</td>
                                        <td>{data.getHoles[12].yardage}</td>
                                        <td>{data.getHoles[13].yardage}</td>
                                        <td>{data.getHoles[14].yardage}</td>
                                        <td>{data.getHoles[15].yardage}</td>
                                        <td>{data.getHoles[16].yardage}</td>
                                        <td>{data.getHoles[17].yardage}</td>
                                        <td>{backNineYardage}</td>
                                        <td>{totalYardage}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Handicap</th>
                                        <td>{data.getHoles[9].handicap}</td>
                                        <td>{data.getHoles[10].handicap}</td>
                                        <td>{data.getHoles[11].handicap}</td>
                                        <td>{data.getHoles[12].handicap}</td>
                                        <td>{data.getHoles[13].handicap}</td>
                                        <td>{data.getHoles[14].handicap}</td>
                                        <td>{data.getHoles[15].handicap}</td>
                                        <td>{data.getHoles[16].handicap}</td>
                                        <td>{data.getHoles[17].handicap}</td>
                                        <td>X</td>
                                        <td>X</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="courseDetailsBtn" onClick={props.closeCourseModal}>Close</button>
                        </div>
                    </div>
                }
                else {
                    return null;
                }
            }}
    </Query>
)

export default CourseDetailsModal;