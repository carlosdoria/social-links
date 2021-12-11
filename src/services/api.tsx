import axios from 'axios'

export const ApiGithub = axios.create( {
  baseURL: 'https://api.github.com/users/carlosdoria',
} )

export const ApiGoogleSheets = axios.create( {
  baseURL: '/api'
} )
