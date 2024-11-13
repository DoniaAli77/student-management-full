
"use client"
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function Home() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };

    fetchData();
  }, []);
  interface student {
    id: string;
    name: string;
  }
  return (
    
        <ul>
          {students.map((student: student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      );};

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
