import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#1f1e24] text-amber-50 flex'>

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    
    </div>
  )
}

export default App
