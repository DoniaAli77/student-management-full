"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/ApiClient";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { course } from "@/app/_lib/page";
import CoursesList from "../components/courseList";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const router = useRouter()
  async function handleDelete(id:object) {
    try {
     await axiosInstance.delete(`/courses/${id}`);

    } catch (error) {
      console.error("Error fetching courses:", error);
    }
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [courses]);



  return (
     <CoursesList   courses= {courses}/>)
}
