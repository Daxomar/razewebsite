import React from 'react'

const Herosection = () => {
  return (
    <div className="
         
                   
                  
                   bg-cover
                   sm:bg-contain
                   bg-left
                    sm:bg-center
                     bg-no-repeat
                      w-screen 
                      bg-[url('/BGMobile.png')]
    sm:bg-[url('/Background.png')]
                      h-[calc(100vh)]                                                
                      "
        >


 {/* h-[calc(100vh-58px)]  */}

            <div className=" justify-between items-end flex sm:gap-2  flex-col  text-start h-full w-full  sm:justify-center sm:items-center  sm:mt-32  sm:w-screen sm:h-screen    ">
                <div className="  order-2 sm:order-1 text-white sm:text-black text-RHeader1 font-RMontserrat w-full  sm:w-full flex  sm:justify-center sm:items-center ">
                    I am a<br/>Digital Designer
                </div>

                <div className="  order-1 sm:order-2 sm:w-full  sm:text-black flex  text-3xl gap-2 sm:flex-col justify-center items-start sm:px-12 ">
                    <div><i class="fa-brands fa-instagram"></i></div>
                    <div><i class="fa-brands fa-linkedin"></i></div>
                    <div><i class="fa-brands fa-behance"></i></div>
                    
                </div>
            </div>
        </div>
  )
}

export default Herosection