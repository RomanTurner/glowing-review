import React, {Component} from "react";
import "./App.css";
import Navigation from "./container/Navigation";
import SearchPage from "./container/SearchPage";
import "semantic-ui-css/semantic.min.css";
import MyProfile from "./container/MyProfile";
import BusinessProfile from "./container/BusinessProfile";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Sunrise from "./component/Sunrise";


export default class App extends Component {
  state = {
    restaurants: [],
    users: [{}],
    searchTerm: "",
    business: {},
    reviews: "",
  };

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Navigation} />
          <Route exact path='/' component={Sunrise} />
          <Route
            exact
            path='/search'
            render={(routerProps) => (
              <SearchPage
                {...routerProps}
                favoriteRes={this.favoriteRes}
                restaurants={this.state.restaurants}
                onSearchChange={this.onSearchChange}
                handleDisplay={this.handleDisplay()}
                onBusinessClick={this.onBusinessClick}
              />
            )}
          />

          <Route
            exact
            path='/user'
            render={(routerProps) => (
              <MyProfile
                {...routerProps}
                restaurants={this.state.restaurants}
                favoriteRes={this.favoriteRes}
                userInfo={this.state.users[0]}
                handleSubmitReview={this.handleSubmitReview}
                handleChange={this.handleChange}
                onBusinessClick={this.onBusinessClick}
                business={this.state.business}
              />
            )}
          />
          <Route
            path='/biz/:id'
            render={(routerProps) => {
              let business = this.state.restaurants.find(
                (b) => routerProps.match.params.id == b.id
              );
              return (
                <BusinessProfile
                  userInfo={this.state.users[0]}
                  upDateUserReviews={this.upDateUserReviews}
                  onBusinessClick={this.onBusinessClick}
                  business={business}
                />
              );
            }}
          />
          <Route
            exact
            path='/biz'
            component={
              <BusinessProfile
                userInfo={this.state.users[0]}
                business={this.state.business}
                upDateUserReviews={this.upDateUserReviews}
                onBusinessClick={this.onBusinessClick}
              />
            }
          />
        </div>
      </Router>
    );
  }

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
    e.text = text;
    this.setState({
      business: e,
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

  favoriteRes = (biz) => {
    this.setState(
      (prevState) => {
        let updatedUser = [...prevState.users];
        updatedUser[0].favorites.push(biz.id);
        return { users: updatedUser };
      },
      () => this.addFave()
    );
  };

  addFave = () => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...this.state.users[0] }),
    };

    fetch("http://localhost:3000/users/1", configObj)
      .then((r) => r.json())
      .then(console.log())
      .catch((e) => console.error("e:", e));
  };

  upDateUserReviews = (e) => {
    let updatedUser = [...this.state.users];
    updatedUser[0].reviews.push(this.state.reviews);
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updatedUser[0] }),
    };
    fetch("http://localhost:3000/users/1", configObj)
      .then((r) => r.json())
      .then(console.log)
      .catch((e) => console.error("e:", e));
    e.target.reset();
  };
}


  
