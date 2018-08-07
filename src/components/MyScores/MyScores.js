import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';
import ScoreList from './ScoresList/ScoresList';
import ScoreSearchForm from './ScoreSearchForm/ScoreSearchForm';

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
        if(this.props.user.username) {
            content = (
                <div id="myScoresDiv">
                    <ScoreSearchForm 
                        handleChange={this.handleChange}
                        submitSearch={this.submitSearch}
                        courses={this.state.courses}
                    />
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