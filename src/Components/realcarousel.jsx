import React, { useEffect } from 'react'
import { useState } from 'react'
import { Children } from 'react'
export const Realcarousel = ({
     children: Projects,
     autoSlide =false, 
     autoSlideInterval=3000
    }) => {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr)=>(curr == 0 ? Projects.length -1 : curr - 1))

    const next = () => setCurr((curr)=>(curr == Projects.length -1  ? 0 : curr + 1))


    //Automatic image scroll
    useEffect(()=>{
        if(!autoSlide) return
        const slideInterval =setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    },[])


  return (
    <div className="overflow-hidden relative ">
       <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>{Projects}</div>
       <div className="flex absolute inset-0 items-center justify-between ">
          <button onClick={prev}  className="p-2  bg-RPrimary text-RonPrimary rounded-full "><i class="fa-solid fa-chevron-left"></i></button>
          <button onClick={next} className="p-2  bg-RPrimary text-RonPrimary rounded-full"><i class="fa-solid fa-chevron-right"></i></button>          
       </div>

       <div className="absolute bottom-4  right-0 left-0 ">
            <div className="flex items-center justify-center gap-2 ">
                {Projects.map((_, i)=>(
                    <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr == i ? "p-4": "bg-opacity-50"}`}></div>
                ))}
            </div>
       </div>
    </div>
  )
}


