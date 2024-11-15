// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Course & Student Management</h1>
      <nav>
        <ul>
          <li><Link href="/students">Manage Students</Link></li>
          <li><Link href="/courses">Manage Courses</Link></li>
          <li><Link href="/enrollments">Manage Enrollments</Link></li>
        </ul>
      </nav>
    </div>
  );
}
