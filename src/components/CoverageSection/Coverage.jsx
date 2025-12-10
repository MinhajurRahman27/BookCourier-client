import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = ({ serviceCenter }) => {
  // console.log(serviceCenter);
  const center = serviceCenter;
  const position = [23.685, 90.3563];
  return (
    <div className="mb-10">
      <div className="mb-10">
        <h1 className="text-5xl font-semibold text-center  mb-3">
        We Deliver Nationwide
      </h1>
      <p className="text-gray-600 leading-relaxed text-center">
        Our 64 distribution centers across the nation guarantee your books
        arrive faster than ever
      </p>
      </div>
      <div className=" w-full h-[400px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[400px] w-[800px] mx-auto rounded-lg border-2"
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
