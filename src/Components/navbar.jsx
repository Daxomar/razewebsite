import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/asset'

export const Navbar = () => {
 
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className=" fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-white  px-[20px] py-[8px] md:px-[40px] lg:px-[80px] ">
            <div className="flex gap text-onPrimary  w-full  ">
                <div className=" text-RTitle  flex justify-center items-center "><img  src={assets.Logo} className='w-[25px] h-[25px] sm:w-[48px] sm:h-[48px]  ' /></div>
            </div>


                
                <ul className="hidden sm:flex items-center  justify-between w-full text-RParagraph1   font-RMontserrat px-8">
                    <li className="relative py-2 px-4 "><a href="#home" className='text-RPrimary '>Home</a></li>
                    <li className="relative py-2 px-4  "><a href="#home" className='text-RPrimary'>About</a></li>
                    <li className="relative py-2 px-4 "><a href="#home" className='text-RPrimary'>Projects</a></li>
                    <li className="relative py-2 px-4  "><a href="#home" className='text-RPrimary'>Contact</a></li>
                    <li className="relative py-2 px-4  "><a href="#home" className='text-RPrimary'>Pricing</a></li>


                     {/* <div className="py-2 px-4">Home</div>
                    <div className="py-2 px-4">About</div>
                    <div className="py-2 px-4">Projects</div>
                    <div className="py-2 px-4 ">Contact</div>
                    <div className="py-2 px-4 ">Pricing</div> */}



                </ul>
               

            <div className="flex relative w-full items-center justify-end  gap-2  ">
                <div className="border-RBorderDark text-RButtonText
                 border-[#101010] hover:bg-[#101010]
                  hover:text-white rounded-lg p-2  font-RMontserrat
                   transition-colors duration-300 ease-in-out">GET IN TOUCH</div>

                <div className="hidden sm:block"><img src="/Star.svg" className=""/></div>
                <div className="md:hidden  flex  items-center justify-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <i class="fa-solid fa-xmark text-[#101010] text-2xl"></i> : <i class="fa-solid fa-bars text-[#101010] text-2xl"></i>}
                    </button>
                </div>



            </div>



        </div>
    )
}

  


