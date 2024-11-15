// app/students/[id]/edit/page.tsx
import StudentForm from '@/app/components/studentForm';
import { useRouter } from 'next/router';

export default function EditStudentPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>Edit Student {id}</h2>
      <StudentForm />
    </div>
  );
}
