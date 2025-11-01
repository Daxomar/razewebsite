import React from 'react'

const Herosection = () => {
  return (
    <div className="
         
                   
                  
                   bg-contain
                   bg-left
                    sm:bg-center
                     bg-no-repeat
                      w-screen 
                      bg-[url('/BGMobile.png')]
    sm:bg-[url('/Background.png')]
                      h-[calc(100vh-58px)]                             
                      "
        >




            <div className="  hidden sm:flex gap-2 sm:flex-col  text-start h-full w-full justify-center items-center sm:justify-center sm:items-center   mt-16  sm:w-screen sm:h-screen    ">
                <div className=" sm:order-1 text-[20px] sm:text-black sm:text-RHeader1 font-RMontserrat  0 w-[400px] sm:w-full flex  sm:justify-center sm:items-center ">
                    I am a<br/>Digital Designer
                </div>

                <div className="  sm:order-2 w-[400px] sm:w-full  sm:text-black flex  flex-col justify-center items-start sm:px-12 mt- ">
                    <div>Twitter</div>
                    <div>Instagram</div>
                    <div>Behance</div>
                </div>
            </div>
        </div>
  )
}

export default Herosection