import React from 'react'
import Dropdown from './Dropdown'

const HorizontalCard = ({data}) => {

  //  if (!data || (!data.backdrop_path && !data.profile_path)) return null;
  // const imageUrl = `https://image.tmdb.org/t/p/w780/${data.backdrop_path || data.profile_path}`

  return (
    <div className='w-full h-[40vh] p-5 mb-3'>
        {/* <div className='mb-5 flex justify-between'>
          <h1 className='text-3xl font-semibold text-zinc-400 '>
              Trending
          </h1>
          <Dropdown title="Select Category" options={['tv', 'movie', 'all']}/>
        </div> */}
        

        <div className=' w-[100%] h-[40vh] flex overflow-auto mb-5'>
        
          {data.map((d,i) =>(
            <div key={i} className='min-w-[15%] bg-zinc-800 mr-5 p-2'>

              <img className='w-full object-cover '
                src={`https://image.tmdb.org/t/p/w780/${d.backdrop_path || d.profile_path || d.poster_path}`}
                // src={`${imageUrl}`}
                alt="" 
              />

               <h1 className=' mt-2 w-[95%] text-2xl font-semibold text-white'>
                 {d?.name || d?.title || d?.original_name || d?.original_title }
               </h1>

               <p className='mt-3 mb-3 text-white'>
                 {d?.overview?.slice(0,50)}...
                  <span className='text-zinc-500'>more</span>
              </p>

            </div>
          ) )}



        </div>
    </div>
  )
}

export default HorizontalCard