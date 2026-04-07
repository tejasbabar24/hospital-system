import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import ProtectedRoute from './utils/protectedRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProtectedRoute>  <Header/> </ProtectedRoute> 
      <Outlet />  {/* 👈 Render the matched child route */}
    </>
  )
}

export default App
