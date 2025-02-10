import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

const API_URL = "https://express-api-tawny-alpha.vercel.app"; // Replace with your API URL

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cookieStore = new Cookies();

  useEffect(() => {
    const checkAuth = async () => {
      const token = cookieStore.get("jwt");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post(`${API_URL}/auth/verify`, { token });
        setUser(response.data.user);
      } catch (error) {
        console.error("Authentication check failed", error);
        setUser(null);
        cookieStore.remove("jwt");
      }
      setLoading(false);
    };
    const intervalId = setInterval(() => {
      checkAuth();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return { user, loading };
}

// export async function getSession() {
//   const cookieStore = new Cookies();
//   const token = cookieStore.get("jwt") || "";
//   console.log(token);
//   const res = await axios.post(`${API_URL}/auth/verify`, { token });
//   return res.data.valid;
// }
