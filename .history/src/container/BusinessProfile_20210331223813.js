import React, { Component } from 'react'
import Reviews from '../component/Reviews'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './Navigation'
import Image from '../component/Img'

const imageBuilder = (images) => {
    return images.map((image) => (
       <Image
       img= {image.business.imgsrc}
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
                    <h4 className="Bussiness-Hours">9:00-5:00 </h4>
                    <button className="ui form">Write a Review</button>
                    <p className="Phone-Number">(415) 759-2060</p>
                    <p className="Address">{this.props.business.address}</p>
                    <div className="ui segment">
                        <div className="row"> 
                        { this.props.business == undefined ? null : imageBuilder(this.props.business.imgsrc)}
                        
                        {/* {imageBuilder(this.props.business.imgsrc)} */}
                        {/* <Image img= {this.props.business.imgsrc}/> */}
                        </div>
                    </div>
                </div>
                <Reviews/>
            </div>
        )
    }
}
