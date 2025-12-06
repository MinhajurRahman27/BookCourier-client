import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = ({ serviceCenter }) => {
  console.log(serviceCenter);
  const center = serviceCenter;
  const position = [23.685, 90.3563];
  return (
    <div>
      <h1 className="text-4xl text-primary text-center m-10">We provide services in 64 district</h1>
      <div className="border w-full h-[500px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[500px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {center.map((c) => (
            <Marker position={[c.latitude, c.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
