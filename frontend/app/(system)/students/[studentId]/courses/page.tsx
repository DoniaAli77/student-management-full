import { useEffect, useState } from "react";
import CoursesList from "@/app/(system)/components/courseList";
import apiserver from "@/app/utils/ApiServer";

export default async function Courses({
  params,
}: {
  params: Promise<{ studentId: string }>;
}) {
  const { studentId } = await params;
  let axiosInstance = await apiserver();
  let courses = [];
  try {
    const response = await axiosInstance.get(`/students/${studentId}/courses`);
    courses = response.data;
    console.log("Fetched courses:", courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
  }



  return <CoursesList courses={courses} />;
}
