import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';
import ScoreList from './ScoresList/ScoresList';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class MyScores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            searchResults: [],
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getCourses();
    }

    getCourses = () => {
        axios({
            method: 'GET',
            url: '/api/course/courses'
        })
        .then( response => this.setState({courses: response.data}))
        .catch( err => console.log(err));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitSearch = (event) => {
        event.preventDefault();
        axios({
            method: 'GET',
            url: `/api/score/coursescores/${this.state.selectedCourse}`
        })
        .then( response => this.setState({searchResults: response.data}))
        .catch( err => console.log(err));
    }


    render() {
        let content = null;
        let courses = this.state.courses.map(course => <option key={course.id}>{course.name}</option>);
        if(this.props.user.username) {
            content = (
                <div id="myScoresDiv">
                    <form id="scoreSearchForm">
                        <h2>Search Scores</h2>
                        <label htmlFor="scoreByCourse">
                            Course:
                            <select onChange={this.handleChange} id="scoreByCourse" defaultValue="default" name="selectedCourse">
                                <option disabled value="default">-Select An Option-</option>
                                {courses}
                            </select>
                        </label>
                        <input onClick={this.submitSearch} type="submit"/>
                    </form>
                    <ScoreList 
                        searchResults={this.state.searchResults}
                    />
                    <a href="/newscore">Add New Score</a>
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

export default connect(mapStateToProps)(MyScores);