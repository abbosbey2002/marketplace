import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Index from './component/main/Index'
import Main from './component/accident/Main'
import Application from './component/accident/Application'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/accident' element={<Main />} />
         
      </Routes>
      <Footer />
    </>
  )
}

export default App