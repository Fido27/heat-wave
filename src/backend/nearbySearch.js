import React, { useEffect, useRef } from 'react';

const loadGoogleMapsScript = () => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`;
      document.head.append(script);
    }
  };
  

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadGoogleMapsScript(); // Load the Google Maps script

    const initMap = () => {
      // Initialize the map after the script is loaded
      new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    window.initMap = initMap; // Ensure the initMap function is accessible globally

    if (window.google) {
      initMap(); // If script already loaded, initialize the map immediately
    } else {
      window.addEventListener('googleMapsLoaded', initMap); // Listen for custom event
    }

    return () => {
      window.removeEventListener('googleMapsLoaded', initMap);
    };
  }, []);

  const loadGoogleMapsScript = () => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.addEventListener('load', () => {
        window.dispatchEvent(new Event('googleMapsLoaded')); // Dispatch custom event once script is loaded
      });
    }
  };

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
