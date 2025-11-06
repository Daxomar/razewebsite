import React from 'react'
import { Realcarousel } from './realcarousel'
// import demovideo from "./asset/demo.mp4"

export const Appi = () => {




 const Projects =[
        {
        number: "1",
        ProjectName:"Aspire",
        projectPreview:"/ProjectPreviews/Project1.png",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
        
       },


          {
        number: "2",
        ProjectName:"BeQuest",
        projectPreview:"/ProjectPreviews/Project2.png",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
       },

          {
        number: "3",
        ProjectName:"Mer",
        projectPreview:"/ProjectPreviews/Project3.png",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
       },


          {
        number: "4",
        ProjectName:"Food Ambassador",
        projectPreview:"/ProjectPreviews/Project4.png",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
       },
       
          {
        number: "5",
        ProjectName:"Chop rice",
        projectPreview:"/ProjectPreviews/Project5.png",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
       },
        
       
          {
        number: "6",
        ProjectName:"JaZaTar",
        projectPreview:"/ProjectPreviews/Project6.png",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
       },

       
          {
        number: "7",
        ProjectName:"Alure",
        projectPreview:"/ProjectPreviews/Project7.png",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
       }

    ]



  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
]

// autoSlide={true} autoSlideInterval={5000}
  return (
    
         <div className=" w-full  flex flex-col justify-center items-center">
            {/* me adding the autoslide effect to it */}
            <Realcarousel autoSlide={true} autoSlideInterval={5000} >

                {/* {slides.map((slide) => (
                    <img src = {slide} className="" />
                ))} */}


                 {/* current working version without video*/}
                 {/* 
                    {Projects.map((project) => (
                 
                    <img src = {project.projectPreview} className="" />
                    
                ))} */}


                   {[...Projects.map((project) => (

                    
                    <img src = {project.projectPreview} className="" />
                     
                    
                )),
                  <video
  src="/LogoVideoPreview/Simple-Dot-[remix].mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-auto"
></video>
                ]}

              
                 {/* {[...slides.map((slide) => (
                    <img src = {slide} />
                )),
                 <video  src={demovideo} autoplay muted loop/>
                ]} */}
            </Realcarousel>
         </div>
    
  )
}





