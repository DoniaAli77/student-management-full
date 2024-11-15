// import StudentNavBar from "../components/studentNavBar";

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* <StudentNavBar/> */}
        {children}
      </body>
    </html>
  );
}
