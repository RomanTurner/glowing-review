import React, { Component } from 'react'
import Reviews from '../component/Reviews'


export default class BusinessProfile extends Component {

    render() {
        return (
            <div>
                <h1 className="Bussiness-Name">Gary Danko</h1>
                {/* this.props.business.name */}
                <h3 className="Bussiness-Type">American (New), French, Wine Bars </h3>
                {/* this.props.business.categories */}
                <h4 className="Bussiness-Hours">9:00-5:00 </h4>
                {/* this.props.business.hours */}
                <button>Write a Review</button>
                <p className="Phone-Number">(415) 759-2060</p>
                {/* this.props.business.display_phone */}
                <p className="Address">800 N Point St San Francisco, CA 94109</p>
                {/* this.props.business.display_address */}
                <div className="Food Images">
                    <img>
                    </img>
                </div>

                {/* 
                Button to write review
                */}
                <Reviews/>
            </div>
        )
    }
}
