"use client";

import Students from "@/app/students/page";
import Link from "next/link";

export default function StudentsSlot() {
  // throw new Error("hiiiiiiiiii");

  return (
    <>
      <Students /> 
      
      <div className="flex flex-col items-center min-h-screen bg-[#121212] p-6">
      <h1 className="text-3xl font-bold text-white mb-8"><Link href="/parallel-routes/subpage">CLICK  Sub page</Link>  </h1>
      </div>
      </>
      
  );
}
