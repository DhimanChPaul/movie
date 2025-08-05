import React from 'react'
import load from "../assets/load1.gif";
import loadhand from "../assets/loading.gif";
import loadround from "../assets/load02.gif";


const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black '>
        {/* <img src={load} alt="" /> */}
        <img className='rounded-3xl' src={loadround} alt="" />
        {/* <img className='w-[30%]' src={loadhand} alt="" /> */}
    </div>
  )
}

export default Loading