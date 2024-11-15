// app/students/[id]/edit/page.tsx
import { student } from "@/app/_lib/page";
import StudentForm from "@/app/components/studentForm";
type Params = Promise<{
  studentId: string;
}>;


export default async function EditStudentPage(props: { params: Params }) {
  const params = await props.params;
  const studentId = params.studentId;
  const data = await fetch(`http://localhost:3001/students/${studentId}`);
  const studentinfo:student=await data.json()


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Edit Student {studentId}</h2>
      <StudentForm edit={true} studentinfo={studentinfo}/>
    </div>
  );
}
