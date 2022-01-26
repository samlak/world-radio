import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';



interface IMapProps {

}

interface IMarkerProps {
  lat: number,
  lng: number,
  text: string
}

const AnyReactComponent: React.FC<IMarkerProps> = ({ text } ): JSX.Element => <div>{text}</div>;

const Map: React.FC<IMapProps> = (): JSX.Element => {
  const [mapProps, setMapProps] = useState({
    center: {
      lat: 7.435110,
      lng: 3.944740
    },
    zoom: 11,
  });



  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zoom}
        options={{mapTypeId: 'satellite'}}
      >
        <AnyReactComponent
          lat={7.435110}
          lng={3.944740}
          text="Marker"
        />
        <AnyReactComponent
          lat={6.435110}
          lng={3.944740}
          text="Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;