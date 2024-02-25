import React, { useRef, useState, useEffect, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { getCurrLoc } from './backend/location';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const libraries = ["places"];

function MyMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef(null);
  const [places, setPlaces] = useState([]);
  const [userLocation, setUserLocation] = useState(center); // Default to center, update later

  useEffect(() => {
    async function fetchLocation() {
      try {
        const position = await getCurrLoc();
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      } catch (error) {
        console.error("Error getting current location:", error);
        // Handle error or set a default location
      }
    }

    fetchLocation();
  }, []);

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
      console.log(results)
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
      center={userLocation}
      // onLoad={map => mapRef.current = map}
      onLoad = {onMapLoad}
    >
      {places.map((place) => (
        <Marker key={place.place_id} position={place.geometry.location} />
      ))}
    </GoogleMap>
  );
}

export default MyMapComponent;
