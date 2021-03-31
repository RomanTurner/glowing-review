import React, { Component } from 'react';
import BusinessCardContainer from './BusinessCardContainer';
import ReviewContainer from './ReviewContainer';
// import Profile from '../component/Profile'
// import BusinessCard from '../component/BusinessCard';


export default class MyProfile extends Component {

    render() {
        return (
            <div className="profile">
                <div className="profile-name">
                    <h2 className="my-name">{this.props.userInfo.firstName} {this.props.userInfo.lastName}</h2>
                </div>
                <div className="profile-image">
                    <img class="ui small circular image" src={this.props.userInfo.image} />
                </div>
                <div className="ui cards">
                    My Favorites
                    {this.props.userInfo.favorites === undefined ? null : (
                    <BusinessCardContainer className="ui segment" restaurants={this.props.userInfo.favorites} favoriteRes={this.props.favoriteRes}/>
                    )}
                    </div>
                <div className="my-reviews">
                    My Reviews
                    <ReviewContainer />
                </div>
            </div>
        )
    }
}
