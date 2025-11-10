import React from 'react'

const IntroSection = () => {
  return (
   <div className="border-b-4  justify-center   max-h-[1080px]  border-t-4 border-RPrimary  pb-16  space-y-8 flex flex-col text-RPrimary  w-full   mt-16 max-w-[1980px] ">
                 <div className="flex  ">
                    <div className="  flex gap-2 items-center w-full h-[64px] sm:mt-16 ">
                        <div className=""><i class="fa-solid fa-star text-2xl"></i></div>
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