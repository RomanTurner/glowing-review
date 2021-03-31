import React, { Component } from "react";
import SearchBar from '../component/SearchBar';
import SearchMap from "../component/SearchMap";
import BusinessCardContainer from "./BusinessCardContainer";

const restaurantUrl = "http://localhost:3000/restaurants";
export default class SearchPage extends Component {
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
              Will Be A Map?
              <SearchMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
