import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://laster-marka-back.herokuapp.com',
  withCredentials: true,
  headers: {
    Cookie: "jwt=value"
  }
})
