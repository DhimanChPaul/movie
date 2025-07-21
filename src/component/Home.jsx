import React, { useState, useEffect } from 'react'
import SideNav from './partials/SideNav'
import Topnav from './partials/Topnav'
import Axios from '../utils/Axios';
import Header from './partials/Header';

const Home = () => {


    document.title= "home page"

    const[wallpaper, setWallpaper]= useState(null)

    const getWallpaper= async () =>{
    try {
      const {data}= await Axios.get(`/trending/all/day`)

      let randomdata= data.results[Math.floor(Math.random()* data.results.length)];
      
      setWallpaper(randomdata)
      
    } catch (error) {
      console.log("Error: ",error);
      
    }
  };

  useEffect(()=> {
    !wallpaper && getWallpaper();
  } ,[]);



  return (<>

    <SideNav/>

    <div className='w-[80%] h-full' >
      <Topnav/>
      <Header data={wallpaper}/>

    </div>

  </>
   
  )
}

export default Home;