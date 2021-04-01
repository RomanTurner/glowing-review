import React, { Component } from 'react'
// import SearchBar from "./SearchPage";
// import BusinessProfile from "./BusinessProfile";
// import MyProfile from "./MyProfile";
import "../App.css"


export default class Navigation extends Component {

    render() {
        return (
            <div className="ui menu" id="navbar">
                <h1  id="title" > The Glowing Review</h1>
                <a className="item right">My Profile</a>
                <a className="item">Log In</a>
                </div>
          
        )
    }
}