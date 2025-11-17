// utils/axiosInstance.ts

"use client";

import axios from 'axios';
import { useAuth } from '../(app)/(system)/context/authContext';
import { redirect } from 'next/navigation';
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Use environment variable for base URL
  withCredentials: true, // Include cookies if needed


})

// This variable will hold the function that AuthContext gives us
let onUnauthorized: (() => void);

// AuthContext will call this later
export function registerUnauthorizedHandler(handler: () => void) {
  onUnauthorized = handler;
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    console.log('error status', status);
    if (status === 403) {
      redirect('/unauthorized')
      // window.location.href = '/login';

    }

    if ((status === 401) && !window.location.href.includes('/login')) {
      onUnauthorized();
      // window.location.href = '/login';

    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
