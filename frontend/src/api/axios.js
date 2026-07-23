import axios from 'axios'

// Set VITE_API_URL in a .env file (see .env.example).
// Falls back to localhost for local development.
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
