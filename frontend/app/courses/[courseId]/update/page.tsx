// app/students/[id]/edit/page.tsx
import CourseForm from '@/app/components/CourseForm';
import { useRouter } from 'next/router';

export default function EditCoursePage() {
  const router = useRouter();
  const { courseId } = router.query;

  return (
    <div>
      <h2>Edit Student {courseId}</h2>
      <CourseForm />
    </div>
  );
}
