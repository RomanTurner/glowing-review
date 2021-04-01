import React, { Component } from 'react'
import Reviews from '../component/Reviews'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './Navigation'


export default class BusinessProfile extends Component {


    render() {
        return (
            <div >
                <Navigation/> 
                <div className="ui centered grid">
                    <h1 className="Bussiness-Name">{this.props.business.name}</h1>
                    <h3 className="Bussiness-Type">{this.props.business.cuisine_type} </h3>
                    <h4 className="Bussiness-Hours">9:00-5:00 </h4>
                    {/* {this.state.restaurants.operating_hours.Monday} */}
                    <button className="ui form">Write a Review</button>
                    <p className="Phone-Number">(415) 759-2060</p>
                    <p className="Address">{this.props.restaurants.address}</p>
                    <div className="ui segment">
                        <div className="row"> 
                        <img src={this.props.restaurants.imgsrc} />
                        </div>
                    </div>
                </div>
                <Reviews/>
            </div>
        )
    }
}
