export const backendURI = process.env.NODE_ENV === 'production'
  ? 'https://weather-history-app-backend.herokuapp.com/api/'
  : 'http://localhost:8000/api/'