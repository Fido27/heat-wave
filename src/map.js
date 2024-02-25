import React, { useRef, useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
    lat: -34.397,
    lng: 150.644,
  };

const libraries = ["places"]; // Required for using Places API

function MyMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBchUf958GR_Ft4i5aWdZzWKIr2IbKBMsQ",
    libraries,
  });

  const mapRef = useRef(null);
  const [places, setPlaces] = useState([]);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    handleNearbySearch();
  }, []);

  const handleNearbySearch = useCallback(() => {
    if (!mapRef.current) return;

    const service = new window.google.maps.places.PlacesService(mapRef.current);

    const request = {
      location: center,
      radius: '500',
      type: ['hospitals'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setPlaces(results);
      }
    });
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      onLoad={onMapLoad}
    >
      {places.map((place) => (
        <Marker key={place.place_id} position={place.geometry.location} />
      ))}
    </GoogleMap>
  );
}

export default MyMapComponent;
