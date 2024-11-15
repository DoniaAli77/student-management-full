// app/students/[id]/page.tsx
import { useRouter } from 'next/router';

export default function StudentDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Details for student {id}</div>;
}
