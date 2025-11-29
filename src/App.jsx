import React from 'react'
import Gallery from './pages/Gallery'
import Signup from './components/login/Signup'
import Login from './components/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
