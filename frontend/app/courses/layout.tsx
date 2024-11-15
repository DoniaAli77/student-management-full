// import CourseNavbar from "../components/courseNavBar";

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* <CourseNavbar/> */}
        {children}
      </body>
    </html>
  );
}
