'use client'

import StudentFooter from "../components/studentFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

    {children}
      <StudentFooter />
    </>
  );
}
