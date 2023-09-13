import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Index from './component/main/Index'
import Main from './component/accident/Main'
import MainOsago from './component/osago/Main'
import Calculate from './component/osago/Calculate'
import Contact from './component/contact/Contact'
import Reigister from './component/register/Reigister'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
            <Route path='/' element = {<Index />} />
            <Route path='/accident'  element = {<Main /> } />
            <Route path='/osago'  element = {<MainOsago /> } />
            <Route path="/calculate" element={<Calculate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/register' element={<Reigister />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
