import React from 'react'
import { Appi } from './Carousel'
const ProjectSection = () => {
    return (
        <div className="  flex flex-col text-RPrimary  w-full h-screen border-t-4 border-RPrimary mt-16 ">
            <div className="flex mt-10 mb-10 ">
                <div className="   flex gap-6 items-center w-[246px] h-[64px] ">
                    <div className=""><i class="fa-solid fa-star text-2xl"></i></div>
                    <div className="text-RTitle font-RMontserrat">Projects</div>

                </div>
            </div>





            {/* <div className="justify-center items-center flex gap-6 mt-10 border-2 border-RPrimary h-full">
                <div className="flex flex-col justify-end w-[602px] h-[366px] border-RPrimary rounded-RButton">
                    <div className=" text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary ">HENESSY PRO - 3D Architecture</div>
                   
                </div> <div className="flex flex-col justify-end w-[602px]  h-[366px] border-RPrimary rounded-RButton">
                    <div className=" text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary ">HENESSY PRO - 3D Architecture</div>
                    </div>
                <div className="flex flex-col justify-end w-[602px] h-[366px] border-RPrimary rounded-RButton">
                    <div className=" text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary ">HENESSY PRO - 3D Architecture</div>
                    
                </div>
            </div> */}



            {/* <div className="justify-center items-center flex gap-6 mt-10 border-2 border-RPrimary h-full">
               
                <div className="flex flex-col justify-end w-[602px] h-[366px] border-2  border-RPrimary rounded-RButton">
                    <div className=" text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary ">HENESSY PRO - 3D Architecture</div>
                </div>
            </div> */}



           <div className=" flex flex-col justify-center items-center">
            <Appi />
            </div>



                {/* <div className="flex flex-col items-center h-screen gap-4 my-8">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        My Behance Project
      </h2>
      <iframe
        src="https://www.behance.net/embed/project/222640729?ilo0=1"
        className="rounded-2xl shadow-lg w-[100vw]  h-full "
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div> */}


      














        </div>
    )
}

export default ProjectSection
