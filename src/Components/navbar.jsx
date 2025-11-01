import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/asset'

export const Navbar = () => {
 
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className=" fixed top-0 left-0 w-full z-50 flex justify-between bg-white font-smallText text-smallText px-[30px] py-[16px] md:px-[40px] lg:px-[80px] border-2 ]">
            <div className="flex gap text-onPrimary">
                <div className=" text-RTitle  flex justify-center items-center "><img  src={assets.Logo} className='w-[25px] h-[25px] sm:w-[48px] sm:h-[48px]  ' /></div>
            </div>


                <div className="hidden sm:flex items-center gap-10 text-RParagraph1 font-RMontserrat px-4 ">
                    <div className="py-2 px-4">Home</div>
                    <div className="py-2 px-4">About</div>
                    <div className="py-2 px-4">Projects</div>
                    <div className="py-2 px-4 ">Contact</div>
                    <div className="py-2 px-4 ">Pricing</div>


                     {/* <div className="py-2 px-4">Home</div>
                    <div className="py-2 px-4">About</div>
                    <div className="py-2 px-4">Projects</div>
                    <div className="py-2 px-4 ">Contact</div>
                    <div className="py-2 px-4 ">Pricing</div> */}



                </div>

            <div className="flex relative items-center text-onPrimary text-EP1 font-EP1 px-4 gap-4  ">
                <div className="border-RBorderDark text-RButtonText 
                 border-RonPrimary hover:bg-RonPrimary
                  hover:text-RPrimary rounded-RButton p-2 font-RMontserrat
                   transition-colors duration-300 ease-in-out">GET IN TOUCH</div>

                <div className="hidden sm:block"><img src="/Star.svg" className=""/></div>
                <div className="md:hidden  flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "bo" : "Open"}
                    </button>
                </div>



            </div>



        </div>
    )
}

  


