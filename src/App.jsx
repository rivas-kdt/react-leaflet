import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className=" main">
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <div className=" flex flex-col px-4 py-2 justify-center items-center">
              <img src="vite.svg" className=" w-[150px] mb-4"></img>
              <p>This is a popup</p>
              <a href="https://react-leaflet.js.org/">Go to link!</a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
