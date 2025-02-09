import { useState } from "react"
import axios from "axios"

const API_URL = "https://express-api-tawny-alpha.vercel.app" // Replace with your API URL

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password })
      console.log(response)
      localStorage.setItem("token", response.data)
      console.log("Logged In Successfully!!!")
    } catch (err) {
      setError("Invalid credentials")
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password })
      localStorage.setItem("token", response.data)
    } catch (err) {
      setError("Error registering user")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login / Register</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  )
}

