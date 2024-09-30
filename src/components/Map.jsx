import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/8830/8830938.png", // Custom marker icon
  iconSize: [50, 50], // Size of the icon
  iconAnchor: [25, 50], // Anchor point of the icon
});

// Function to handle zooming and focusing on the selected address
const ChangeView = ({ center }) => {
  const map = useMap();
  if (center) {
    map.setView(center, 14); // Zoom level of 14
  }
  return null;
};

const Map = ({ selectedAddress, profile }) => {
  const defaultCenter = [12.9716, 77.5946]; // Default center for Bangalore

  console.log("Selected Address:", selectedAddress); // Debugging statement
  console.log("Profile Data:", profile); // Debugging statement

  return (
    <MapContainer
      center={defaultCenter}
      zoom={10}
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg shadow-lg border border-gray-300"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

      {/* Only render Marker and Popup if selectedAddress and profile are valid */}
      {Array.isArray(selectedAddress) && selectedAddress.length === 2 && profile && (
        <>
          <ChangeView center={selectedAddress} />
          <Marker position={selectedAddress} icon={customIcon}>
            <Popup className="custom-popup font-['Poppins']">
              <div className="p-2 text-left">
                <img
                  src={profile.profilePic}
                  alt={profile.name}
                  className="w-12 h-12 rounded-full mb-2 mx-auto"
                />
                <h3 className="text-lg font-semibold">{profile.name}</h3>
                <p className="text-sm text-gray-500">{profile.details}</p>
                <p className="text-sm font-medium">
                  {profile.city}, {profile.state}
                </p>
                <div className="text-xs text-gray-400 mt-2">
                  Coordinates: {selectedAddress[0]}, {selectedAddress[1]}
                </div>
              </div>
            </Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};

export default Map;
