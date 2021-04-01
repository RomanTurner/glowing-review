import React, { Component } from 'react';
import BusinessCardContainer from './BusinessCardContainer';
import ReviewContainer from './ReviewContainer';
import Navigation from './Navigation'
// import BusinessCard from '../component/BusinessCard';


const findFave = (restaurants, favorites) => {
    const res = restaurants.filter((b) => favorites.includes(b.id));
    console.log(res);
    return res;
}

export default class MyProfile extends Component {
 
    render() {
        const { firstName, lastName, image, favorites, reviews} = this.props.userInfo;
       
        return (
            <div className="profile">
                <Navigation />
                <div className="profile-name">
                    <h2 className="my-name">{firstName} {lastName}</h2>
                </div>
                <div className="profile-image">
                    <img class="ui small circular image" src={image} />
                </div>
                 <div id="profile-favorites">My Favorites</div>
                    <div class="favCards">{favorites === undefined  ? null : (
                    <BusinessCardContainer className="ui segment" restaurants={findFave(this.props.restaurants, favorites)} favoriteRes={this.props.favoriteRes}/>
                    )}
                    </div>
                <div className="my-reviews">My Reviews</div>
                <div className="reviews">
                    <ReviewContainer />
                    <p>{reviews}</p>
                </div>
            </div>
        )
    }
}
