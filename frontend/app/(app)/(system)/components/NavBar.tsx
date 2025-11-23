// components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../context/authContext";
import { LogoutButton } from "./logOut";

const Navbar = () => {
  const { user ,login} = useAuth();
  // console.log("Navbar user:", user);
  // if(!user){
  //   console.log("No user in Navbar");
  //   redirect("/login");
  // }

  
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center">
          <h1 className="text-xl font-semibold text-white mb-2">
            No user logged in
          </h1>
          <p className="text-neutral-400 text-sm mb-4">
            You need to login to view your profile.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-white text-black font-medium px-4 py-2 text-sm hover:bg-neutral-200"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
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
        {/* <li style={{ margin: "0 15px" }}>
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
        </li> */}
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

        {/* <li style={{ margin: "0 15px" }}>
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
        </li> */}
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
