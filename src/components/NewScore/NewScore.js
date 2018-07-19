import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';
import NewScoreForm from './NewScoreForm/NewScoreForm';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});
class NewScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: ''
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    setSelectedCourse = (event) => {
        console.log('selected', event.target.value);
    }

    render() {
        let content = null;
        if(this.props.user.username) {
            content = (
                <div>
                    <h1>New Score</h1>
                    <NewScoreForm
                        setSelectedCourse={this.setSelectedCourse}
                    />
                </div>
            )
        }

        return (
            <div>
                <NavBar/>
                {content}
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewScore);