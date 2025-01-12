import React from "react";
import UserCards from "@/components/UserCards";

async function FechUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  console.log(data.data);
  return data.data;
}

export default async function page() {
  const users = await FechUsers();
  return (
  <UserCards users={users} />
  );
}
