import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


export default class Navigation extends Component {

    render() {
        return (
          <div className='ui menu' id='navbar'>
            <Link to='/search' className='item left'>
              <a>
                <i className='sun icon'></i> Search
              </a>
            </Link>
            <Link id='title' to='/search'>
              <h1> The Glowing Review</h1>
            </Link>
            <Link to='/user' className='item right'>
              <a>
                <i className='sun icon'></i> My Profile
              </a>
            </Link>
          </div>
        );
    }
}