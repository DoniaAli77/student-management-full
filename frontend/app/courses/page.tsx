import Link from "next/link";

export default async function Home() {
  const data = await fetch("http://localhost:3001/courses");
  interface course {
    id: string;
    name: string;
  }
  const courses = await data.json();
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-2xl font-bold text-blue-600 mb-6">Student List</h1>
    <Link href="/courses/add">Add New Course</Link>

    <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
      {courses.map((course: course) => (
        <li 
          key={course.id} 
          className="p-4 border-b border-gray-200 last:border-none hover:bg-gray-50 transition text-gray-800"
        >
            <Link href={`/student/${course.id}`}> {course.name}</Link>
            </li>
      ))}
    </ul>
  </div>
  );
}
