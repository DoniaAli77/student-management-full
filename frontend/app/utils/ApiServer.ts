// utils/axiosInstance.ts
import axios from 'axios';
import { cookies } from "next/headers";
export default async function apiserver() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // Use environment variable for base URL
    withCredentials: true,
    headers: token
      ? { Authorization: `Bearer ${token}` } // send JWT to Nest
      : {},

  });
  return axiosInstance;
}


