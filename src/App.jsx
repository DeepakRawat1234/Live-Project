import React from 'react'
import Gallery from './pages/Gallery'
import Signup from './components/login/Signup'
import Login from './components/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
      {/* <{Gallery}/> */}
      
      <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App