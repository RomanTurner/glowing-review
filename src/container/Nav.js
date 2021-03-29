import React, { Component } from 'react'
import UserProfile from "./UserProfile";

export default class Nav extends Component {
    render() {
        return (
            <div>
                {/* <SearchBar /> */}
                <UserProfile />
                {/* <BusinessProfile/> */}
            </div>
        )
    }
}


