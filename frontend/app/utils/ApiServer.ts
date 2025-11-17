// utils/axiosInstance.ts
import axios from 'axios';
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";
// AuthContext will call this later


export default async function apiserver() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // Use environment variable for base URL
    headers: token
      ? { Authorization: `Bearer ${token}` } // send JWT to Nest
      : {},

  });


  axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    console.log('error status',status);
    if (status === 403 ) {
          redirect('/unauthorized')
          // window.location.href = '/login';
   
    }

    return Promise.reject(error);
  }
);
  return axiosInstance;
}


