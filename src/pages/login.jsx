import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { NavLink } from "react-router";

const API_URL = "https://express-api-tawny-alpha.vercel.app"; // Replace with your API URL

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      const cookies = new Cookies();
      cookies.set("jwt", response.data, { path: "/" });
      window.location.reload();
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  //   const handleRegister = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(`${API_URL}/auth/register`, {
  //         email,
  //         password,
  //       });
  //       localStorage.setItem("token", response.data);
  //       const cookies = new Cookies();
  //       cookies.set("jwt", response.data, { path: "/" });
  //       console.log(cookies.get("jwt"));
  //     } catch (err) {
  //       setError("Error registering user");
  //     }
  //   };

  return (
    <div className=" h-[calc(100vh-60px)] min-h-[calc(100vh-60px)] flex flex-col justify-center">
      <p className=" text-4xl font-bold w-full text-center">Log In</p>
      <div className=" px-10 py-3 h-1/2 flex flex-col pb-3 gap-3 items-center">
        <div className=" bg-[#2e2e2e] rounded-lg w-full p-4">
          <form>
            <div className=" mb-4">
              <label htmlFor="email" className=" font-semibold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              />
            </div>
            <div className=" mb-6">
              <label htmlFor="email" className=" font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-white mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-black"
              />
            </div>
            <div className=" flex justify-end">
              <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className=" w-full h-[1px] bg-white/20"></div>
        <div className=" justify-center w-full flex gap-5">
          <p>No Account?</p>
          <NavLink to={"/register"}>Regsiter Now!</NavLink>
        </div>
      </div>
    </div>
  );
}

// <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h1 className="text-2xl font-bold mb-6 text-center">
//           Login / Register
//         </h1>
//         <form>
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div className="flex justify-between">
//             <button
//               onClick={handleLogin}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Login
//             </button>
//             <button
//               onClick={handleRegister}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
//       </div>
//     </div>
