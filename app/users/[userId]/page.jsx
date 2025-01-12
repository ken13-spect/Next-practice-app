import Card from '@/components/Card';
import React from 'react'

 async function getOneUser(userId) 
{
  const response =  await fetch(`https://reqres.in/api/users/${userId}`);
  const data = await response.json();
  return data.data;

}

export default async function page({params}) {
  const user =  await getOneUser(params.userId);
  return (
    <Card user={user} />
  )
}
