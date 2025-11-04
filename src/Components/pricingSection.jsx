import React from 'react'

const PricingSection = () => {
    return (
        <div className=" space-y-8 flex flex-col text-RPrimary  w-full   mt-16 max-w-[1980px] ">
            <div className="flex mt-10 mb-10  justify-center items-center ">
                <div className="flex flex-col  items-center">
                    <div className="text-RHeader3 font-RMontserrat ">Pricing</div>

                    <div className=" w-full flex justify-center gap-2 items-center text-RParagraph1 font-RMontserrat">
                        <div className="">Monthly</div>
                        <div className=" ">
                            <div className="border-2 border-RPrimary w-[38px] h-[16px] rounded-3xl flex items-center justify-end bg-RPrimary py-2  ">
                                <div className="border-2 border-RPrimary rounded-full w-[20px] h-[20px] bg-RonPrimary"></div>
                            </div>
                        </div>
                        <div className="">Yearly</div>
                    </div>
                </div>
            </div>



            <div className=" flex items-center justify-center ">
                <div className=" flex gap-4 flex-col items-center justify-center max-w-[670px]">
                    <div className=" text-RTitle font-RMontserrat text-center">A comprehensive Look At What I Offer and <br />How I deliver</div>
                    <p className=" text-RParagraph2 font-RMontserrat text-center">facilisis nulla molestie euismod accumsan eget vitae augue eget elementum
                        tristique sit pharetra diam
                        sed ultricies  facilisis nulla molestie euismod accumsan eget vitae augue
                        eget elementum tristique sit pharetra diam sed ultricies
                    </p>
                </div>
            </div>







            <div className="flex mt-10 mb-10  ">
                <div className="  flex gap-2 items-center w-[400px] h-[64px] ">
                   <div className=""><i class="fa-solid fa-star text-2xl"></i></div>
                    <div className="text-RTitle font-RMontserrat">BrandDesign</div>
                </div>
            </div>




            <div className="  flex flex-col justify-center gap-16  sm:grid sm:grid-cols-2 sm:justify-items-center xl:flex xl:flex-row xl:justify-between items-center mt-10 h-full ">


                {/* first First */}
                <div className="flex flex-col h-full max-h-[605px]  w-full max-w-[420px] border-RPrimary border-2 pb-RLaptopPadding    rounded-RButton">
                    <div className=" border-b-2 border-RPrimary  rounded-t-RButton flex flex-col text-RPrimary p-RLaptopPadding gap-4 hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out ">
                        <div className="text-RParagraph2 font-RMontserrat">Start Pack</div>
                        <div className="text-RTitle text-[40px] sm:text-[50px] font-RMontserrat">₵1000</div>
                        <div className="text-RParagraph2 font-RMontserrat">Workmark Only</div>
                    </div>

                    <div className=" w-full h-full flex flex-col justify-center  pl-RLaptopPadding text-RParagraph2 font-RMontserrat  py-2 ">
                        <div className="flex gap-2 ">
                           <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className="">Wordmark Logo design(1concept + 1revision)</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> Final Log files (JPEG,PNG,PDF,SVG)</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> Basic Color Palette (2-3 core colors)</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> Basic Color Palette</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""><strong>Timeline:</strong> 5-7 working days</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> <strong>Revision:</strong> 1round</div>
                        </div>
                    </div>

                    <div className="pl-RLaptopPadding">
                        <div className="  w-[120px] text-center text-RButtonText text-[12px] border-2 border-RPrimary text-white rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">GET IN TOUCH</div>
                    </div>

                </div>





                  {/* first Second */}
                <div className="flex flex-col h-full max-h-[605px]  w-full max-w-[420px] border-RPrimary border-2 pb-RLaptopPadding    rounded-RButton">
                    <div className="bg-RonPrimary rounded-t-RButton border-b-2 border-RPrimary flex flex-col text-RPrimary p-RLaptopPadding gap-4 hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out ">
                        <div className="text-RParagraph2 font-RMontserrat">Brand Kit</div>
                        <div className="text-RTitle text-[40px] sm:text-[50px] font-RMontserrat">₵1500</div>
                        <div className="text-RParagraph2 font-RMontserrat">Workmark Only</div>
                    </div>

                   <div className=" w-full h-full flex flex-col justify-center  pl-RLaptopPadding text-RParagraph2 font-RMontserrat  py-2 ">
                        <div className="flex gap-2  ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className="">Everything in Starter  +</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className="">Logo Variations (horizontal, vertical, icon mark)</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className="">Expanded color palette (Primary + Secondary)</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className="">Typography recommendations(2-3 fonts)</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""><strong>Revision:</strong> 10-14 working days</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""><strong>Revision:</strong> 2 round</div>
                        </div>
                    </div>


                    <div className="pl-RLaptopPadding">
                        <div className="  w-[120px] text-center text-RButtonText text-[12px] border-2 border-RPrimary text-RPrimary rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">GET IN TOUCH</div>
                    </div>
                </div>





                      {/* first 3rd */}
                <div className="flex flex-col h-full max-h-[605px] min-h-[500px]  w-full max-w-[420px] border-RPrimary border-2 pb-RLaptopPadding  rounded-RButton sm:col-span-2 sm:justify-self-center">
                    <div className="bg-RonPrimary border-b-2 border-RPrimary rounded-t-RButton flex flex-col  p-RLaptopPadding gap-4 hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">
                        <div className="text-RParagraph2 font-RMontserrat">Growth / Visual Identity</div>
                        <div className="text-RTitle text-[40px] sm:text-[50px] font-RMontserrat">₵3000</div>
                        <div className="text-RParagraph2 font-RMontserrat">Workmark Only</div>
                    </div>

                  <div className=" w-full h-full flex flex-col justify-center  pl-RLaptopPadding text-RParagraph2 font-RMontserrat  py-2 ">
                        <div className="flex gap-2  ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> Everything in BrandKit +</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> Brand Patter or graphic elements</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className="">Photography / Imagery style guide</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className="">Mockups (business card, packaging , singapore, etc)</div>
                        </div>

                       



                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> <strong>Timeline:</strong> 2-3 weeks</div>
                        </div>

                        <div className="flex gap-2 ">
                            <div className=""><i class="fa-solid fa-circle-check"></i></div>
                            <div className=""> <strong>Revision:</strong> 2-3 weeks</div>
                        </div>
                    </div>


                    <div className="pl-RLaptopPadding">
                        <div className="w-[120px] text-center text-RButtonText text-[12px] border-2 border-RPrimary text-RPrimary rounded-RButton p-2 font-RMontserrat hover:bg-RPrimary hover:text-RonPrimary transition-colors duration-300 ease-in-out">GET IN TOUCH</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PricingSection
