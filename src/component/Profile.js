import React, { Component } from 'react';
import MyProfile from '../container/MyProfile';

export default class Profile extends Component {
    state = {
        user: {}
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(userData => this.setState({user: userData[0]}))
    }

    render() {
        return (
            <div>
                <MyProfile userInfo={this.state.user}/>
            </div>
        )
}
}