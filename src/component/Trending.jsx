// import React, { useEffect, useState } from 'react'
// import Topnav from './partials/Topnav'
// import Dropdown from './partials/Dropdown'
// import { useNavigate } from 'react-router-dom'
// import Axios  from '../utils/Axios'
// import Cards from './partials/Cards'
// import InfiniteScroll from 'react-infinite-scroll-component';


// const Trending = () => {

//   const navigate=useNavigate();
//   const [category, setCategory] = useState('all')
//   const [duration, setDuration] = useState("day")
//   const [trending, setTrending] = useState([])
//   const [page, setPage] = useState(1)

//   const getTrending= async () =>{
//       try {
//         const {data}= await Axios.get(`/trending/${category}/${duration}`)
//         console.log("API Response:", data);

//         if (data.results && data.results.length > 0) {
//           // setTrending(data.results)
//           setTrending((prevState) => [...prevState, ...data.results])
//           setPage(page+ 1)
//         }
        
//       } catch (error) {
//         console.log("Error: ",error);       
//       }
//     };

//     useEffect(()=>{
//       getTrending()
//     },[category, duration]);


//   return (
//     <div className='p-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
//       <div className='w-full flex items-center justify-between'>

//         <h1 className='text-2xl font-semibold text-zinc-400'>
//           <i onClick={() => navigate(-1)}
//           class="hover:text-[#6556cd] ri-arrow-left-line"></i>{" "}
//           Trending
//         </h1>

//         <div className='flex items-center w-[80%]'>
//         <Topnav/>

//         <Dropdown 
//         title="Category" 
//           options={['tv', 'movie', 'all']}
//           func= {(e) =>setCategory(e.target.value)}
//         />

//         <div className='w-[2%]'></div>

//         <Dropdown 
//         title="Duration" 
//           options={['week', 'day']}
//           func= {(e) =>setDuration(e.target.value)}
//         />
//         </div>

//       </div>

//       <InfiniteScroll
//         dataLength={trending.length}
//         next={getTrending}
//         hasMore={true}
//         loader={<h4>Loading...</h4>}
//         // endMessage={
//         //   <p style={{ textAlign: 'center' }}>
//         //     <b>Yay! You have seen it all</b>
//         //   </p>
//         // }
//         // // below props only if you need pull down functionality
//         // refreshFunction={this.refresh}
//         // pullDownToRefresh
//         // pullDownToRefreshThreshold={50}
//         // pullDownToRefreshContent={
//         //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
//         // }
//         // releaseToRefreshContent={
//         //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
//         // }
//       >
//         {items}
//         <Cards data={trending} title={category}/>
//       </InfiniteScroll>

      
//     </div>
//   )
// }

// export default Trending

import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useNavigate } from 'react-router-dom'
import Axios from '../utils/Axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
   document.title=" Trending"
  const navigate = useNavigate();
  const [category, setCategory] = useState('all')
  const [duration, setDuration] = useState("day")
  const [trending, setTrending] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true) 

  const getTrending = async () => {
    try {
      const {data} = await Axios.get(`/trending/${category}/${duration}?page=${page}`) // Add page parameter
      console.log("API Response:", data);

      if (data.results && data.results.length > 0) {
        if (page === 1) {
          setTrending(data.results)
        } else {
          setTrending((prevState) => [...prevState, ...data.results])
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
    setTrending([])
    setPage(1)
    setHasMore(true)
  }, [category, duration]);

  useEffect(() => {
    getTrending()
  }, [page, category, duration]);

  return (
    <div className='p-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-zinc-400'>
          <i 
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line cursor-pointer" // Fixed: className instead of class
          ></i>{" "}
          Trending
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav/>

          <Dropdown 
            title="Category" 
            options={['tv', 'movie', 'all']}
            func={(e) => setCategory(e.target.value)}
          />

          <div className='w-[2%]'></div>

          <Dropdown 
            title="Duration" 
            options={['week', 'day']}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      {trending.length > 0 ? (
        <InfiniteScroll
          dataLength={trending.length}
          next={getTrending}
          hasMore={hasMore}
          loader={<h4 className='text-center text-zinc-400 p-4'>Loading...</h4>}
          endMessage={
            <p className='text-center text-zinc-400 p-4'>
              <b>You have seen all trending {category} content!</b>
            </p>
          }
        >
          <Cards data={trending} title={category}/>
        </InfiniteScroll>
      ) : (
        <div className='flex items-center justify-center h-64'>
          <div className='text-center text-zinc-400'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#6556cd] mx-auto mb-4'></div>
            <p>Loading trending {category} content...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Trending