'use client'
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import StudentFooter from "../components/studentFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

    {children}
      <StudentFooter />
    </>
  );
}
