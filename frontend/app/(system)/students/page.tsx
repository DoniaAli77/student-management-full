"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/ApiClient";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { student } from "@/app/utils/types";


export default function Students() {
  const [students, setStudents] = useState([]);
  const router = useRouter()


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



  return (
    <div className="flex flex-col items-center h-full overflow-y-auto bg-[#121212] p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Student List</h1>
      
      {/* Add New Student Button */}
      <Link
        href="/students/add"
        className="mb-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
      >
        Add New Student
      </Link>

      {/* Student List */}
      <ul className="w-full max-w-lg bg-[#1f1f1f] rounded-lg shadow-md p-6">
        {students.map((student: student) => (
          <li
            key={student._id.toString()}
            className="p-4 border-b border-[#444] last:border-none hover:bg-[#2d2d2d] transition text-gray-200"
          >
            <Link
              href={`/students/${student._id}`}
              className="text-lg font-semibold hover:text-blue-400"
            >
              {'Name: '+ student.name}
             
            </Link>
            <button
        type="button"
        onClick={()=> router.push(`/students/${student._id}/update`)}
        className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Update Student
      </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
