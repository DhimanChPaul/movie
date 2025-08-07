import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'
import Loading from './component/Loading'
import Trending from './component/Trending'
import Popular from './component/Popular'
import Movie from './component/Movie'
import TvShows from './component/TvShows'
import People from './component/People'
import Cards from './component/partials/Cards'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#1f1e24] text-amber-50 flex overflow-hidden'>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/l' element={<Loading/>}/>
        <Route path='/c' element={<Cards/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/tv' element={<TvShows/>}/>
        <Route path='/people' element={<People/>}/>
      </Routes>
    
    </div>
  )
}

export default App
