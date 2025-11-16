
import { cookies } from "next/headers";
import NavBar from "./components/NavBar";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore =await cookies();
  console.log("layout cookies", cookieStore.getAll());
  const token = cookieStore.get("token")?.value;
  console.log("layout token", token);
  if (!token) {
   redirect("/login"); 
  }
  return (
    <>
        <NavBar/> 
       
        {children}
        
      </>
  );
}
