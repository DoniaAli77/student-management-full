'use client'
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import StudentFooter from "../components/studentFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [input,setInput]= useState('layout state') //to test state change
  return (
    <><input value={input} onChange={(e)=>setInput(e.target.value)}></input>
         <Navbar />

    {children}
      <StudentFooter />
    </>
  );
}
