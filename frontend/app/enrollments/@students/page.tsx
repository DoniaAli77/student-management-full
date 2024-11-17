"use client";

import Students from "@/app/students/page";
import Link from "next/link";


export default function StudentsSlot() {
  // throw new Error("hiiiiiiiiii");
  
  
  
  return(<><Students/> <Link href='/enrollments/subpage'> Sub page</Link></>)
}
