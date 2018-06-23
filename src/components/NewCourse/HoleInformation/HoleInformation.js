import React from 'react';
import HoleCard from './HoleCard/HoleCard'

const HoleInformation = (props) => {

        let holeList = [];

        for (let i = 1; i <= props.numberOfHoles; i++) {
            holeList = [...holeList, <HoleCard key={i} hole={i} addHoleToList={props.addHoleToList}/>]
        }
    
        return <div>
            {holeList}
            <button onClick={props.previousStep}>Previous</button>
            <button onClick={props.nextStep}>Next</button>
        </div>
}

export default HoleInformation;