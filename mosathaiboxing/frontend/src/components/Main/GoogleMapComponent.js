import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';



const GoogleMapComponent = ({ center, markerPosition }) => {
  return (
      <>
        <LoadScript
      googleMapsApiKey="AIzaSyBS82uxomdUnuQj96gL9YGtpnCZlXpl594"
    >
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{
          width: '100%',
          height: '400px',
        }}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>

      </>

  );
};

export default GoogleMapComponent;
