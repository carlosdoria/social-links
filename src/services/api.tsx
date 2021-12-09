import axios from 'axios'

const ApiGithub = axios.create( {
  baseURL: 'https://api.github.com/users/carlosdoria',
} )

const ApiGoogleSheets = axios.create( {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://carlosdoria-social-links.vercel.app/api',
} )

export { ApiGithub, ApiGoogleSheets }
