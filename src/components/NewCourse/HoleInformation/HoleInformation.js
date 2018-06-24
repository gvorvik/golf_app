import React from 'react';
import HoleCard from './HoleCard/HoleCard'

const HoleInformation = (props) => {

    let holeList = [];

    for (let i = 1; i <= props.numberOfHoles; i++) {
        holeList = [...holeList, <HoleCard key={i} hole={i} addHoleToList={props.addHoleToList} />]
    }

    console.log({holeList});

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
            return <div>
                <button onClick={props.previousStep}>Previous</button>
                <button onClick={props.nextStep}>Next</button>
            </div>;
    }
}

export default HoleInformation;