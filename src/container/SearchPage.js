import React, { Component } from "react";
import SearchBar from '../component/SearchBar';
import SearchMap from "../component/SearchMap";
import BusinessCardContainer from "./BusinessCardContainer";
import { GoogleApiWrapper } from "google-maps-react";
import MyProfile from "./MyProfile";

const nyc = {
  lat: 40.754932,
  lng: -73.984016,
};

class SearchPage extends Component {

  render() {
    return (
      <div>
        <div className='ui centered grid'>
          <SearchBar onSearchChange={this.props.onSearchChange} />
        </div>
        <div className='ui segment'>
          <div className='ui two column grid'>
            <div
              className='column scrolling content'
              style={{ overflow: "auto", maxHeight: "55em" }}
            >
              {this.props.restaurants.length === 0 ? null : (
                <BusinessCardContainer
                  favoriteRes={this.props.favoriteRes}
                  restaurants={this.props.handleDisplay}
                  onBusinessClick={this.props.onBusinessClick}
                />
              )}
            </div>
            <div className='column'>
              <SearchMap
                nyc={nyc}
                places={this.props.handleDisplay}
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