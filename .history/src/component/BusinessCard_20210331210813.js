import React, {Fragment} from 'react'

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
function glowShadow(rating) {

    switch (true) {
        case rating <= 5:
            return ".5em .5em 1em #fff1c0";
        case rating <= 20:
            return ".5em .5em 1em #ffe476";
        case rating <= 25:
            return ".5em .5em 1em #ffd431"; 
        case rating <= 30:
            return ".5em .5em 1em #ffd025";
        case rating >= 50:
            return ".5em .5em 1em gold"; 
        default:
            return null; 
    }
}

function randomNum() {
    return Math.floor(Math.random()*4)
}
export default function BusinessCard(props) {
    return (
      <>
        {/* Need to add onclick will go to business page */}
        <div style={{ boxShadow: `${glowShadow(props.info.likes)}`}} class='ui card'>
          <div class='image'>
            <img src={props.info.imgsrc[randomNum()]} />
          </div>
          <div class='content'>
            <a class='header' onClick={() => props.onBusinessClick(props.info)}>{props.info.name} </a>
            <div class='meta'>
              <span class='date'>{props.info.cuisine_type}</span>
            </div>
            <div class='description'>{props.info.address}</div>
          </div>
          <div id='glowCard' class='extra content'>
            <a>
              <i class='sun icon'></i>
              {glowGraph(props.info.likes)}
              <button class="ui button" onClick={() => props.favoriteRes(props.info)}>Favorite</button>
            </a>
          </div>
        </div>
      </>
    );
}
