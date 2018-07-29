import React, { Component } from 'react';
import { connect } from 'react-redux';

import USER_ACTIONS from '../../redux/actions/userActions';
import NavBar from './../NavBar/NavBar';
import NewCourseEntry from './NewCourseEntry/NewCourseEntry';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class NewCourseTemplate extends Component {
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
                    <NewCourseEntry />
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

export default connect(mapStateToProps)(NewCourseTemplate);