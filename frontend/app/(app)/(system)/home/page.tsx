// Assuming this is inside your component file
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";
    if (!token) {
      console.log("No token found, redirecting to login.");
      redirect("/login");
  }
  return (
    <div
      style={{
        backgroundColor: "#121212", // Dark background
        color: "#f5f5f5", // Light text for contrast
        minHeight: "85vh", // Full height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Course & Student Management
      </h1>

      <nav>
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <li
            style={{
              marginBottom: "15px",
            }}
          >
            <Link
              href="/students"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
            >
              Manage Students
            </Link>
          </li>
          <li
            style={{
              marginBottom: "15px",
            }}
          >
            <Link
              href="/courses"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
            >
              Manage Courses
            </Link>
          </li>
          {/* <li>
            <Link
              href="/parallel-routes"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              
            >
            Parallel Routes
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="/login"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              
            >
              Login
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="/register"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              
            >
              Register
            </Link>
            </li> */}

            <li>
            <Link
              href="/photo-feed"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              
            >
              Photos
            </Link>
            </li>
            {/* <li>
            <Link
              href="/f1"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              
            >
              Intercipting routes v2
            </Link>
            </li> */}
             {/* <li>
            <Link
              href="/tryErr"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              
            >
              Try Error
            </Link>
            </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
function checkCookiesServer() {
  throw new Error("Function not implemented.");
}

