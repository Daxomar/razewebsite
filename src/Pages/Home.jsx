import React from 'react'
import { assets } from '../assets/asset'
import Background from '../assets/Background.png'
import BGMobile from '../assets/BGMobile.png'
import Herosection from '../Components/herosection'
import HighLightSection from '../Components/highlightsection'
import ServiceSection from '../Components/services'
import IntroSection from '../Components/introSection'
import TestimonialSection from '../Components/testimonialSection'
import ProjectSection from '../Components/projectsSection'
import PricingSection from '../Components/pricingSection'
import FooterSection from '../Components/footerSection'


const Home = () => {
    return (

        <div className="flex flex-col items-center  flex-1 py-[120px] px-[20px] sm:px-[40px] md:px-[40px] lg:px-[80px] 2xl:px-[100px] ">
            {/* <Herosection /> */}
            {/* <HighLightSection /> */}
            {/* <IntroSection /> */}
            {/* <ServiceSection /> */}
            {/* <TestimonialSection/> */}
            {/* <ProjectSection /> */}
            <PricingSection/>
            {/* <FooterSection /> */}
   {/* <video
  autoPlay
  muted
  loop
  playsInline
  controls
  width="100%"
  style={{ borderRadius: "12px" }}
>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}

        </div>
    )

}

export default Home



