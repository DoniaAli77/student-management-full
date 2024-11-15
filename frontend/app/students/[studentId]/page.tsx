// app/students/[id]/page.tsx

import { student } from "@/app/_lib/page";

export default async function StudentDetailsPage({
  params,
}: {
  params: Promise<{
    studentId: string;
  }>;
}) {


  const { studentId } = await params;
  const data = await fetch(`http://localhost:3001/students/${studentId}`);
  const studentInfo:student=await data.json()


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Student Details</h1>
      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg w-full max-w-md">
      <p className="text-lg">Details for student </p>

        <p className="text-lg">ID: {studentId}</p>
        <p className="text-lg">Name: {studentInfo.name}</p>
        <p className="text-lg">Age:  {studentInfo.age}</p>


      </div>
    </div>
  );
}
