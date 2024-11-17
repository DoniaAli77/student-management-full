'use client'
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function Template({ children }: { children: React.ReactNode }) {
   const [input,setInput]= useState('')
  return (
    <><input  value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
