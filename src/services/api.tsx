import axios from 'axios'

export const ApiGithub = axios.create( {
  baseURL: 'https://api.github.com/users/carlosdoria',
} )

export const ApiGoogleSheets = axios.create( {
  baseURL: 'https://social-links-o51t3hzsw-carlosdoria.vercel.app/api'
} )
