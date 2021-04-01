import React, {Component} from "react";
import "./App.css";
import Navigation from "./container/Navigation";
import SearchPage from "./container/SearchPage";
import "semantic-ui-css/semantic.min.css";
import MyProfile from "./container/MyProfile";

 const restaurants = [
   {
     id: 1,
     name: "Mission Chinese Food",
     neighborhood: "Manhattan",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "171 E Broadway, New York, NY 10002",
     likes: 5,
     latlng: {
       lat: 40.713829,
       lng: -73.989667,
     },
     cuisine_type: "Asian",
     operating_hours: {
       Monday: "5:30 pm - 11:00 pm",
       Tuesday: "5:30 pm - 12:00 am",
       Wednesday: "5:30 pm - 12:00 am",
       Thursday: "5:30 pm - 12:00 am",
       Friday: "5:30 pm - 12:00 am",
       Saturday: "12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",
       Sunday: "12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 2,
     name: "BigZa",
     neighborhood: "Brooklyn",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "919 Fulton St, Brooklyn, NY 11238",
     likes: 0,
     latlng: {
       lat: 40.683555,
       lng: -73.966393,
     },
     cuisine_type: "Pizza",
     operating_hours: {
       Monday: "5:30 pm - 11:00 pm",
       Tuesday: "5:30 pm - 11:00 pm",
       Wednesday: "5:30 pm - 11:00 pm",
       Thursday: "5:30 pm - 11:00 pm",
       Friday: "5:30 pm - 11:00 pm",
       Saturday: "5:00 pm - 11:30 pm",
       Sunday: "12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 3,
     name: "Kang Ho Dong Baekjeong",
     neighborhood: "Manhattan",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "1 E 32nd St, New York, NY 10016",
     likes: 30,
     latlng: {
       lat: 40.747143,
       lng: -73.985414,
     },
     cuisine_type: "Asian",
     operating_hours: {
       Monday: "11:30 am - 2:00 am",
       Tuesday: "11:30 am - 2:00 am",
       Wednesday: "11:30 am - 2:00 am",
       Thursday: "11:30 am - 2:00 am",
       Friday: "11:30 am - 6:00 am",
       Saturday: "11:30 am - 6:00 am",
       Sunday: "11:30 am - 2:00 am",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 4,
     name: "Katz's Delicatessen",
     neighborhood: "Manhattan",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "205 E Houston St, New York, NY 10002",
     likes: 55,
     latlng: {
       lat: 40.722216,
       lng: -73.987501,
     },
     cuisine_type: "American",
     operating_hours: {
       Monday: "8:00 am - 10:30 pm",
       Tuesday: "8:00 am - 10:30 pm",
       Wednesday: "8:00 am - 10:30 pm",
       Thursday: "8:00 am - 2:30 am",
       Friday: "8:00 am - Sat",
       Saturday: "Open 24 hours",
       Sunday: "Sat - 10:30 pm",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 5,
     name: "Roberta's Pizza",
     neighborhood: "Brooklyn",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "261 Moore St, Brooklyn, NY 11206",
     likes: 12,
     latlng: {
       lat: 40.705089,
       lng: -73.933585,
     },
     cuisine_type: "Pizza",
     operating_hours: {
       Monday: "11:00 am - 12:00 am",
       Tuesday: "11:00 am - 12:00 am",
       Wednesday: "11:00 am - 12:00 am",
       Thursday: "11:00 am - 12:00 am",
       Friday: "11:00 am - 12:00 am",
       Saturday: "10:00 am - 12:00 am",
       Sunday: "10:00 am - 12:00 am",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 6,
     name: "Hometown BBQ",
     neighborhood: "Brooklyn",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "454 Van Brunt St, Brooklyn, NY 11231",
     likes: 25,
     latlng: {
       lat: 40.674925,
       lng: -74.016162,
     },
     cuisine_type: "American",
     operating_hours: {
       Monday: "Closed",
       Tuesday: "12:00 pm - 10:00 pm",
       Wednesday: "12:00 pm - 10:00 pm",
       Thursday: "12:00 pm - 10:00 pm",
       Friday: "12:00 pm - 11:00 pm",
       Saturday: "12:00 pm - 11:00 pm",
       Sunday: "12:00 pm - 9:00 pm",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 7,
     name: "Superiority Burger",
     neighborhood: "Manhattan",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "430 E 9th St, New York, NY 10009",
     likes: 5,
     latlng: {
       lat: 40.727397,
       lng: -73.983645,
     },
     cuisine_type: "American",
     operating_hours: {
       Monday: "11:30 am - 10:00 pm",
       Tuesday: "Closed",
       Wednesday: "11:30 am - 10:00 pm",
       Thursday: "11:30 am - 10:00 pm",
       Friday: "11:30 am - 10:00 pm",
       Saturday: "11:30 am - 10:00 pm",
       Sunday: "11:30 am - 10:00 pm",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 8,
     name: "The Dutch",
     neighborhood: "Manhattan",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "131 Sullivan St, New York, NY 10012",
     likes: 0,
     latlng: {
       lat: 40.726584,
       lng: -74.002082,
     },
     cuisine_type: "American",
     operating_hours: {
       Monday: "11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",
       Tuesday: "11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",
       Wednesday: "11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",
       Thursday: "11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",
       Friday: "11:30 am - 3:00 pm, 5:30 pm - 11:30 pm",
       Saturday: "10:00 am - 3:00 pm, 5:30 pm - 11:30 pm",
       Sunday: "10:00 am - 3:00 pm, 5:30 pm - 11:00 pm",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 9,
     name: "Mu Ramen",
     neighborhood: "Queens",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "1209 Jackson Ave, Queens, NY 11101",
     likes: 0,
     latlng: {
       lat: 40.743797,
       lng: -73.950652,
     },
     cuisine_type: "Asian",
     operating_hours: {
       Monday: "5:00 pm - 10:00 pm",
       Tuesday: "5:00 pm - 10:00 pm",
       Wednesday: "5:00 pm - 10:00 pm",
       Thursday: "5:00 pm - 10:00 pm",
       Friday: "5:00 pm - 11:00 pm",
       Saturday: "5:00 pm - 11:00 pm",
       Sunday: "5:00 pm - 10:00 pm",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
   {
     id: 10,
     name: "Casa Enrique",
     neighborhood: "Queens",
     imgsrc: [
       "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
       "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
     ],
     address: "5-48 49th Ave, Queens, NY 11101",
     likes: 0,
     latlng: {
       lat: 40.743394,
       lng: -73.954235,
     },
     cuisine_type: "Mexican",
     operating_hours: {
       Monday: "5:00 pm - 12:00 am",
       Tuesday: "5:00 pm - 12:00 am",
       Wednesday: "5:00 pm - 12:00 am",
       Thursday: "5:00 pm - 12:00 am",
       Friday: "5:00 pm - 12:00 am",
       Saturday: "11:00 am - 12:00 am",
       Sunday: "11:00 am - 12:00 am",
     },
     reviews: [
       {
         user: "",
         comments: "",
       },
     ],
   },
 ];
 
export default class App extends Component {
  state = {
    restaurants: [],
    users: [{}],
    searchTerm: "",
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) =>
        this.setState({
          users: data,
        })
      )
      .catch((e) => console.error("e:", e));
    fetch("http://localhost:3000/restaurants")
      .then((r) => r.json())
      .then((data) =>
        this.setState({
          restaurants: data,
        })
      )
      .catch((e) => console.error("e:", e));
  };

  onSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleDisplay = () => {
    if (this.state.searchTerm.length > 0) {
      return this.state.restaurants.filter((r) =>
        r.name.toLowerCase().includes(this.state.searchTerm)
      );
    } else {
      return this.state.restaurants;
    }
  };

  render() {
    return (
      <div>
        <Navigation />
        <SearchPage
          favoriteRes={this.favoriteRes}
          restaurants={this.state.restaurants}
          onSearchChange={this.onSearchChange}
          handleDisplay={this.handleDisplay()}
        />
        <MyProfile
          restaurants={this.state.restaurants}
          favoriteRes={this.favoriteRes}
          userInfo={this.state.users[0]}
        />
      </div>
    );
  }

  favoriteRes = (biz) => {
    this.setState(prevState => {
      let updatedUser = [...prevState.users];
      updatedUser[0].favorites.push(biz.id)
      return { users: updatedUser }
    })
    // this.addFave();
  }
  
  addFave = () => {
   const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
     body: JSON.stringify({ ...this.state.users})
    }
    fetch("http://localhost:3000/users/1", configObj)
      .then((r) => r.json())
      .then(console.log())
      .catch((e) => console.error("e:", e));
  }
}



  
  