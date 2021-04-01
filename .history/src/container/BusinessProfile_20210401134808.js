import React, { Component } from 'react'
import Reviews from '../component/Reviews'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './Navigation'
import Image from '../component/Img'

const imageBuilder = (images) => {
    return images.map((image) => (
       <Image
       img= {image}
       />
    ))
}

export default class BusinessProfile extends Component {


    render() {
        return (
            <div >
                <Navigation/> 
                <div className="ui centered grid">
                    <h1 className="Bussiness-Name">{this.props.business.name}</h1>
                    <h3 className="Bussiness-Type">{this.props.business.cuisine_type} </h3>
                    <h4 className="Bussiness-Hours">
                        {this.props.business.operating_hours} 
            
                    </h4>
                    <button className="ui form">Write a Review</button>
                    <p className="Phone-Number">{this.props.business.phone}</p>
                    <p className="Address">{this.props.business.address}</p>
                    <div className="ui row">
                        <div  id="images" > 
                        { this.props.business.imgsrc === undefined ? null : imageBuilder(this.props.business.imgsrc)}
                        </div>
                    </div>
                    <a> 
                        <i class='sun icon'></i>
                        {this.props.business.text}
                        
                        <button className="ui button" onClick={() => this.props.addLike(e)} >Add to Fire</button>
                    </a>
                </div>
                <Reviews/>
                <h1 className="my-reviews">Reviews</h1>
            </div>
        )
    }
}
