import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { assets } from '../assets/asset'
import { Link } from 'react-router-dom';


export const Navbar = () => {


    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    // Your nav links
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#home", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
        { href: "#home", label: "Pricing" },
    ];

    // Replace with actual user data
    const userName = "John Doe";
    const userInitial = userName?.charAt(0) || "U";

    const isActive = (href) => {
        if (typeof window !== 'undefined') {
            return window.location.pathname === href;
        }
        return false;
    };

    const handleLogout = () => {
        setIsSheetOpen(false);
        // Add your logout logic here
        console.log("Logging out...");
    };



    return (
        // <div className=" fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-white  px-[20px] py-[8px] md:px-[40px] lg:px-[80px] ">
        //     <div className="flex gap text-onPrimary  w-full  ">
        //         <div className=" text-RTitle  flex justify-center items-center "><img  src={assets.Logo} className='w-[25px] h-[25px] sm:w-[48px] sm:h-[48px]  ' /></div>
        //     </div>



        //         <ul className="hidden sm:flex items-center  justify-between w-full text-RParagraph1   font-RMontserrat px-8">
        //             <li className="relative py-2 px-4 "><Link to="/" className='text-RPrimary'>Home</Link></li>
        //             <li className="relative py-2 px-4  "><a href="#home" className='text-RPrimary'>About</a></li>
        //             <li className="relative py-2 px-4 "><Link to="/projects" className='text-RPrimary'>Projects</Link></li>
        //             <li className="relative py-2 px-4  "><a href="#home" className='text-RPrimary'>Contact</a></li>
        //             <li className="relative py-2 px-4  "><a href="#home" className='text-RPrimary'>Pricing</a></li>


        //              {/* <div className="py-2 px-4">Home</div>
        //             <div className="py-2 px-4">About</div>
        //             <div className="py-2 px-4">Projects</div>
        //             <div className="py-2 px-4 ">Contact</div>
        //             <div className="py-2 px-4 ">Pricing</div> */}



        //         </ul>


        //     <div className="flex relative w-full items-center justify-end  gap-2  ">
        //         <div className="border-RBorderDark text-RButtonText
        //          border-[#101010] hover:bg-[#101010]
        //           hover:text-white rounded-lg p-2  font-RMontserrat
        //            transition-colors duration-300 ease-in-out">GET IN TOUCH</div>

        //         <div className="hidden sm:block"><img src="/Star.svg" className=""/></div>
        //         <div className="md:hidden  flex  items-center justify-center">
        //             <button onClick={() => setMenuOpen(!menuOpen)}>
        //                 {menuOpen ? <i class="fa-solid fa-xmark text-[#101010] text-2xl"></i> : <i class="fa-solid fa-bars text-[#101010] text-2xl"></i>}
        //             </button>
        //         </div>



        //     </div>
        // </div>



        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-white  px-[20px] py-[8px] md:px-[40px] lg:px-[80px] ">
            {/* Logo/Brand */}
            <div className="flex gap text-onPrimary  w-full   ">
                <div className=" text-RTitle  flex justify-center items-center "><img src={assets.Logo} className='w-[25px] h-[25px] sm:w-[48px] sm:h-[48px]' /></div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden sm:flex items-center  justify-between w-full text-RParagraph1   font-RMontserrat px-8 border-black border-2 ">

                {navLinks.map((link) => (
                    <li className="relative py-2 px-4 ">
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-RPrimary"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}

            </ul>


            <div className="flex relative w-full items-center justify-end  gap-2  ">

                <div className="border-RBorderDark text-RButtonText
              border-[#101010] hover:bg-[#101010] 
                 hover:text-white rounded-lg p-2  font-RMontserrat
                  transition-colors duration-300 ease-in-out">GET IN TOUCH</div>
                <div className="hidden sm:block"><img src="/Star.svg" className="" /></div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsSheetOpen(!isSheetOpen)}
                    className="p-2 text-slate-700 hover:text-slate-900 transition-colors"
                >
                    {isSheetOpen ? (
                        <i class="fa-solid fa-xmark text-[#101010] text-2xl"></i>
                    ) : (
                        <i class="fa-solid fa-bars text-[#101010] text-2xl"></i>
                    )}
                </button>
            </div>






            {/* Mobile Sheet Menu */}
            {isSheetOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setIsSheetOpen(false)}
                    />

                    {/* Sheet Content */}
                    <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg z-50 flex flex-col md:hidden">

                        {/* User Info Header */}
                        <div className=" px-6 py-6 border-b border-RPrimary">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex flex-col items-center gap-2 text-onPrimary  w-full  ">
                                    <div className=" text-RTitle  flex justify-center items-center"><img src={assets.Logo} className='w-[25px] h-[25px] sm:w-[48px] sm:h-[48px]' /></div>
                                    <div className=" text-RTitle  flex justify-center items-center font-RMontserrat ">RAZE STUDIOS</div>
                                </div>
                                {/* <div>
                                    <p className="font-semibold text-slate-900">{userName}</p>
                                    <p className="text-xs text-slate-600">ID: RES12345</p>
                                </div> */}
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsSheetOpen(false)}
                                    className={`block px-4 py-3 rounded-lg font-RMontserrat transition-all ${isActive(link.href)
                                        ? "bg-RonPrimary text-RPrimary border-l-4 border-RPrimary"
                                        : "text-RPrimary opacity-60 hover:bg-slate-300"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Logout Button */}
                        <div className="border-t border-slate-200 p-4">
                            <button
                                onClick={handleLogout}
                                className="w-full px-4 py-3 bg-RonPrimary text-RPrimary border-RBorderDark hover:bg-RPrimary hover:text-RonPrimary border-RPrimary  font-RMontserrat transition-colors duration-300 ease-in-out rounded-lg"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                </>
            )}
        </nav>

    )
}




