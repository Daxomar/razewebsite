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
                      sm:bg-white
                      mt-[-80px]
                          
                      xl:mt-[-60px]
                      "
        >


 {/* h-[calc(100vh-58px)]  */}

            <div className=" justify-between items-end flex sm:gap-2  flex-col  text-start h-full w-full  sm:justify-center sm:items-center  sm:mt-32  sm:w-screen sm:h-screen    ">
                <div className=" px-[20px] sm:p-0 order-2 sm:order-1 text-white sm:text-black text-RHeader1 font-RMontserrat w-full  mb-20 sm:mb-0 sm:w-full flex  sm:justify-center sm:items-center ">
                    I am a<br/>Digital Designer
                </div>

                <div className="  order-1 sm:order-2 sm:w-full  h-full sm:h-auto sm:text-black flex  text-3xl gap-2 flex-col justify-start py-32 sm:py-0 items-start px-4 sm:px-12  ">
                    <a href='https://www.linkedin.com/in/faithfulness-chukwurah-366700193/' target="_blank" ><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/faithfulness-chukwurah-366700193/' target="_blank"  ><i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://www.behance.net/iamraze' target="_blank"><i class="fa-brands fa-behance"></i></a>                    
                </div>
            </div>
        </div>
  )
}

export default Herosection