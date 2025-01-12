import Image from "next/image";

export default function Home() {
  return (
   <div className="container bg-slate-500 p-7 flex flex-col items-center h-svh mx-auto rounded-lg" >
   <h1 className="font-semibold text-7xl text-center uppercase">Welcome to practice app user</h1>  
   <p>This page is a one </p>
   <button className="rounded-l">User</button>
   </div>
  );
}
