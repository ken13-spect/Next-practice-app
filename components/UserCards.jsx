import Link from 'next/link'
import React from 'react'

export default function UserCards({users}) {
  return (
    <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {users.map((user) => (
      <Link
      key={user.id}
      href={`/users/${user.id}`}
      >
      <li
        key={user.id}
        className="w-full bg-slate-50 rounded-lg p-12 flex flex-col justify-center items-center "
      >
        <div className="mb-8">
          <img
            className="object-center object-cover rounded-full h-36 w-36"
            src={user.avatar}
          />
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-700 font-bold mb-2">
            {user.first_name} {user.last_name}
          </p>
          <p className="text-base text-gray-400 font-normal">{user.email}</p>
        </div>
      </li>
      </Link>
    ))}
  </ul>
  )
}
