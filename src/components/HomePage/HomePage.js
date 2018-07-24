import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import COURSE_ACTIONS from '../../redux/actions/courseActions';
import NavBar from './../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    render() {
        let content = null;

        if (this.props.user.username) {
            content = (
            <div>
                <h1>Hello Home Page</h1>
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

export default connect(mapStateToProps)(HomePage);
