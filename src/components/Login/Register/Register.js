import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    registerUser = (event) => {
        event.preventDefault();
        console.log('user submitted!');
        axios({
            method:'POST',
            url:'/api/login/register',
            data: this.state,
        })
        .then(response=>{
            if(response.status === 200) {
                this.props.history.push('/login');
            }
            else {
                console.log('error on register');
            }
        })
        .catch(err=>console.log(err));

        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <form id="registerForm" onSubmit={this.registerUser}>
                    <h1>Register User</h1>
                    <div className="form-input">
                        <label htmlFor="usernameInput">First Name:
                            <input type="text" name="firstName" value={this.state.firstName} id="firstNameInput" onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="form-input">
                        <label htmlFor="usernameInput">Last Name:
                            <input type="text" name="lastName" value={this.state.lastName} id="lastNameInput" onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="form-input">
                        <label htmlFor="usernameInput">Username:
                            <input type="text" name="username" value={this.state.username} id="usernameInput" onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="form-input">
                        <label htmlFor="passwordInput">Password:
                            <input type="password" name="password" value={this.state.password} id="passwordInput" onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <input type="submit"/>
                    <Link to="/login">Log In</Link>
                </form>
            </div>
        )
    }
}

export default Register;