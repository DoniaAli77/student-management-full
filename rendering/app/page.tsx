'use client'
import Link from "next/link";
export default function Home() {
  let [state, setState] = ("home page state");
  console.log('hi from home home page render')
  return (<><Link href='/aboutClient'>Client</Link>
  
  <Link href='/aboutServer'>Server</Link>
  
  </>)
}