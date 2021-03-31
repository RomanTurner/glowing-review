import React, { Component } from "react";
import { Map, Marker } from "google-maps-react";
const mapStyles = {
  width: "48vw",
  height: "100vh",
};

const markerMaker = (places) => {
  return places.map((place) => (
    <Marker
      onClick={(e)=>console.log(place,"Hi")}
      key={place.id}
      position={{
        lat: place.latlng.lat,
        lng: place.latlng.lng,
      }}
    />
  ));
};

export default function SearchMap(props) {
    return (
      <Map
        resetBoundsOnResize={true}
        google={props.google}
        onReady={props.onReady}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: props.nyc.lat,
          lng: props.nyc.lng,
        }}
      >
        {markerMaker(props.places)}
      </Map>
    );
}
