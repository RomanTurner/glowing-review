import React, {Component} from "react";
import "./App.css";
import Navigation from "./container/Navigation";
import SearchPage from "./container/SearchPage";
import "semantic-ui-css/semantic.min.css";
import MyProfile from "./container/MyProfile";
import Profile from "./component/Profile";

export default class App extends Component {
  
  state = {
    restaurants: [],
    searchTerm: "",
    // user: []
  };

  componentDidMount= () => {
    fetch("http://localhost:3000/restaurants")
      .then((r) => r.json())
      .then((restaurants) => this.setState({ restaurants }))
      .catch((e) => console.error("e:", e));
  }


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

  // addFavorite = (restaurant) => {
  //   fetch("http://localhost:3000/users", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({

  //     })
  //   })
  // }

  render() {
  return (
    <div>
      <Navigation />
      <SearchPage restaurants={this.state.restaurants} onSearchChange={this.onSearchChange} handleDisplay={this.handleDisplay()}/>
      <Profile />
    </div>
  );
}
}


