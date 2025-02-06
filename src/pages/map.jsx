import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useState } from "react";
import "../App.css";

function Map() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [markers, setMarkers] = useState([
    [14.533742443483478, 120.98137642209622],
  ]);
  const customIcon = new Icon({
    iconUrl: "marker-icon2.svg",
    iconSize: [38, 38],
  });

  function LocationMarker() {
    const map = useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        markers.push([lat, lng]);
        setPosition({
          latitude: lat,
          longitude: lng,
        });
      },
    });
    return position.latitude !== 0 ? (
      <Marker
        position={[position.latitude, position.longitude]}
        interactive={false}
        icon={customIcon}
      />
    ) : null;
  }

  console.log(markers);

  return (
    <div className=" main">
      <MapContainer center={[14.539463420883909, 120.9830204750233]} zoom={18}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((pos, key) => (
          <Marker key={key} position={pos} icon={customIcon}>
            <Popup>
              <div className=" flex flex-col px-4 py-2 justify-center items-center">
                <img src="vite.svg" className=" w-[150px] mb-4"></img>
                <p>This is a popup</p>
                <a href="https://react-leaflet.js.org/">Go to link!</a>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
      <Popup>
        <div className=" flex flex-col px-4 py-2 justify-center items-center">
          <img src="vite.svg" className=" w-[150px] mb-4"></img>
          <p>This is a popup</p>
          <a href="https://react-leaflet.js.org/">Go to link!</a>
        </div>
      </Popup>
    </Marker> */}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
