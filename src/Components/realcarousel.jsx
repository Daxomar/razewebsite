import React, { useEffect } from 'react'
import { useState } from 'react'
import { Children } from 'react'
export const Realcarousel = ({
    children: Projects,
    autoSlide = false,
    autoSlideInterval = 3000
}) => {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr == 0 ? Projects.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr == Projects.length - 1 ? 0 : curr + 1))


    // Automatic image scroll
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className="flex flex-col xl:flex-row gap-16 justify-between  max-w-[1980px] p-2">


            <div className=" flex flex-col items-center w-full justify-center   ">
                <div className=" flex gap-4 flex-col items-center justify-center max-w-[670px]  ">
                    <div className=" text-RTitle font-RMontserrat text-center">A comprehensive Look At What I Offer and <br />How I deliver</div>
                    <p className=" text-RParagraph2 font-RMontserrat text-center">facilisis nulla molestie euismod accumsan eget vitae augue eget elementum
                        tristique sit pharetra diam
                        sed ultricies  facilisis nulla molestie euismod accumsan eget vitae augue
                        eget elementum tristique sit pharetra diam sed ultricies
                    </p>
                </div>
                <div className=' w-full p-RLaptopPadding flex flex-col max-w-[670px] items-center   '>
                    <div className=" px-2 flex justify-between py-4  w-full ">
                        <div className=" max-w-[120px] text-center text-RButtonText text-[8px] sm:text-[12px] border-2 border-RPrimary text-white rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">Brand Design</div>

                        <div className=" max-w-[120px] text-center text-RButtonText text-[8px] sm:text-[12px] border-2 border-RPrimary text-white rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">Logo Creation</div>

                        <div className=" max-w-[120px] text-center text-RButtonText text-[8px] sm:text-[12px]  border-2 border-RPrimary text-white rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">Visualization</div>
                    </div>



                    <div className=" xl:px-14 py-4 flex justify-around  w-full ">
                        <div className="  max-w-[120px] text-center text-RButtonText text-[8px] sm:text-[12px] border-2 border-RPrimary text-white rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">Marketting</div>
                        <div className="  max-w-[120px] text-center text-RButtonText text-[8px]  sm:text-[12px] border-2 border-RPrimary text-white rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">Website Design</div>
                    </div>
                </div>
            </div>


            <div className="overflow-hidden relative  w-full max-w-[1080px] ">
                <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{Projects}</div>
                <div className="flex absolute inset-0 items-center justify-between ">
                    <button onClick={prev} className="p-2  bg-RPrimary text-RonPrimary rounded-full "><i class="fa-solid fa-chevron-left"></i></button>
                    <button onClick={next} className="p-2  bg-RPrimary text-RonPrimary rounded-full"><i class="fa-solid fa-chevron-right"></i></button>
                </div>

                <div className="absolute bottom-4  right-0 left-0 ">
                    <div className="flex items-center justify-center gap-2 ">
                        {Projects.map((_, i) => (
                            <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr == i ? "p-4" : "bg-opacity-50"}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        

                {/* <div class="flex min-h-screen items-center justify-center bg-neutral-800">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Shooting Star</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
  </div>
</div> */}


                {/* <div class="flex min-h-screen items-center justify-center bg-neutral-800">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative  items-center justify-center overflow-hidden ">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 " src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
     

    </div>
  </div>
</div> */}



        </div>
    )
}


