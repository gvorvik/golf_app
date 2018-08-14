import React from 'react';

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

const CourseDetailsModal = (props) => {
    if (!props.showModal) {
        return null;
    }

    let holeNumbers;
    let holePars;
    let holeYardages;
    let holeHandicaps;
    let totalPar = 0;
    let totalYardage = 0;

    holeNumbers = props.selectedCourseInfo.map((hole, i) => {
        return <th className="score-cell" scope="col" key={i}>
                {hole.holenumber}
        </th>
    });

    holePars = props.selectedCourseInfo.map((hole, i) => {
        return <td className="score-cell" key={i}>
            {hole.par}
        </td>
    });

    holeYardages = props.selectedCourseInfo.map((hole, i) => {
        return <td className="score-cell" key={i}>
            {hole.yardage}
        </td>
    });

    holeHandicaps = props.selectedCourseInfo.map((hole, i) => {
        return <td className="score-cell" key={i}>
            {hole.handicap}
        </td>
    });


    props.selectedCourseInfo.forEach((hole) => {
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
            <button onClick={props.closeCourseModal}>Close</button>
        </div>
    </div>
}

export default CourseDetailsModal;