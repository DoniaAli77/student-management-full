
"use client";
export default function ErrorPage({error,}:{
    error:Error,
}) {
    return <div>Something went wrong with the students!
         {error.name}  
    </div>;
  }
  