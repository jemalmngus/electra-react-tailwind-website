import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Import the marker icon images
import markerIcon from '../assets/marker-icon.png';
import markerIcon2x from '../assets/marker-icon-2x.png';
import markerShadow from '../assets/marker-shadow.png';

// Create a custom marker icon using the imported images
const customIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});

  const LocationMap = () => {
    const position = [8.990029, 38.789699]; // Coordinates of the location

  
  return (
    <MapContainer center={position} zoom={14} style={{ height: '400px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          MILLENNIUM HALL
ADDIS ABABA, ETHIOPIA
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
