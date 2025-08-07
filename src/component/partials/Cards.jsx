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
            <Link className='relative w-[25vh] mr-[5%] mb-[5%]' key={i}>

                <img className='h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]'
                    src={`https://image.tmdb.org/t/p/w780/${c.backdrop_path || c.profile_path || c.poster_path}`}
                    alt={noImg} />

                    <h1 className='text-2xl text-zinc-400 mt-3 font-semibold'>
                        {c?.name || c?.title || c?.original_name || c?.original_title}
                    </h1>

                    {c.vote_average && (
                      <div className='absolute right-[-10%] bottom-[20%] bg-yellow-600 rounded-full text-white w-[5vh] h-[5vh] flex justify-center items-center'>
                      {(c.vote_average *10).toFixed()}<sup>%</sup>
                    </div>
                    )}

                    

            </Link>

          

        ))}
    </div>
  )
}

export default Cards