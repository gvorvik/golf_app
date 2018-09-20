import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import USER_ACTIONS from '../../redux/actions/userActions';
import COURSE_ACTIONS from '../../redux/actions/courseActions';
import HoleHistory from './HoleHistory/HoleHistory';
import HoleSearch from './HoleSearch/HoleSearch';
import NavBar from '../NavBar/NavBar';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});
class Search extends Component {
    state = {
        holeInfo: null,
        selectedHole: null,
        holeScores: null,
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getAllCourses();
    }

    getAllCourses = () => {
        axios({
            method: 'GET',
            url: '/api/course/courses'
        })
        .then(response=>{
            let courses = response.data;
            this.props.dispatch({
                type: COURSE_ACTIONS.ADD_MY_COURSES,
                payload: courses,
            });
        })
        .catch(err=>console.log(err))
    }

    selectCourse = (event) => {
        event.preventDefault();
        axios({
            method: 'GET',
            url: `/api/search/courseinfo/${event.target.value}`
        })
        .then(response => this.setState(() => ({
            holeInfo: response.data,
            selectedHole: null,
            holeScores: null,
        })))
        .catch(err => console.log(err));
    }

    selectHole = (event) => {
        event.preventDefault();
        let selectedHoleID = event.target.value;
        axios({
            method: 'GET',
            url: `/api/search/holeinfo/${selectedHoleID}`
        })
        .then(response => this.setState(() => ({
            selectedHole: response.data[0],
            holeScores: null,
        })))
        .catch(err => console.log(err)); 
    }

    getHoleScores = () => {
        axios({
            method: 'GET',
            url: `/api/search/holescores/${this.state.selectedHole.id}`
        })
        .then(response => this.setState(() => ({
            holeScores: response.data
        })))
        .catch(err => console.log(err));
    }

    render() {
        let content = null;

        if(this.props.user.username) {
            content = (
            <div>
                <h1>Search</h1>
                <HoleSearch 
                    selectCourse = {this.selectCourse}
                    holeInfo = {this.state.holeInfo}
                    selectHole = {this.selectHole}
                    selectedHole = {this.state.selectedHole}
                    getHoleScores = {this.getHoleScores}
                />
                <HoleHistory 
                    holeScores = {this.state.holeScores }
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

export default connect(mapStateToProps) (Search);