// app/students/add/page.tsx

import StudentForm from "@/app/(system)/components/studentForm";

export default function AddStudentPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Add New Student</h2>
      <StudentForm edit={false}  />
    </div>
  );
}
