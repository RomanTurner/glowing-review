import React, { Component } from "react";
import SearchBar from '../component/SearchBar';
import SearchMap from "../component/SearchMap";
import BusinessCardContainer from "./BusinessCardContainer";
import { GoogleApiWrapper } from "google-maps-react";

const nyc = {
  lat: 40.713829,
  lng: -73.989667,
};

const restaurantUrl = "http://localhost:3000/restaurants";
class SearchPage extends Component {
  state = {
    restaurants: [],
    searchTerm: "",
  };

  componentDidMount() {
    fetch(restaurantUrl)
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

  render() {
    return (
      <div>
        <div className='ui centered grid'>
          <SearchBar onSearchChange={this.onSearchChange} />
        </div>
        <div className='ui segment'>
          <div className='ui two column grid'>
            <div className='column'>
              {this.state.restaurants.length === 0 ? null : (
                <BusinessCardContainer restaurants={this.handleDisplay()} />
              )}
            </div>
            <div className='column'>
              <SearchMap
                nyc={nyc}
                places={this.state.restaurants}
                onReady={this.onReady}
                google={this.props.google}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
})(SearchPage);