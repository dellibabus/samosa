import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import Navcomponent from './Components/Navcomponent'
import Privacy from './Footer/Privacy'
import Terms from './Footer/Terms'
import Register from './Pages/Register'
import Forget from './Pages/Forget'




const App = () => {
  return (
    <BrowserRouter>
      <Navcomponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget' element={<Forget />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
