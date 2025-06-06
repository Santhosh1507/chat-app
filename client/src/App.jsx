import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Profilepage from './pages/Profilepage'
import {Toaster} from "react-hot-toast"
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function App() {

  const { authUser} = useContext(AuthContext);

  return (
   <div className="bg-black">
      <Toaster/>
      <Routes>
        <Route path='/'  element={authUser ? <HomePage /> : <Navigate to="/login"/>} />
        <Route path='/login'  element={!authUser ?<LoginPage /> : <Navigate to="/"/>} />
        <Route path='/profile'  element={authUser ? <Profilepage /> : <Navigate to="/login"/>} />
      </Routes>
   </div>
  )
}

export default App
