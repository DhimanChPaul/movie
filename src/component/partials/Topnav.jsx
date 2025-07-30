// import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Axios from '../../utils/Axios';
import noImg  from '../../assets/noImg.png'

const Topnav = () => {

  const[query, setQuery]=useState("")
  console.log(query);
  const[searches, setSearches]= useState([])

  const GetSearch= async () =>{
    try {
      const {data}= await Axios.get(`/search/multi?query=${query}`)
      console.log(data);
      setSearches(data.results)
      
    } catch (error) {
      console.log("Error: ",error);
      
    }
  };

  useEffect(()=> {
    // GetSearch();
    if(query.length > 0) { // Only search when there's a query
      GetSearch();
    } else {
      setSearches([]); // Clear results when query is empty
    }
  } ,[query]);
  

  return (
    <div className='w-full h-[10vh] flex justify-center items-center  relative '>
        <i className=" text-3xl ri-search-line"></i>
        <input className='w-[50%] text-xl p-3 mx-10' type='text' placeholder='Search Anything'
        onChange={(e)=> setQuery(e.target.value)}
         value={query}
        ></input>
        

        {query.length > 0 &&(
            <i className=" text-3xl ri-close-circle-fill" onClick={()=> setQuery("")}></i>
        )
          
        }
      


        {/* this div for sugesition */}
        
        {query.length > 0 && searches.length > 0 && (
          <div className='w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%]  overflow-auto rounded z-50'>
            {searches.map((s, i) => (
              <Link 
                key={i} 
                className='p-4 hover:bg-zinc-300 hover:text-black w-full font-semibold flex justify-start items-center border-b border-zinc-100 text-zinc-600'
              >
                <img 
                  className='w-16 h-16 object-cover rounded mr-4'
                  src={s.backdrop_path || s.profile_path ? 
                    `https://image.tmdb.org/t/p/w200${s.backdrop_path || s.profile_path}` : 
                    noImg
                  } 
                  alt='img'
                />
                <span>{s.name || s.title || s.original_title || s.original_name}</span>
              </Link>
            ))}
          </div>
        )}
      
    </div>
  )
}

export default Topnav