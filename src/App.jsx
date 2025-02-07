import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import Map from "./pages/map";
import Layout from "./components/layout";
import Trip from "./pages/trip";
import Photo from "./pages/photo";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="map" element={<Map />} />
        <Route path="trip/:id" element={<Trip/>} />
        <Route path="photo/:id" element={<Photo/>} />
      </Route>
    </Routes>
  );
}

export default App;
