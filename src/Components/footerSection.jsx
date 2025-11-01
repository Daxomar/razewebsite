import React from 'react'

const FooterSection = () => {
  return (
    <div className="w-full border-2 border-black mt-16 h-screen flex-col flex justify-center  ">
        <div className="flex justify-between  px-16 py-7 border-t-4 border-b-4 border-RonPrimary  ">
           <div className="border-2 border-black text-RHeader2 font-RMontserrat h-[373px]">Let's Connect<br/> There</div> 
           <div className="flex justify-center items-center border-RBorderDark text-RTitle border-RonPrimary hover:bg-RonPrimary hover:text-RPrimary rounded-RButton p-2 w-[313px]  h-[90px] font-RMontserrat transition-colors duration-300 ease-in-out">GET IN TOUCH</div>
        </div>


        <div className="flex pt-12 justify-between items-start border-2 border-green-200">
            <div className="flex flex-col gap-2 border-2 border-black w-[570px] flex-1">
                <div className=""><img src="/Logo.svg" className="block"/></div>
                <div className="text-RParagraph1 font-RMontserrat p">Lorem ipsum volutpat adipiscing urna morbi at venenatis proin aliquet penatibus orci aliquam suspendisse tincidunt morbi a aliquam pellentesque non</div>
            </div>

         

            <div className="flex gap-16 border-2 border-black">
             <div className="flex flex-col gap-2">
                <div className="text-RParagraph1 font-black font-RMontserrat">Address</div>
                <div className="text-RParagraph2 font-RMontserrat">Technology Park 7-12 Gumpang</div>
                <div className="">REcidanc 57292 Surakarta Indonesia</div>
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
    </div>
  )
}

export default FooterSection
