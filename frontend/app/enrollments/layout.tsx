import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function ComplexDashboardLayout({
    children,
    courses,
    students
   
  }: {
    children: React.ReactNode;
    courses: React.ReactNode;
    students: React.ReactNode;
  }) {
    return (<>
    <Navbar/>
    <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>  {children}
        {courses}
        {students}</div>
        </div>
      
        <Footer/>
        </>
    ) 
  }