import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import Map from "./pages/map";
import Layout from "./components/layout";
import Trip from "./pages/trip";
import Photo from "./pages/photo";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="map" element={<Map />} />
              <Route index element={<Home />} />
            </Route>
            <Route path="trip/:id" element={<Trip />} />
            <Route path="photo/:id" element={<Photo />} />
            <Route element={<AuthRoute />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
