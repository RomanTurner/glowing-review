import React, {Component} from "react";
import "./App.css";
import Navigation from "./container/Navigation";
import SearchPage from "./container/SearchPage";
import "semantic-ui-css/semantic.min.css";
import MyProfile from "./container/MyProfile";
import BusinessProfile from "./container/BusinessProfile";


export default class App extends Component {
  state = {
    restaurants: [],
    users: [{}],
    searchTerm: "",
    business: {},
    reviews: ""
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

  onBusinessClick = (e) => {
    this.setState({
      business: e
    })
  }

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
          onBusinessClick={this.onBusinessClick}
        />
        <MyProfile
          restaurants={this.state.restaurants}
          favoriteRes={this.favoriteRes}
          userInfo={this.state.users[0]} 
          handleSubmitReview={this.handleSubmitReview}
          handleChange={this.handleChange}
          // onBusinessClick={this.onBusinessClick}
          // business={this.state.business}
        />
        <BusinessProfile 
          restaurants={this.state.restaurants} 
          business={this.state.business} 
          handleSubmitReview={this.handleSubmitReview} 
          handleChange={this.handleChange} 
          userInfo={this.state.users[0]}
        />
      </div>
    );
  }

  favoriteRes = (biz) => {
    this.setState(
      (prevState) => {
        let updatedUser = [...prevState.users];
        updatedUser[0].favorites.push(biz.id);
        return { users: updatedUser };
      },
      () => this.addFave()
    );
  }
  
  addFave = () => {
   const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
     body: JSON.stringify({ ...this.state.users[0]})
   }
    
    fetch("http://localhost:3000/users/1", configObj)
      .then((r) => r.json())
      .then(console.log())
      .catch((e) => console.error("e:", e));
  }

  handleChange = (e) => {
    this.setState({reviews: e.target.value})
  }

  handleSubmitReview = (e) => {
    e.preventDefault()
    let updatedUser = [...this.state.users];
        updatedUser[0].reviews.push(this.state.reviews);
    const configObj = {
       method: "PATCH",
       headers: {
         "Content-Type" : "application/json"
       },
      body: JSON.stringify({...updatedUser[0]})
    }
     fetch("http://localhost:3000/users/1", configObj)
       .then((r) => r.json())
       .then(console.log())
       .catch((e) => console.error("e:", e));
      e.target.reset()
  }

}


  
