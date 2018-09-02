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
    let frontNinePar = 0;
    let backNinePar = 0;
    let totalYardage = 0;
    let frontNineYardage = 0;
    let backNineYardage = 0;

    if (props.selectedCourseInfo.length === 9) {
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
                <button className="courseDetailsBtn" onClick={props.closeCourseModal}>Close</button>
            </div>
        </div>
    } else if(props.selectedCourseInfo.length === 18) {

        props.selectedCourseInfo.forEach((hole) => {
            totalPar = totalPar + hole.par;
            totalYardage = totalYardage + hole.yardage;

            if(hole.holenumber < 10) {
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
                            <th scope="row">{props.selectedCourseInfo[0].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[1].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[2].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[3].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[4].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[5].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[6].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[7].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[8].holenumber}</th>
                            <th scope="col">Front Nine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Par</th>
                            <td>{props.selectedCourseInfo[0].par}</td>
                            <td>{props.selectedCourseInfo[1].par}</td>
                            <td>{props.selectedCourseInfo[2].par}</td>
                            <td>{props.selectedCourseInfo[3].par}</td>
                            <td>{props.selectedCourseInfo[4].par}</td>
                            <td>{props.selectedCourseInfo[5].par}</td>
                            <td>{props.selectedCourseInfo[6].par}</td>
                            <td>{props.selectedCourseInfo[7].par}</td>
                            <td>{props.selectedCourseInfo[8].par}</td>
                            <td>{frontNinePar}</td>
                        </tr>
                        <tr>
                            <th scope="row">Yardage</th>
                            <td>{props.selectedCourseInfo[0].yardage}</td>
                            <td>{props.selectedCourseInfo[1].yardage}</td>
                            <td>{props.selectedCourseInfo[2].yardage}</td>
                            <td>{props.selectedCourseInfo[3].yardage}</td>
                            <td>{props.selectedCourseInfo[4].yardage}</td>
                            <td>{props.selectedCourseInfo[5].yardage}</td>
                            <td>{props.selectedCourseInfo[6].yardage}</td>
                            <td>{props.selectedCourseInfo[7].yardage}</td>
                            <td>{props.selectedCourseInfo[8].yardage}</td>
                            <td>{frontNineYardage}</td>
                        </tr>
                        <tr>
                            <th scope="row">Handicap</th>
                            <td>{props.selectedCourseInfo[0].handicap}</td>
                            <td>{props.selectedCourseInfo[1].handicap}</td>
                            <td>{props.selectedCourseInfo[2].handicap}</td>
                            <td>{props.selectedCourseInfo[3].handicap}</td>
                            <td>{props.selectedCourseInfo[4].handicap}</td>
                            <td>{props.selectedCourseInfo[5].handicap}</td>
                            <td>{props.selectedCourseInfo[6].handicap}</td>
                            <td>{props.selectedCourseInfo[7].handicap}</td>
                            <td>{props.selectedCourseInfo[8].handicap}</td>
                            <td>X</td>
                        </tr>
                    </tbody>
                </table>
                <table className="course-table">
                    <thead>
                        <tr>
                            <th scope="row">Hole</th>
                            <th scope="row">{props.selectedCourseInfo[9].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[10].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[11].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[12].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[13].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[14].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[15].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[16].holenumber}</th>
                            <th scope="row">{props.selectedCourseInfo[17].holenumber}</th>
                            <th scope="col">Back Nine</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Par</th>
                            <td>{props.selectedCourseInfo[9].par}</td>
                            <td>{props.selectedCourseInfo[10].par}</td>
                            <td>{props.selectedCourseInfo[11].par}</td>
                            <td>{props.selectedCourseInfo[12].par}</td>
                            <td>{props.selectedCourseInfo[13].par}</td>
                            <td>{props.selectedCourseInfo[14].par}</td>
                            <td>{props.selectedCourseInfo[15].par}</td>
                            <td>{props.selectedCourseInfo[16].par}</td>
                            <td>{props.selectedCourseInfo[17].par}</td>
                            <td>{backNinePar}</td>
                            <td>{totalPar}</td>
                        </tr>
                        <tr>
                            <th scope="row">Yardage</th>
                            <td>{props.selectedCourseInfo[9].yardage}</td>
                            <td>{props.selectedCourseInfo[10].yardage}</td>
                            <td>{props.selectedCourseInfo[11].yardage}</td>
                            <td>{props.selectedCourseInfo[12].yardage}</td>
                            <td>{props.selectedCourseInfo[13].yardage}</td>
                            <td>{props.selectedCourseInfo[14].yardage}</td>
                            <td>{props.selectedCourseInfo[15].yardage}</td>
                            <td>{props.selectedCourseInfo[16].yardage}</td>
                            <td>{props.selectedCourseInfo[17].yardage}</td>
                            <td>{backNineYardage}</td>
                            <td>{totalYardage}</td>
                        </tr>
                        <tr>
                            <th scope="row">Handicap</th>
                            <td>{props.selectedCourseInfo[9].handicap}</td>
                            <td>{props.selectedCourseInfo[10].handicap}</td>
                            <td>{props.selectedCourseInfo[11].handicap}</td>
                            <td>{props.selectedCourseInfo[12].handicap}</td>
                            <td>{props.selectedCourseInfo[13].handicap}</td>
                            <td>{props.selectedCourseInfo[14].handicap}</td>
                            <td>{props.selectedCourseInfo[15].handicap}</td>
                            <td>{props.selectedCourseInfo[16].handicap}</td>
                            <td>{props.selectedCourseInfo[17].handicap}</td>
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
}

export default CourseDetailsModal;