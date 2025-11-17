"use client";
import { timeStamp } from "console";
import Link from "next/link";
export default function Home() {
  let [state, setState] = "home page state";
  console.log("hi from home home page render");
  return (
    <>
      <Link href="/aboutClient">Client</Link>
<> --------------------------</>
      <Link href="/aboutServer">Server</Link>
      <> --------------------------</>

      <Link href="/st/1">id 1</Link>
      <> --------------------------</>

      <Link href="/st/2">id 2</Link>
      <> --------------------------</>

      <Link href="/st/3">id 3</Link>
      <> --------------------------</>

      <Link href="/st/4">id 4</Link>
    </>
  );
}
