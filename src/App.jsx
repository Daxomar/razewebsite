import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import viteLogo from '/vite.svg'
import { Navbar } from './Components/navbar'
import Home from './Pages/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
     <div className="flex flex-col h-screen w-full ">
     
     <Navbar />
     <Home />
    
    </div>


  )
}

export default App
