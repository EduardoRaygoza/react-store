import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyles ={
    height: '50vh',
    width: '100%'
  }
  const defaultCenter = {
    lat: 19.4267261, lng: -99.1718706
  }
  return (
    <LoadScript googleMapsApiKey={process.env.CLIENT_ID_GM}>
      <GoogleMap
        mapContainerStyle={mapContainerStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter}/>
      </GoogleMap>
    </LoadScript>
  )
}
export default Map;