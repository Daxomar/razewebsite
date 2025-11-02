import React from 'react'
import Skill from './skill'

const ServiceSection = () => {

    const skills =[
        {
        number: "01",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
        skilltop: "3D Architectural",
        skillbottom: "Visualization"
       },


          {
        number: "02",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
        skilltop: "Brand",
        skillbottom: "Design"
       },

          {
        number: "03",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
        skilltop: "Product",
        skillbottom: "Design"
       },


          {
        number: "04",
        description:"Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non.",
        skilltop: "Social Media",
        skillbottom: "Content Creation"
       }
    ]






  






    return (
        <div className=" pb-16  flex flex-col  w-full ">
            <div className="flex mt-16 mb-10 ">
                <div className="   flex gap-6 items-center w-[215px] h-[64px] ">
                    <div className=""><img src="/Star.svg" className="" /></div>
                    <div className="text-RTitle font-RMontserrat">Services</div>

                </div>
            </div>

            <div className="flex mt-16 mb-16  ">
                <div className="flex gap-6 text-RHeader4 font-RMontserrat items-center  ">
                    I shape the art behind<br /> spaces and brands.
                </div>
            </div>



            {/* <div className=" flex flex-col border-2 border-yellow-600 h-full sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div> */}


            <div>
      {skills.length > 0 ? (
        <ul className="flex flex-col  h-full sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill) => (
            <Skill key={skill.number} skill={skill} />
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-600 mt-8">HAHAHA YOU ARE SKILL LESS</p>
      )}
    </div>


        </div>
    )
}

export default ServiceSection