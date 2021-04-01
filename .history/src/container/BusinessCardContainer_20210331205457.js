import React, {Fragment} from 'react';
import BusinessCard from '../component/BusinessCard';
import MyProfile from './MyProfile'

export default function BusinessCardContainer(props) {
    return (
      <div className='ui cards'>
       

            {props.restaurants.map((b) => (
              <BusinessCard className='ui segment' key={b.name} info={b} favoriteRes={props.favoriteRes} onBusinessClick={props.onBusinessclick}/>
            ))}
          
    
      </div>
    );
}
