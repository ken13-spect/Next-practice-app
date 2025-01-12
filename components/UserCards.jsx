import Link from 'next/link'
import React from 'react'
import Card from './Card'

export default function UserCards({users}) {
  return (
    <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {users.map((user) => (
      <Link
      key={user.id}
      href={`/users/${user.id}`}
      >
      <Card user={user} />
      </Link>
    ))}
  </ul>
  )
}
