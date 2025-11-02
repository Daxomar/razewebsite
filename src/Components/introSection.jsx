import React from 'react'

const IntroSection = () => {
  return (
   <div className="border-b-4 space-y-8 border-black flex flex-col justify-center w-full  mt-16 sm:h-screen max-w-[1980px] max-h-[1080px] ">
                 <div className="flex  ">
                    <div className="  flex gap-6 items-center w-full h-[64px] sm:mt-16 ">
                        <div className=""><img src="/Star.svg" className="" /></div>
                        <div className="text-RTitle font-RMontserrat">Intro</div>

                    </div>
                </div>

                 <div className="flex-1  text-RHeader3 font-RMontserrat flex  justify-center items-center  h-full  ">
                   <p className=" sm:px-[146px] sm:py-[10px]"><span className="text-RSecondary">My work embodies duality—drive and precision, instinct and intellect.</span> It reflects a craft that is minimal, intentional, and feral in its pursuit of clarity and creation.clarity and creation.</p> 
                 </div>
             </div>
  )
}

export default IntroSection