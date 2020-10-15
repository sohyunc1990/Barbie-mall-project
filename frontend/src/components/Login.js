import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            loginErrors: ""
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
        const { username, password } = this.state;
        
        axios.post('http://localhost:3001/sessions', {
            user: {
                username: username,
                password: password
            }
        },
        { withCredentials: true }
        ).then(res => {
            if (res.data.logged_in) {
                this.props.handleLogin(res.data);
            }
        }).catch(error => {
            console.log("login error", error);
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Username" name="username" required="" type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange}/>
                    <input placeholder="Password" name="password" required="" type="password" value={this.state.password} onChange={this.handleChange}/>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}