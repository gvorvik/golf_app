import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Query} from 'react-apollo';

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
        scoreDetails: [],
        scoreModal: false,
        selectedRoundID: null
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: Number(event.target.value),
        })
    }

    getScoreDetails = (id) => {
        this.setState({ selectedRoundID: Number(id) });
        this.openScoreModal();
    }

    openScoreModal = () => {
        this.setState({
            scoreModal: true
        });
    }

    closeScoreModal = () => {
        this.setState({
            scoreModal: false
        });
    }

    render() {
        return (
            <Query
                query={myScoresQuery}
            >
                {
                    ({data = {}, loading}) => {
                        if (loading) {
                            return <div>loading</div>
                        }
                        let content = null;
                        if (this.props.user.username) {
                            content = (
                                <div id="myScoresDiv">
                                    <ScoreSearchForm
                                        handleChange={this.handleChange}
                                        courses={data.getCourses}
                                    />
                                    <ScoreList
                                        selectedCourseID={this.state.selectedCourseID || null}
                                        getScoreDetails={this.getScoreDetails}
                                    />
                                    <ScoreDetailsModal
                                        selectedRoundID={this.state.selectedRoundID || null}
                                        scoreDetails={this.state.scoreDetails}
                                        showModal={this.state.scoreModal}
                                        closeScoreModal={this.closeScoreModal}
                                    />
                                    <a className="addBtn" href="/newscore">Add New Score</a>
                                </div>
                            )
                        }

                        return (
                            <div>
                                <NavBar />
                                {content}
                            </div>
                        )
                    }
                }
            </Query>
        )
    }
}

export default connect(mapStateToProps)(MyScores);