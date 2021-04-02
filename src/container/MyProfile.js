import React, { Component } from 'react';
import BusinessCardContainer from './BusinessCardContainer';
// import ReviewContainer from './ReviewContainer';
import Navigation from './Navigation'
import Reviews from '../component/Reviews'
// import BusinessCard from '../component/BusinessCard';


const findFave = (restaurants, favorites) => {
    const res = restaurants.filter((b) => favorites.includes(b.id));
    return res;
}

const myReviews = (reviews, userInfo) => {
    return reviews.map((review, index) => (
      <Reviews userInfo={userInfo} key={index} rev={review} />
    ));
}   

export default class MyProfile extends Component {
 
    render() {
        const { firstName, lastName, image, favorites} = this.props.userInfo;
        
        return (
            <div className="profile">
                <div className="profile-name">
                    <h2 className="my-name">{firstName} {lastName}</h2>
                </div>
                <div className="profile-image">
                    <img class="ui small circular image" src={image} />
                </div>
                 <div id="profile-favorites">My Favorites</div>

                    <div class="favCards">{favorites === undefined  ? null : (
                    <BusinessCardContainer className="ui segment" restaurants={findFave(this.props.restaurants, favorites)} onBusinessClick={this.props.onBusinessClick} favoriteRes={this.props.favoriteRes}/>
                    )}
                    </div>
                <div className="my-reviews">My Reviews</div>
                    <div className="reviews">
                        {this.props.userInfo.reviews === undefined ? null : myReviews(this.props.userInfo.reviews, this.props.userInfo)}
                    </div>
            </div>
        )
    }
}

