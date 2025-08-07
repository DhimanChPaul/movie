import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import Axios from '../utils/Axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {

  document.title=" Person"
  const navigate = useNavigate();
  const [category, setCategory] = useState('popular')
  const [person, setperson] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true) 

  const getPerson = async () => {
    try {
      const {data} = await Axios.get(`/person/${category}?page=${page}`)
      console.log("API Response:", data);

      if (data.results && data.results.length > 0) {
        if (page === 1) {
          setperson(data.results)
        } else {
          setperson((prevState) => [...prevState, ...data.results])
        }

        setPage(prevPage => prevPage + 1) 
        
        if (page >= data.total_pages) {
          setHasMore(false)
        }
      }
       else {
        setHasMore(false)
      }
      
    }
     catch (error) {
      console.log("Error: ", error);       
    }
  };

  useEffect(() => {
    setperson([])
    setPage(1)
    setHasMore(true)
  }, [category]);

  useEffect(() => {
    getPerson()
  }, [page, category]);

  return (
    <div className='p-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-zinc-400'>
          <i 
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line cursor-pointer" // Fixed: className instead of class
          ></i>{" "}
          Person 
          {/* <small className='ml-2 text-sm text-zinc-500'>({category})</small> */}
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav/>

          {/* <Dropdown 
            title="Category" 
            options={['on_the_air', 'top_rated', 'popular','airing_today']}
            func={(e) => setCategory(e.target.value)}
          /> */}

          {/* <div className='w-[2%]'></div>

          <Dropdown 
            title="Duration" 
            options={['week', 'day']}
            func={(e) => setDuration(e.target.value)}
          /> */}
        </div>
      </div>

      {person.length > 0 ? (
        <InfiniteScroll
          dataLength={person.length}
          next={getPerson}
          hasMore={hasMore}
          loader={<h4 className='text-center text-zinc-400 p-4'>Loading...</h4>}
          endMessage={
            <p className='text-center text-zinc-400 p-4'>
              <b>You have seen all person {category} content!</b>
            </p>
          }
        >
          <Cards data={person} title={category}/>
        </InfiniteScroll>
      ) : (
        <div className='flex items-center justify-center h-64'>
          <div className='text-center text-zinc-400'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#6556cd] mx-auto mb-4'></div>
            <p>Loading person {category} content...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default People