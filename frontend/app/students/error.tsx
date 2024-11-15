
// app/students/error.tsx
export default function StudentErrorPage({error,reset}:{
    error:Error,
    reset:()=>void
}) {
    return <div>Something went wrong with the students!
         {error.name}  
         <button onClick={reset}> press for try again</button> 
    </div>;
  }
  