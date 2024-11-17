'use client'
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [input,setInput]= useState('') //to test state change
  return (
    <><input value={input} onChange={(e)=>setInput(e.target.value)}></input>
   
    {children}
      <Footer />
    </>
  );
}
