import React, { Component } from 'react'
import Reviews from '../component/Reviews'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './Navigation'


export default class BusinessProfile extends Component {
    state = {
        restaurants: []
      };
    
      componentDidMount() {
        fetch("http://localhost:3000/restaurants")
          .then((r) => r.json())
          .then((restaurants) => this.setState({ restaurants: restaurants[0] }))
      }

    render() {
        return (
            <div >
                <Navigation/> 
                <div className="ui centered grid">
                 
                </div>
                <Reviews/>
            </div>
        )
    }
}
