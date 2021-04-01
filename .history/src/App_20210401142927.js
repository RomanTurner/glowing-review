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
    business: {}
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

  onBusinessClick = (e, text) => {
    e.text = text
    this.setState({
      business: e
    })
  }

  addLike = (likes) => {
    let newLikes = {...likes}
    newLikes + 1
    console.log(newLikes)
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
        />
        <BusinessProfile restaurants={this.state.restaurants} business={this.state.business} addLike={this.addLike}/>
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
}



  
