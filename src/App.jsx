import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router' 
import '@fortawesome/fontawesome-free/css/all.min.css';
import viteLogo from '/vite.svg'
import { Navbar } from './Components/navbar'
import Home from './Pages/Home.jsx'
import './App.css'
import Fullprojects from './Pages/Fullprojects.jsx';
import FooterSection from './Components/footerSection.jsx';

function App() {
  const [count, setCount] = useState(0)


  return (
     <div className="flex flex-col h-screen w-full ">
     

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Fullprojects />} />
      </Routes>
      
      <FooterSection />
 
    
    </div>


  )
}

export default App
