import React from 'react'

const FooterSection = () => {
    return (
        <div className="w-full mt-16 h-screen flex-col flex justify-center  ">
            <div className="flex justify-between gap-2  py-7 border-t-4 border-b-4 border-RonPrimary  ">
                <div className="  text-RHeader2 font-RMontserrat  xl:leading-[140px] xl:min-h-[370px] ">Let's Connect<br /> There</div>
                <div className="flex justify-center items-center border-RBorderDark text-RTitle border-RonPrimary hover:bg-RonPrimary hover:text-RPrimary rounded-RButton p-2 w-[313px]  h-[90px] font-RMontserrat transition-colors duration-300 ease-in-out">GET IN TOUCH</div>
            </div>


            <div className="flex flex-col gap-12 sm:flex-row pt-12 justify-between items-start ">
                <div className="flex flex-col gap-2 max-w-[570px] w-full flex-1">
                    <div className="flex items-center gap-6">
                    <div className=""><img src="/Logo.svg" alt='Logo Image' className="inline" /></div>
                    <div className="text-RHeader3 font-RMontserrat text-RonPrimary">RAZE</div>
                    </div>
                    <div className="text-RParagraph1 font-RMontserrat p">Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non</div>   
                </div>



                <div className="flex flex-col gap-12 sm:gap-16 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <div className="text-RParagraph1 font-black font-RMontserrat">Address</div>
                        <div className="text-RParagraph2 font-RMontserrat">Technology Park 7-12 Gumpang</div>
                        <div className="">Recidanc 57292 Surakarta Indonesia</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-RParagraph1 font-black font-RMontserrat">Email Address</div>
                        <div className="text-RParagraph2 font-RMontserrat">Technology Park 7-12 Gumpang</div>
                        <div className="text-RParagraph2 font-RMontserrat">REcidanc 57292 Surakarta Indonesia</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-RParagraph1 font-black font-RMontserrat">Phone Number</div>
                        <div className="text-RParagraph2 font-RMontserrat" >Technology Park 7-12 Gumpang</div>
                        <div className="text-RParagraph2 font-RMontserrat">REcidanc 57292 Surakarta Indonesia</div>
                    </div>
                </div>
            </div>

            <div className="  flex flex-col gap-12 md:flex-row justify-between items-center py-4 ">
                <div className="  sm:text-black flex  text-3xl gap-2  justify-start items-start  w-full max-w-[950px] ">
                    <a href='https://www.linkedin.com/in/faithfulness-chukwurah-366700193/' target="_blank" ><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/faithfulness-chukwurah-366700193/' target="_blank"  ><i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://www.behance.net/iamraze' target="_blank"><i class="fa-brands fa-behance"></i></a>
                </div>


                 <div className=" flex  items-center  justify-between  w-full max-w-[657px]  text-RParagraph1  font-RMontserrat md:px-8">
                    <div className="py-2 px-4  ">Home</div>
                    <div className="py-2 px-4  ">About</div>
                    <div className="py-2 px-4 ">Projects</div>
                    <div className="py-2 px-4  ">Contact</div>
                    
                </div>
            </div>

            <div className=" flex items-center justify-center text-RTitle py-16 border-t-4 border-RonPrimary">All rights reserverd @RAZE</div>
        </div>
    )
}

export default FooterSection
