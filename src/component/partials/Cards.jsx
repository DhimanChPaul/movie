import React from 'react'
import { Link } from 'react-router-dom'
import noImg from '../../assets/noImg.png'

const Cards = ({data, title}) => {

    if (!data || data.length === 0) {
    return (
      <div className='text-center text-zinc-400 p-8'>
        <p>No {title} content available</p>
      </div>
    )
  }

  return (
    <div className='flex flex-wrap w-full'>
        {data.map((c,i)=> (
            <Link className='w-[25vh] mr-[5%] mb-[5%]' key={i}>

                <img className='h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]'
                    src={`https://image.tmdb.org/t/p/w780/${c.backdrop_path || c.profile_path || c.poster_path}`}
                    alt={noImg} />

                    <h1 className='text-2xl text-zinc-400 mt-3 font-semibold'>
                        {c?.name || c?.title || c?.original_name || c?.original_title}
                    </h1>
            </Link>
        ))}
    </div>
  )
}

export default Cards