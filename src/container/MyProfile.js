import React, { Component } from 'react';
import BusinessCardContainer from './BusinessCardContainer';
import ReviewContainer from './ReviewContainer';
import Profile from '../component/Profile'


export default class MyProfile extends Component {

    render() {
        return (
            <div className="profile">
                <div className="profile-name">
                    <h2 className="my-name">{this.props.userInfo.firstName} {this.props.userInfo.lastName}</h2>
                </div>
                <div>
                    <img src={this.props.userInfo.image} alt="Naruto Uzamaki" className="profile-image" />
                </div>
                <div className="profile-favorites">
                    My Favorites
                    <BusinessCardContainer />
                </div>
                <div className="my-reviews">
                    My Reviews
                    <ReviewContainer />
                </div>
            </div>
        )
    }
}
