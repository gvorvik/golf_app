import React, { Component } from 'react';
import { connect } from 'react-redux';
import {graphql} from 'react-apollo';

import USER_ACTIONS from '../../redux/actions/userActions';
import HoleSearch from './HoleSearch/HoleSearch';
import NavBar from '../NavBar/NavBar';
import GetCourses from './../../queries/GetCourses';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});
class Search extends Component {
    state = {
        showHoleScores: false,
        selectedHoleIndex: null
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    selectCourse = (event) => {
        event.preventDefault();
        let {value} = event.target
        this.setState({selectedCourseID: Number(value)});
    }

    selectHole = (event) => {
        event.preventDefault();
        let {value} = event.target;
        this.setState({selectedHoleIndex: Number(value)});
    }

    showHoleScoresToggle = () => {
        this.setState({showHoleScores: !this.state.showHoleScores});
    }

    render() {
        let content = null;
        if(this.props.user.username) {
            content = (
            <div>
                <h1>Search</h1>
                <HoleSearch 
                    selectCourse = {this.selectCourse}
                    selectHole = {this.selectHole}
                    selectedHoleIndex = {this.state.selectedHoleIndex}
                    getHoleScores = {this.getHoleScores}
                    course_id={this.state.selectedCourseID || null}
                    getCourses={this.props.data.getCourses}
                    showHoleScores={this.state.showHoleScores}
                    showHoleScoresToggle={this.showHoleScoresToggle}
                />
            </div>
            )
        }

        return <div>
            <NavBar />
            {content}
        </div>
    }
}

export default graphql(GetCourses)(connect(mapStateToProps)(Search));