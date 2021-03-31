import React, {Fragment} from 'react';
import BusinessCard from '../component/BusinessCard';

export default function BusinessCardContainer(props) {
    return (
      <div className='ui cards'>
       
          
            {props.restaurants.map((b) => (
              <BusinessCard className='ui segment' key={b.name} info={b} />
            ))}
          
    
      </div>
    );
}
