import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {

   if (!data || (!data.backdrop_path && !data.profile_path)) return null;

  const imageUrl = `https://image.tmdb.org/t/p/w780/${data.backdrop_path || data.profile_path}`

  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${imageUrl})`,
      // background: ` linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/w780/${data?.backdrop_path || data?.profile_path})`,
    backgroundPosition:"center",
    // backgroundSize: "cover",
    backgroundSize: "100% 100%" ,
    backgroundRepeat: "no-repeat",

    }} className='w-full h-[50vh] flex flex-col relative justify-end items-start p-[5%]'>
        
        <h1 className='text-4xl font-black text-white drop-shadow-lg'>
            {data?.name || data?.title || data?.original_name || data?.original_title }
        </h1>
        <p className=''>
          {data?.overview?.slice(0,200)}...
          <Link className='text-blue-400'>more</Link>
        </p>
        <p>
          <i class='text-yellow-300 ri-megaphone-fill'></i>{" "}
          {data?.release_date  || "N/A"}
          <i class='ml-5 text-yellow-300 ri-album-fill'> </i>{" "}
          {data?.media_type?.toUpperCase() || "MOVIE"}

        </p>
        <Link className='mt-5 bg-[#6556CD] px-4 py-2 rounded text-white'>{" "} Watch Trailer</Link>
        
        </div>
  )
}

export default Header