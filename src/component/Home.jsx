import React, { useState, useEffect } from 'react'
import SideNav from './partials/SideNav'
import Topnav from './partials/Topnav'
import Axios from '../utils/Axios';
import Header from './partials/Header';
import HorizontalCard from './partials/HorizontalCard';
import Dropdown from './partials/Dropdown';

const Home = () => {

    document.title= "Home page"
    const[wallpaper, setWallpaper]= useState(null)
    const [Trending, setTrending] = useState(null)
    const [category, setCategory] = useState("all")


    const getWallpaper= async () =>{
      try {
        const {data}= await Axios.get(`/trending/all/day`)
        console.log("API Response:", data);

        if (data.results && data.results.length > 0) {
          let randomdata = data.results[Math.floor(Math.random() * data.results.length)];
          setWallpaper(randomdata)
        }
        
      } catch (error) {
        console.log("Error: ",error);
      }
    };


    const getTrending= async () =>{
      try {
        const {data}= await Axios.get(`/trending/${category}/day`)
        console.log("API Response:", data);
        if (data.results && data.results.length > 0) {
          setTrending(data.results)
        }
        
      } catch (error) {
        console.log("Error: ",error);
        
      }
    };





  useEffect(()=> {
    // !wallpaper && getWallpaper();
    getWallpaper();
    getTrending();

    //this is for test pourpous
    // setWallpaper({
    //     backdrop_path: "../assets/noImg.png",
    //     title: "Test Movie",
    //     overview: "This is a test description..."
    // });
  } ,[category]);
  
    return (
        <>
            <SideNav/>
            <div className='w-[80%] h-full overflow-auto '>
                <Topnav/>
                {wallpaper ? <Header data={wallpaper}/> : <div>Loading header...</div>}

                <div className=' flex justify-between p-5'>
                          <h1 className='text-3xl font-semibold text-zinc-400 '>
                              Trending
                          </h1>
                          <Dropdown title="Select Category" 
                          options={['tv', 'movie', 'all']}
                          func= {(e) =>setCategory(e.target.value)}
                          />
                          
                </div>

                {Trending ? <HorizontalCard data={Trending}/> : <div>Loading trending...</div>}
            </div>
        </>
    );
}

export default Home;