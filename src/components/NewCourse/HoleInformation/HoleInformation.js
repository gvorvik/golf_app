import React, { Component } from 'react';
import HoleCard from './HoleCard/HoleCard'

class HoleInformation extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    addHoleToList = (holeNumber, par, yardage, handicap) => {
        let holeInfo = {
            par,
            yardage,
            handicap
        };
        this.setState({
            holeInformation: {...this.state.holeInformation, [holeNumber]: holeInfo}
        });
    }

    render() {
        let holeList = [];

        for (let i = 1; i <= this.props.numberOfHoles; i++) {
            holeList = [...holeList, <HoleCard key={i} hole={i} addHoleToList={this.addHoleToList}/>]
        }
    
       return <div>
            {holeList}
            <button onClick={this.props.previousStep}>Previous</button>
            <button onClick={this.props.nextStep}>Next</button>
        </div>
    }  
}

export default HoleInformation;