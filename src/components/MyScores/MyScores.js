import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {graphql, withApollo} from 'react-apollo';

import NavBar from '../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';
import ScoreList from './ScoresList/ScoresList';
import ScoreSearchForm from './ScoreSearchForm/ScoreSearchForm';
import ScoreDetailsModal from './ScoreDetailsModal/ScoreDetailsModal';
import myScoresQuery from '../../queries/MyScoresQuery';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class MyScores extends Component {

    state = {
        courses: [],
        searchResults: [],
        scoreDetails: [],
        scoreModal: {
            open: false,
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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

    getScoreDetails = (id) => {
        axios({
            method: 'GET',
            url: `/api/score/scoredetails/${id}`
        })
        .then(response=>{
            this.setState({
                scoreDetails: response.data,
            });
            this.openScoreModal();
        })
        .catch(err=>console.log(err));
    }

    openScoreModal = () => {
        this.setState({
            scoreModal: {
                open: true,
            }
        });
    }

    closeScoreModal = () => {
        this.setState({
            scoreModal: {
                open: false,
            }
        });
    }

    render() {
        if(this.props.data.loading) {
            return <div></div>
        }
        console.log(this.props);
        let content = null;
        if(this.props.user.username) {
            content = (
                <div id="myScoresDiv">
                    <ScoreSearchForm 
                        handleChange={this.handleChange}
                        submitSearch={this.submitSearch}
                        courses={this.props.data.getCourses}
                    />
                    <ScoreList 
                        searchResults={this.state.searchResults}
                        getScoreDetails={this.getScoreDetails}
                    />
                    <ScoreDetailsModal
                        scoreDetails={this.state.scoreDetails} 
                        showModal={this.state.scoreModal.open}
                        closeScoreModal={this.closeScoreModal}
                    />
                    <a className="addBtn" href="/newscore">Add New Score</a>
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

export default withApollo(graphql(myScoresQuery, {
    options: () => { return { variables: {id: 1} } }
})(connect(mapStateToProps)(MyScores)));