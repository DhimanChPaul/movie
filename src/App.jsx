import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'
import Loading from './component/Loading'
import Trending from './component/Trending'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#1f1e24] text-amber-50 flex overflow-hidden'>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/l' element={<Loading/>}/>
        <Route path='/trending' element={<Trending/>}/>
      </Routes>
    
    </div>
  )
}

export default App
