import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Googlemaps extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        return (
          <Map google={this.props.google} zoom={14}>
 
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              
          </InfoWindow>
        </Map>
        );
      }}

      export default GoogleApiWrapper({
        apiKey: 'AIzaSyC5Up9L0Sxe9ezr2mdDFw1jXv4MTrtVDYA'
      })(Googlemaps);