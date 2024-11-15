// app/courses/template.tsx
import { ReactNode } from 'react';

export default function CourseTemplate({ children }: { children: ReactNode }) {
  return (
    <div>
      <h3>Course Details Template</h3>
      <div>{children}</div>
    </div>
  );
}
