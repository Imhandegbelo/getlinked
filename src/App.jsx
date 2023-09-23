import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1440px]">
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
