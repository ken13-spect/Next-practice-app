import React from 'react'

export default function Buttom({onClick, text}) {
  return (
    <button className="rounded-xl flex bg-white text-pink-500 px-5 py-3 
      text-base font-medium transition duration-200 hover:shadow-lg hover:shadow-indigo-300"
      onClick={() => {onClick}}
       >
        {text}
      </button>
  )
}
