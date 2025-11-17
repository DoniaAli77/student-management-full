import CoursesFooter from '../components/coursesFooter';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

     {children}
      <CoursesFooter />
    </>
  );
}
