import React, {Component} from 'react';
import ScoreInput from './ScoreInput/ScoreInput';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});
class NewScore extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    render() {
        let content = null;
        if(this.props.user.username) {
            content = (
                <div>
                    <h1>New Score</h1>
                    {/* <ScoreInput /> */}
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