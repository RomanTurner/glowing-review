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

function glowGraph(rating) {
    const glowUp = {
    1: "EVERY FIRE STARTS SMALL",
    5: "GROWING AND GLOWING",
    10: "LOOK AT THEM GLOW!",
    15: "WOAH, THAT IS GETTING BRIGHT",
    20: "YOU'RE GONNA NEED SUNGLASSES",
    25: "TURNING UP THE SMOLDER",
    30: "YOU ARE GLITTERING GOLD",
    35: "INCANDESCENT WINNERS!",
    40: "HOT, HOT, HOT",
    45: "RADIANT!",
    50: "WITH THE LIGHT OF A THOUSAND SUNS!",
};
    switch (true) {
        case rating <= 1:
            return glowUp[1]; 
        case rating <= 5:
            return glowUp[5]; 
        case rating <= 10:
            return glowUp[10]; 
        case rating <= 15:
            return glowUp[15]; 
        case rating <= 20:
            return glowUp[20]; 
        case rating <= 25:
            return glowUp[25]; 
        case rating <= 30:
            return glowUp[30]; 
        case rating <= 35:
            return glowUp[35]; 
        case rating <= 40:
            return glowUp[40]; 
        case rating <= 45:
            return glowUp[45]; 
        case rating >= 50:
            return glowUp[50]; 
        default:
            return "LEND A LIGHT"; 
    }
}

export default class BusinessProfile extends Component {
    
    render() {
        return (
            <div className="businessPage" >
                <Navigation/> 
                <div className="businessInfo">
                    <h1 className="Bussiness-Name">{this.props.business.name}</h1>
                    <h3 className="Bussiness-Type">{this.props.business.cuisine_type} </h3>
                    <h4 className="Bussiness-Hours">
                        {this.props.business.operating_hours} 
                    </h4>
                    <h4 className="Phone-Number">{this.props.business.phone}</h4>
                    <h4 className="Address">{this.props.business.address}</h4>
                </div>
                <div>
                    <div className="ui row">
                        <div  id="images" > 
                        { this.props.business.imgsrc === undefined ? null : imageBuilder(this.props.business.imgsrc)}
                        </div>
                    </div>
                   
                </div>
                <div id="businessFire"> 
                        <i className='sun icon red'></i>
                        {glowGraph(this.props.business.likes)}
                        <br/>
                        <br/>
                        <button className="ui button" onClick={() => this.props.likeBusiness(this.props.business)}>Add to Fire {<i className="fire icon" ></i>}</button>
                    </div>
                <div>
                    <form className="ui form" onSubmit={(e) => this.props.handleSubmitReview(e)}>
                        <br/>
                        <h5>Write a Review!</h5>
                        <input onChange={(e) => this.props.handleChange(e)} type="text" name="review" placeholder="review" className="input-text"/>
                        <br/>
                        <br/>
                        <input type="submit" name="submit" value="submit" className="submit" />
                    </form>
                </div>
                <div>
                    <h1 className="my-reviews">Reviews</h1>
                </div>
            </div>
        )
    }
}
