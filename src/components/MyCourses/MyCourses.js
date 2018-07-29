import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NavBar from './../NavBar/NavBar';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class MyCourses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    getCourseInformation = () => {
        axios()
        .then()
        .catch(err=>console.log(err));
    }

    render() {
        let content = null;

        if (this.props.user.username) {
            content = (
            <div>
                <h1>My Courses</h1>
            </div>
            )
        }

        return (
            <div>
                <NavBar />
                {content}
            </div>
        );
    };
}

export default connect(mapStateToProps)(MyCourses);