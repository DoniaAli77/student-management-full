// components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../context/authContext";
import { LogoutButton } from "./logOut";

const Navbar = () => {
  const { user } = useAuth();
  console.log("Navbar user:", user);
  return (
    <nav
      style={{
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderBottom: "2px solid #333",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          margin: 0,
          padding: 0,
          justifyContent: "center",
        }}
      >
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/profile"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Profile
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/home"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/students"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Students
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href={user!.role=="student"?`/students/${user!.id}/courses`:"/courses"}
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Courses
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/parallel-routes"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Parallel Routes
          </Link>
        </li>
        {user?.role === "admin" && (
          <li style={{ margin: "0 15px" }}>
            <Link
              href="/manage-enrollments"
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Manage Enrollments
            </Link>
          </li>
        )}

        <li style={{ margin: "0 15px" }}>
          <Link
            href="/tryErr"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Try Error
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            href="/Dashboard"
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Link>
        </li>

        {!user && <Link href="/login" style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >Login</Link>}
        {user && <LogoutButton />}
      </ul>
    </nav>
  );
};

export default Navbar;
