import React from 'react'

function Card({username,btntext="visit me"}) {
    console.log(username)
  return (
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
    <div>
      <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/3763421/pexels-photo-3763421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
    <div class="flex items-center md:items-start">
      <span class="text-2xl font-medium">{username}</span>
      <span class="font-medium text-sky-500">The Anti-Patterns</span>
      <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
        <span>No. 4</span>
        <span>·</span>
        <span>2025</span>
      </span>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
      {btntext}

    </div>
  </div>
  )
}

export default Card
