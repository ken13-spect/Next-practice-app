import React from "react";
import UserCards from "@/components/UserCards";

async function FechUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
}

export default async function page() {
  const users = await FechUsers();
  return (
  <UserCards users={users} />
  );
}
