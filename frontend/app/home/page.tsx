// Assuming this is inside your component file
import Link from "next/link";

const Dashboard = () => {
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
          <li>
            <Link
              href="/enrollments"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              
            >
              Manage Enrollments
            </Link>
          </li>
          <li>
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
          </li>
          <li>
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
            </li>

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
              Intercipting routes
            </Link>
            </li>
            <li>
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
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
