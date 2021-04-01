import React, {Component} from "react";
import "./App.css";
import Navigation from "./container/Navigation";
import SearchPage from "./container/SearchPage";
import "semantic-ui-css/semantic.min.css";
import MyProfile from "./container/MyProfile";


export default class App extends Component {
  state = {
    restaurants: [],
    users: [{}],
    searchTerm: "",
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/restaurants")
      .then((r) => r.json())
      .then((data) => 
        this.setState({
          restaurants: data,
        })
      )
      .catch((e) => console.error("e:", e));
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then((data) =>
        this.setState({
          users: data,
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
          favoriteRes={this.favoriteRes}
          userInfo={this.state.users[0]}
        />
      </div>
    );
  }

  favoriteRes = (biz) => {
    this.setState(prevState => {
      let updatedUser = [...prevState.users];
      updatedUser[0].favorites.push(biz)
      return { users: updatedUser }
    })
    this.addFave();
  }
  
  addFave = () => {
   const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
     body: JSON.stringify({ ...this.state.users })
    }
    fetch("http://localhost:4000/users", configObj)
      .then((r) => r.json())
      .then(console.log())
      .catch((e) => console.error("e:", e));
  }
}


