import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

async function getOneUser(userId) {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const data = await response.json();
  return data.data;
}

export default async function page({ params }) {
  const user = await getOneUser(params.userId);
  return (
    <div className="flex flex-col items-center">
      <Card user={user} />
      <Link href="/users">
      <button className="bg-white text-pink-500 px-4 py-2 font-semibold rounded-lg my-3  transition duration-200 hover:shadow-lg hover:shadow-indigo-300"> Back</button>
       </Link>

    </div>
  );
}
