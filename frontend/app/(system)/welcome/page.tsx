"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

import axiosInstance from "../../utils/ApiClient";
import { getCookie } from "cookies-next";
let backend_url = "http://localhost:3000";

export default  function WelcomPage() {
    const cookie = getCookie("token");
    const [userName, setUserName] = useState("");
    const router = useRouter()
  // useeffect to fetch username
  useEffect(() => {
    async function fetchData() {
      try {
        const cookie = getCookie("token");

        console.log('cookie',cookie)
        if (!cookie) {
          router.push("/login");
        }
        const uid = localStorage.getItem("userId");
        console.log(uid);

        const response = await axiosInstance.get(
          `${backend_url}/students/${uid}`
        );
        console.log("response", response);

        // if (!response.status == 200) {
        //   console.log('status from home page', response.status)

        //   removeCookies('token')
        //   navigate('/login')
        // }
        setUserName(response.data.displayName);
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px", color: "white" }}>
        Welcome {userName}
      </h1>
    </>
  );
}
