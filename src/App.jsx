import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom' 
import '@fortawesome/fontawesome-free/css/all.min.css';
import viteLogo from '/vite.svg'
import { Navbar } from './Components/navbar'
import Home from './Pages/Home.jsx'
import './App.css'
import Fullprojects from './Pages/Fullprojects.jsx';
import FooterSection from './Components/footerSection.jsx';
import ProjectListPage from './Pages/ProjectListPage.jsx';
import ProjectDetailPage from './Pages/ProjectDetailPage.jsx';
import Admin from './Pages/Admin.jsx';
import FreelancerContactForm from './Pages/ContactPage.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';



function App() {
  const [count, setCount] = useState(0)


  return (
     <div className="flex flex-col h-screen w-full items-center  ">
     

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Fullprojects />} /> */}
        <Route path="/projects" element={<ProjectListPage />} />  
        <Route path="/projects/:id" element = {<ProjectDetailPage />} />
        <Route path="/contact" element = {<FreelancerContactForm />} />

         <Route path = "/admin" element ={<Admin/>} />

      {/* PROTECTED ROUTES */}
       {/* <Route element ={<ProtectedRoutes/>}>
          <Route path = "/admin" element ={<Admin/>} />
       </Route> */}
      {/* PROTECTED ROUTES */}


        
      </Routes>
      
      <FooterSection />
 
    
    </div>


  )
}

export default App
