import React, { Component } from 'react';


class HoleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holeNumber: this.props.hole,
            par: '',
            yardage: '',
            handicap: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            }   
        );
    }

    render() {
    return <div>
            <h2>Hole {this.props.hole}</h2>
            <input onChange={this.handleChange} value={this.state.par} name="par" type="text" placeholder="par"/>
            <input onChange={this.handleChange} value={this.state.yardage} name="yardage" type="text" placeholder="yardage"/>
            <input onChange={this.handleChange} value={this.state.handicap} name="handicap" type="text" placeholder="handicap"/>
            <button onClick={() => this.props.addHoleToList(this.state)}>Set Hole Info</button>
        </div>
    }
}

export default HoleCard;