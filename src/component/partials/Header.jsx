import React from 'react'

const Header = ({data}) => {
  return (
    <div style={{background: ` linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/w780/${data?.backdrop_path || data?.profile_path})`,
    
    backgroundPosition:"center",
    // backgroundSize: "contain",
    backgroundSize: "100%  100%" ,
    backgroundRepeat: "no-repeat",

    }} className='w-full h-[50vh] flex items-end justify-start p-6'>
        <h1 className='text-4xl font-bold text-white drop-shadow-lg'>
            {data?.name || data?.title || data?.original_name || data?.original_title }
        </h1>
        
        </div>
  )
}

export default Header