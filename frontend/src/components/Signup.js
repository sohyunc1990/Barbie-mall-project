import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        const { username, password, password_confirmation } = this.state;
        
        axios.post('http://localhost:3001/registrations', {
            user: {
                username: username,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
        ).then(res => {
            if (res.data.statue === "created" ) {
                this.props.handleSignup(res.data);
            }
        }).catch(error => {
            console.log("registration error", error);
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="signupForm">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Username" name="username" required="" type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange}/>
                    <input placeholder="Password" name="password" required="" type="password" value={this.state.password} onChange={this.handleChange}/>
                    <input placeholder="Confirm password" name="password_confirmation" required="" type="password" value={this.state.password_confirmation} onChange={this.handleChange}/>
                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        )
    }
}