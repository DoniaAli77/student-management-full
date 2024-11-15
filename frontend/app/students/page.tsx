"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import Link from "next/link";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchData();
  }, []);

  interface student {
    id: string;
    name: string;
    age: Number;
    courses: course[];
  }
  interface course {
    id: string;
    name: string;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Student List</h1>
      <Link href="/students/add">Add New Student</Link>

      <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        {students.map((student: student) => (
          <li
            key={student.id}
            className="p-4 border-b border-gray-200 last:border-none hover:bg-gray-50 transition text-gray-800"
          >
            <Link href={`/student/${student.id}`}> {student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default async function Home() {
//   const data = await fetch("http://localhost:3001/students");
//   interface student {
//     id: string;
//     name: string;
//   }
//   const students = await data.json();
//   return (
//     <ul>
//       {students.map((student: student) => (
//         <li key={student.id}>{student.name}</li>
//       ))}
//     </ul>
//   );
// }
