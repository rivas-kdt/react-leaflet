import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import Map from "./pages/map";
import Layout from "./components/layout";
import Trip from "./pages/trip";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="map" element={<Map />} />
        <Route path="trip/:id" element={<Trip/>} />
      </Route>
    </Routes>
  );
}

export default App;
