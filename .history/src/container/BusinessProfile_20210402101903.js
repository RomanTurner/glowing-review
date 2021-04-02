import React, { Component } from "react";
import Reviews from "../component/Reviews";
import "semantic-ui-css/semantic.min.css";
import Image from "../component/Img";

export default class BusinessProfile extends Component {
  state = {
    review: "",
    business: {
      id: 1,
      name: "Mission Chinese Food",
      neighborhood: "Manhattan",
      imgsrc: [
        "https://images.pexels.com/photos/6287544/pexels-photo-6287544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2670327/pexels-photo-2670327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      address: "171 E Broadway, New York, NY 10002",
      latlng: {
        lat: 40.713829,
        lng: -73.989667,
      },
      cuisine_type: "Asian",
      operating_hours: "5:30 pm - 11:00 pm",
      phone: "(917) 376-5660",
      reviews: ["YUM"],
      text: "EVERY FIRE STARTS SMALL",
    },
    likes: 0,
  };

  glowGraph(rating) {
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

  imageBuilder = (images) => {
    return images.map((image, index) => <Image key={index} img={image} />);
  };

  myReviews = (reviews) => {
    return reviews.map((review, index) => <Reviews userInfo={this.props.userInfo} key={index} rev={review} />);
  };
  componentDidMount() {
    let business = this.props.business;
    this.setState({ business:business, likes: business.likes });
  }

  render() {
    return (
      <div className='businessPage'>
        <div className='businessInfo'>
          <h1 className='businessName'>{this.state.business.name}</h1>
          <h2 className='businessType'>{this.state.business.cuisine_type}</h2>
          <h4 className='businessHours'>
            {this.state.business.operating_hours}
          </h4>
          <h4 className='phoneNumber'>{this.state.business.phone}</h4>
          <h4 className='address'>{this.state.business.address}</h4>
        </div>
        <div>
          <div className='ui row'>
            <div id='images'>
              {this.imageBuilder(this.state.business.imgsrc)}
            </div>
          </div>
        </div>
        <div id='businessFire'>
          <div className='fireSaying'>
            <i className='sun icon'></i>
            {this.glowGraph(this.state.likes)}
          </div>
          <br />
          <br />
          <button className='ui button red' onClick={() => this.addALike()}>
            Add to Fire {<i className='fire icon'></i>}
          </button>
        </div>
        <div>
          <form
            className='ui form'
            id='reviewForm'
            onSubmit={(e) => this.handleSubmitReview(e)}
          >
            <br />
            <h5>Write a Review!</h5>
            <input
              onChange={(e) => this.handleChange(e)}
              type='text'
              name='review'
              placeholder='review'
              className='input-text'
            />
            <br />
            <br />
            <input
              type='submit'
              name='submit'
              value='submit'
              className='submit'
            />
          </form>
        </div>
        <div>
          <h1 className='my-reviews'>Reviews</h1>
          <div className='reviews'>{this.myReviews(this.state.business.reviews)}</div>
        </div>
      </div>
    );
  }

  addALike = () => {
    let newLikes = this.state.likes + 1;
    this.setState({ likes: newLikes }, this.likeBusiness());
  };

  likeBusiness = () => {
    let update = this.state.likes;
    fetch(`http://localhost:3000/restaurants/${this.props.business.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: update }),
    })
      .then((res) => res.json())
      .then(this.glowGraph(update))
      .catch((e) => console.error("e:", e));
  };

  handleSubmitReview = (e) => {
    e.preventDefault();
    let updatedBusiness = { ...this.state.business };
    updatedBusiness.reviews.unshift(this.state.review);

    this.setState(
      {
        business: updatedBusiness,
      },
      this.patchReview(e)
    );
  };

  patchReview = (event) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...this.state.business}),
    };

    fetch(
      `http://localhost:3000/restaurants/${this.props.business.id}`,
      configObj
    )
      .then((r) => r.json())
      .then(this.props.upDateUserReviews(event))
      .catch((e) => console.error("e:", e));
  };

  handleChange = (e) => {
    this.setState({ review: e.target.value });
  };
}
