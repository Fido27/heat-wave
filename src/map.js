import React, { useRef, useState, useEffect, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { getCurrLoc } from './backend/location';
import HospitalDetails from './backend/hospitalDetails.js'; // Import the component

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const libraries = ["places"];

function MyMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef(null);
  const [places, setPlaces] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // Initialize as null

  useEffect(() => {
    async function fetchLocation() {
      try {
        const position = await getCurrLoc();
        const { latitude, longitude } = position.coords;
        const newUserLocation = { lat: latitude, lng: longitude };
        setUserLocation(newUserLocation);

        if (mapRef.current) {
          mapRef.current.panTo(newUserLocation);
          mapRef.current.setZoom(15); // Optionally adjust zoom when location is updated
        }
      } catch (error) {
        console.error("Error getting current location:", error);
        // Handle error or set a default location
      }
    }

    fetchLocation();
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    if (userLocation) {
      map.panTo(userLocation);
      map.setZoom(15); // Adjust zoom level when map loads with user location
    }
    handleNearbySearch();
  }, [userLocation]); // Depend on userLocation so it updates when userLocation changes

  const handleNearbySearch = useCallback(() => {
    if (!mapRef.current || !userLocation) return;

    const service = new window.google.maps.places.PlacesService(mapRef.current);

    const request = {
      location: userLocation, // Use userLocation for nearby search
      radius: '25000',
      type: ['hospital'], // Make sure this is the correct type
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setPlaces(results);
      }
    });
  }, [userLocation]); // Depend on userLocation

  // Render the list of places
  const renderPlacesList = () => {
    return places.map((place) => (
      <li key={place.place_id}>
        {place.name} - {place.vicinity}
      </li>
    ));
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8} // Initial zoom, will be updated in onMapLoad if userLocation is set
        center={userLocation || { lat: -34.397, lng: 150.644 }} // Fallback to a default center if userLocation is not yet available
        onLoad={onMapLoad}
      >
      {places.map((place) => (
          <Marker key={place.place_id} position={place.geometry.location} />
        ))}
      </GoogleMap>
      <div style={{ padding: '20px', maxHeight: '50vh', overflowY: 'scroll' }}>
        <h4>Nearest Hospitals:</h4>
        <ul>{renderPlacesList()}</ul>
      </div>
    </>

  );
}

export default MyMapComponent;
