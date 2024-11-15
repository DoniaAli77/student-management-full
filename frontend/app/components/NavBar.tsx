// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/students">Students</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/courses">Courses</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/enrollments">Enrollments</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
