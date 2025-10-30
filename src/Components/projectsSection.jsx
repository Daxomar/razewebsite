import React from 'react'

const ProjectSection = () => {
    return (
        <div className="  flex flex-col  w-full h-screen border-b-4 border-black mt-16 ">
            <div className="flex mt-10 mb-10 ">
                <div className="   flex gap-6 items-center w-[246px] h-[64px] ">
                    <div className=""><img src="/Star.svg" className="" /></div>
                    <div className="text-RTitle font-RMontserrat">Projects</div>

                </div>
            </div>





            {/* <div className="flex gap-6 mt-10">
                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton">
                    <div className=" text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary ">HENESSY PRO - 3D Architecture</div>
                   
                </div> <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton">
                    <div className=" text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary ">HENESSY PRO - 3D Architecture</div>
                    </div>
                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton">
                    <div className=" text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary ">HENESSY PRO - 3D Architecture</div>
                    
                </div>
            </div> */}















            <div className="flex gap-6 mt-10 overflow-x-auto scrollbar-hide px-4">
                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton ">
                    <div className="text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary">
                        HENESSY PRO - 3D Architecture
                    </div>
                </div>

                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton ">
                    <div className="text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary">
                        MODERN VILLA - 3D Design
                    </div>
                </div>

                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton">
                    <div className="text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary">
                        LUXURY INTERIOR - 3D Visualization
                    </div>
                </div>
            </div>



            <div className="flex gap-6 mt-10 overflow-x-auto scrollbar-hide px-4">
                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton ">
                    <div className="text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary">
                        HENESSY PRO - 3D Architecture
                    </div>
                </div>

                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton ">
                    <div className="text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary">
                        MODERN VILLA - 3D Design
                    </div>
                </div>

                <div className="flex flex-col justify-end w-[602px] h-[366px] bg-RonPrimary rounded-RButton ">
                    <div className="text-RButtonText font-RMontserrat text-start px-4 py-10 text-RPrimary">
                        LUXURY INTERIOR - 3D Visualization
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProjectSection
