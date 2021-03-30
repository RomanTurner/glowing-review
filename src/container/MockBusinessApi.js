import React, { Component } from 'react'
import BusinessProfile from './BusinessProfile'

export default class MockBusinessApi extends Component {
    componentDidMount(){
        fetch("http://localhost:3000/business")
        .then(res => res.json())
        .then(data => {this.setState({
            business: data
            })
        })
    }

    state = {
        business: []
    }

    render() {
        return (
            <div>
                <BusinessProfile business={this.state.business}/>
            </div>
        )
    }
}
