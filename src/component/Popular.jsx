// import React from 'react'
import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import Axios from '../utils/Axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
   document.title=" Popular"

  const navigate = useNavigate();
  const [category, setCategory] = useState('movie')
  const [popular, setPopular] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true) 

  const getPopular = async () => {
    try {
      const {data} = await Axios.get(`/${category}/popular?page=${page}`)
      console.log("API Response:", data);

      if (data.results && data.results.length > 0) {
       
        setPopular((prevState) => [...prevState, ...data.results])
        setPage(prevPage => prevPage + 1) 
      }
       else {
        setHasMore(false)
      }
      
    }
     catch (error) {
      console.log("Error: ", error);       
    }
  };

  const refreshHandler =() =>{
    if(popular.length ===0 ){
      getPopular()
    }
    else{
      setPage(1);
      setPopular([]);
      getPopular();
      setHasMore(true);
    }
  }


  useEffect(() => {
    refreshHandler();
  }, [category]);


   return (
    <div className='p-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-zinc-400'>
          <i 
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line cursor-pointer" 
          ></i>{" "}
          Popular
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav/>

          <Dropdown 
            title="Category" 
            options={['tv', 'movie']}
            func={(e) => setCategory(e.target.value)}
          />

          <div className='w-[2%]'></div>

          {/* <Dropdown 
            title="Duration" 
            options={['week', 'day']}
            func={(e) => setDuration(e.target.value)}
          /> */}
        </div>
      </div>

      {popular.length > 0 ? (
        <InfiniteScroll
          dataLength={popular.length}
          next={getPopular}
          hasMore={hasMore}
          loader={<h4 className='text-center text-zinc-400 p-4'>Loading...</h4>}
          endMessage={
            <p className='text-center text-zinc-400 p-4'>
              <b>You have seen all popular {category} content!</b>
            </p>
          }
        >
          <Cards data={popular} title={category}/>
        </InfiniteScroll>
      ) : (
        <div className='flex items-center justify-center h-64'>
          <div className='text-center text-zinc-400'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#6556cd] mx-auto mb-4'></div>
            <p>Loading popular {category} content...</p>
          </div>
        </div>
      )}
    </div>
  )
}


export default Popular