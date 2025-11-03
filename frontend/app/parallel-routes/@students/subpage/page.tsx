import Link from "next/link";

export default function Subpage() {
  return (
    
    <div className="flex flex-col items-center min-h-screen bg-[#121212] p-6">
      <h1 className="text-3xl font-bold text-white mb-8">hello from sub page  </h1>
      
      <h2 className="text-3xl font-bold text-white mb-8">  <Link href="/parallel-routes"> CLICK  back to students list</Link></h2>
    
    </div>
  );
}
