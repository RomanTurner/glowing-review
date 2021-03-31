import React, { Component } from 'react';
import MyProfile from '../container/MyProfile';

export default class Profile extends Component {
    state = {
        user: [{
            favorites: []
        }]
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(userData => this.setState({user: userData[0]}))
        // .then(userData => console.log(userData))
    }

    // addFavorite = (restaurant) => {
    //     fetch("http://localhost:3000/users", {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //             "id": 1,
    //             "name": "Mission Chinese Food",
    //             "neighborhood": "Manhattan",
    //             "imgsrc": ["https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
    //             "address": "171 E Broadway, New York, NY 10002",
    //             "likes": 5,
    //             "latlng": {
    //               "lat": 40.713829,
    //               "lng": -73.989667
    //             },
    //             "cuisine_type": "Asian",
    //             "operating_hours": {
    //               "Monday": "5:30 pm - 11:00 pm",
    //               "Tuesday": "5:30 pm - 12:00 am",
    //               "Wednesday": "5:30 pm - 12:00 am",
    //               "Thursday": "5:30 pm - 12:00 am",
    //               "Friday": "5:30 pm - 12:00 am",
    //               "Saturday": "12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",
    //               "Sunday": "12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm"
    //             },
    //             "reviews": [{
    //                 "user": "",
    //                 "comments": "" }]
    //       })
    //     })
    //   }

        favoriteRes = (restaurant) => {
            console.log(restaurant)
        }

    render() {
        return (
            <div>
                <MyProfile userInfo={this.state.user} favoriteRes={this.favoriteRes}/>
            </div>
        )
}
}