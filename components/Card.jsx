import React from 'react'

export default function Card({user}) {
  return (
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
  )
}
