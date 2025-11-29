import React from 'react'

const Admin = () => {
  return (
    <div className="space-y-8 px-[8px]  md:px-[40px] lg:px-[80px] w-full max-w-[1980px]"> 
     
      <div className=" w-full  gap-8 mt-16 flex flex-col md:flex-row items-center md:gap-24">

      <div className=" w-full  h-full  flex items-center justify-center  rounded-[20px] px-4 pt-4 bg-[#EAEAEA]">
        
        <div className=" w-full h-full ">
          <div className=" text-RTitle font-RMontserrat">Hello Raze!</div>
          <div className="text-RParagraph1 font-medium font-RMontserrat">It's good to see you</div>
        </div>
 
       
          <div className="w-full flex items-center justify-end h-full    max-w-[237px]"><img src="/Background.png" className='object-cover  h-full w-full '/></div>
        
      </div>



      




     <div className=" flex flex-col   w-full h-full md:max-w-[470px] gap-8 ">

       <div className=" w-full order-2 md:order-1 flex items-center justify-center gap-4">
              <div className=" w-full bg-[#EAEAEA]  p-2 rounded-[20px]"> <i class="fa-solid fa-magnifying-glass"></i></div>
              <div className=" flex items-center justify-center w-12 h-12 "><i class="fa-regular text-2xl fa-bell"></i></div>
              <div className="w-12 h-12  items-center justify-center hidden sm:flex "><img src="/Background.png" /></div>
          
       </div>





        <div className=" w-full order-1 md:order-2 flex gap-4  items-center justify-center ">
          <div className=" w-full h-full  flex items-center gap-3 bg-[#EAEAEA] rounded-[10px] font-RMontserrat p-5">
            <div className="w-full text-RTitle font-black text-[40px]">$9</div>
            <div className="w-full text-RParagraph1">
            <div className="">Estimated </div>
            <div className="">revenue</div>
            </div>
          </div>
          
           <div className=" w-full h-full  flex items-center gap-3 bg-[#EAEAEA] rounded-[10px] font-RMontserrat p-5">
            <div className="w-full text-RTitle font-black text-[40px]">11</div>
            <div className="w-full text-RParagraph1">
            <div className="">Jobs </div>
            <div className="">Accepted</div>
            </div>
          </div>


        </div>

        </div>


      </div>


    

   <div className=" flex  mt-10 w-full md:gap-24 ">
    <div className=" flex flex-col  mt-10 w-full ">
        <div className="flex  flex-col gap-3 w-full max-w-[470px]">
          <div className=" text-RHeader4">Jobs</div>
          <div className=" flex w-full items-center justify-between">
           <div className=" text-RParagraph2 font-RMontserrat font-semibold">All Jobs</div>
           <div className="text-RParagraph2 font-RMontserrat opacity-50">3D Modelling</div>
           <div className=" text-RParagraph2 font-RMontserrat opacity-50">Brand Design</div>
           <div className=" text-RParagraph2 font-RMontserrat opacity-50">Social Media</div>
          </div>
        </div>

       <div className="flex flex-col space-y-4 ">
           <div className=" bg-[#EAEAEA] p-4 flex flex-col items-center justify-between gap-2 ">

            <div className="w-full  bg-[#EAEAEA]  flex items-center justify-between gap-2">
              <div className="h-[70px] w-[70px]  flex items-center justify-center text-RHeader4 font-RMontserrat bg-white"></div>



               {/* only visible in md and above */}
                 <div className="hidden md:flex w-full max-w-[700px]  items-center gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full  leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat    w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full  flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>

              <div className=" flex items-center justify-center rounded-[10px] w-full py-3 text-RonPrimary font-RMontserrat bg-RPrimary max-w-[234px] ">Client Details</div>
            </div>
          

          {/* only visible when in mobile */}
                 <div className="md:hidden flex w-full items-center justify-between gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat  max-w-[70px]  w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full max-w-[70px] flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>
              

           </div>










           <div className=" bg-[#EAEAEA] p-4 flex flex-col items-center justify-between gap-2 ">

            <div className="w-full  bg-[#EAEAEA]  flex items-center justify-between gap-2">
              <div className="h-[70px] w-[70px]  flex items-center justify-center text-RHeader4 font-RMontserrat bg-white"></div>



               {/* only visible in md and above */}
                 <div className="hidden md:flex w-full max-w-[700px]  items-center gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full  leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat    w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full  flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>

              <div className=" flex items-center justify-center rounded-[10px] w-full py-3 text-RonPrimary font-RMontserrat bg-RPrimary max-w-[234px] ">Client Details</div>
            </div>
          

          {/* only visible when in mobile */}
                 <div className="md:hidden flex w-full items-center justify-between gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat  max-w-[70px]  w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full max-w-[70px] flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>
              

           </div>













                     <div className=" bg-[#EAEAEA] p-4 flex flex-col items-center justify-between gap-2 ">

            <div className="w-full  bg-[#EAEAEA]  flex items-center justify-between gap-2">
              <div className="h-[70px] w-[70px]  flex items-center justify-center text-RHeader4 font-RMontserrat bg-white"></div>



               {/* only visible in md and above */}
                 <div className="hidden md:flex w-full max-w-[700px]  items-center gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full  leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat    w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full  flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>

              <div className=" flex items-center justify-center rounded-[10px] w-full py-3 text-RonPrimary font-RMontserrat bg-RPrimary max-w-[234px] ">Client Details</div>
            </div>
          

          {/* only visible when in mobile */}
                 <div className="md:hidden flex w-full items-center justify-between gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat  max-w-[70px]  w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full max-w-[70px] flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>
              

           </div>














              <div className=" bg-[#EAEAEA] p-4 flex flex-col items-center justify-between gap-2 ">

            <div className="w-full  bg-[#EAEAEA]  flex items-center justify-between gap-2">
              <div className="h-[70px] w-[70px]  flex items-center justify-center text-RHeader4 font-RMontserrat bg-white"></div>



               {/* only visible in md and above */}
                 <div className="hidden md:flex w-full max-w-[700px]  items-center gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full  leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat    w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full  flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>

              <div className=" flex items-center justify-center rounded-[10px] w-full py-3 text-RonPrimary font-RMontserrat bg-RPrimary max-w-[234px] ">Client Details</div>
            </div>
          

          {/* only visible when in mobile */}
                 <div className="md:hidden flex w-full items-center justify-between gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat  max-w-[70px]  w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full max-w-[70px] flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>
              

           </div>





           <div className=" bg-[#EAEAEA] p-4 flex flex-col items-center justify-between gap-2 ">

            <div className="w-full  bg-[#EAEAEA]  flex items-center justify-between gap-2">
              <div className="h-[70px] w-[70px]  flex items-center justify-center text-RHeader4 font-RMontserrat bg-white"></div>



               {/* only visible in md and above */}
                 <div className="hidden md:flex w-full max-w-[700px]  items-center gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full  leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat    w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full  flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>

              <div className=" flex items-center justify-center rounded-[10px] w-full py-3 text-RonPrimary font-RMontserrat bg-RPrimary max-w-[234px] ">Client Details</div>
            </div>
          

          {/* only visible when in mobile */}
                 <div className="md:hidden flex w-full items-center justify-between gap-2 ">
                     <div className="text-RParagraph2 font-RMontserrat w-full leading-6 ">
                        <div className="font-semibold ">3D Modeling</div>
                        <div className="font-normal">David Chukwurah buchi</div>
                     </div>

                    <div className="text-RTitle font-RMontserrat  max-w-[70px]  w-full "><strong>$</strong>900</div>
                   
                    <div className="text-RTitle font-RMontserrat w-full max-w-[70px] flex items-center gap-3 ">
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                       <div className=""><i class="fa-solid fa-circle-check"></i></div>
                    </div>

                 </div>
              

           </div>



       </div>


      </div>







        <div className="hidden lg:flex flex-col  rounded-[20px] w-full md:max-w-[470px] ">
         

         <div className="w-full   flex items-center justify-center bg-[#EAEAEA]  rounded-[20px] p-4">
          <div className=" w-full flex flex-col  gap-2 font-RMontserrat ">
            <div className="text-RParagraph1 text-[20px] font-bold">Learn even more</div>
            <div className="text-RParagraph1 text-[14px]">Unlock premium features only for $9.99 per month</div>
            <button className="flex items-center justify-center rounded-[10px] w-full p-3 text-RonPrimary font-RMontserrat bg-RPrimary max-w-[130px]">Go Premium</button>
          </div>
          <div className="w-full flex items-center justify-center"><img src="/Logo.svg" className='w-[102px] h-[102px]'/></div>
 
         </div>
         

         
        </div>
     
     </div>



    </div>
  )
}

export default Admin