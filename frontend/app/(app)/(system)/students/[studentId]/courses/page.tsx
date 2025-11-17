import CoursesList from "@/app/(app)/(system)/components/courseList";
import apiserver from "@/app/utils/ApiServer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Courses({
  params,
}: {
  params: Promise<{ studentId: string }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";
  if (!token) {
    console.log("No token found, redirecting to login.");
    redirect("/login");
  }
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
