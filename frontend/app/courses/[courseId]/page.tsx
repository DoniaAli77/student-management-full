// app/students/[id]/page.tsx
import { useRouter } from 'next/router';

export default function CourseDetailsPage() {
  const router = useRouter();
  const { courseId } = router.query;

  return <div>Details for course {courseId}</div>;
}
