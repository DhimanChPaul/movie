import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[20%] h-full border-r-4 border-zinc-200 p-3'>
      <h1 className='text-2xl text-amber-50 font-bold p-5'>
        <i class='text-[#6556CD] ri-tv-fill mr-2 ' ></i>
        <span className='text-2xl'>Movie App</span>
      </h1>

      <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h1 className='text-white font-semibold mt-5 mb-2'> New Feeds </h1>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
        <i class="ri-fire-fill"></i> Trending</Link>
        
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
        <i class="ri-bard-fill"></i> Popular</Link>
       
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
        <i class="ri-movie-fill"></i> Movies</Link>
        
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
        <i class="ri-tv-2-fill"></i> Tv Shows</Link>
        
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'> <i class="ri-user-fill"></i> People</Link>

      </nav>
  
      <hr></hr>
      <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h1 className='text-white font-semibold mt-5 mb-2'> Information </h1>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
        <i class="ri-information-fill"></i> About Us</Link>
        
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
       <i class="ri-customer-service-fill"></i> Contacts</Link>
       

      </nav>

    </div>
  )
}

export default SideNav