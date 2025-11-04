import React from 'react'
import { Realcarousel } from './realcarousel'
// import demovideo from "./asset/demo.mp4"

export const Appi = () => {

  const slides = [

    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
]


  return (
    <div>
         <div className="max-w-2xl ">
            {/* me adding the autoslide effect to it */}
            <Realcarousel autoSlide={true} autoSlideInterval={5000}>
                {slides.map((slide) => (
                    <img src = {slide} className="" />
                ))}


                 {/* {[...slides.map((slide) => (
                    <img src = {slide} />
                )),
                 <video  src={demovideo} autoplay muted loop/>
                ]} */}
            </Realcarousel>
         </div>
    </div>
  )
}





