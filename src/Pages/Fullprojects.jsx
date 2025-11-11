import React from 'react'

const Fullprojects = () => {



  const Details = [
         {
            ProjectName : "Modern Serenity - Interior Visualization",
            Owners: "Multiple Owners",
            Type:"Interior Visualization",
            Spaces: "Family Lounge | Dining | Kitchen ",
            Tools : "Interior Visualization",
            ProjectDescription:"A modern apartment visualization blending Scandinavian minimalism with warm, natural textures. The space seamlessly integrates the family lounge, dining, and kitchen areas, using a soft neutral palette of whites, beige, and wood tones, accented by matte black details and subtle greenery. Sculptural lighting, curved furniture, and clean lines create a serene yet functional atmosphere, perfect for modern living. The overall vibe is calm, elegant, and inviting — designed for both comfort and visual harmony."
         },



         [
            "/ProjectMain/G-Bequest/Bquest1.png",
            "/ProjectMain/G-Bequest/Bquest2.png",
            "/ProjectMain/G-Bequest/Bquest3.png",
            "/ProjectMain/G-Bequest/Bquest4.png",
            "/ProjectMain/G-Bequest/Bquest5.png",
            "/ProjectMain/G-Bequest/Bquest6.png",
            "/ProjectMain/G-Bequest/Bquest7.png",
            "/ProjectMain/G-Bequest/Bquest8.png",
            "/ProjectMain/G-Bequest/Bquest9.png",
            "/ProjectMain/G-Bequest/Bquest10.png",

         ]
         

  ]



    return (
        <div className=' px-[20px] md:px-[40px] lg:px-[80px]  border-t-4 border-RonPrimary  pb-16  space-y-8 flex flex-col text-RPrimary  w-full   mt-16 max-w-[1980px]  '>
            <div className="flex  gap-2  items-center mt-20">
                <div className=" w-20 h-20 rounded-full flex items-center justify-center bg-[#CECECE]"><img src="/Background.png" className='object-contain w-16 h-16' /></div>
                <div className="flex flex-col">
                    <div className="">{Details[0].ProjectName}</div>
                    <div className="">{Details[0].Owners}</div>
                </div>
            </div>

            <div className=" mt-16 w-full flex items-center justify-center border-2 border-black">
                <div className=" flex  flex-col gap-1  w-full max-w-[1000px] text-RTitle font-RMontserrat xl:leading-[60px]">
                    <div className="">{Details[0].ProjectName}</div>
                    <div className="">Type: <span className='text-[#599AFD]'>{Details[0].Type}</span></div>
                    <div className="">Spaces: <span className='text-[#599AFD]'>{Details[0].Spaces} </span></div>
                    <div className="">Tools: <span className='text-[#599AFD]'>{Details[0].Tools}</span></div>
                </div>

            </div>

            <div className=" w-full flex items-center justify-center ">
                <div className=" w-full max-w-[1000px] text-RTitle font-RMontserrat leading-[40px] xl:leading-[60px]">
                  {Details[0].ProjectDescription}
                </div>
            </div>


            <div className=" w-full flex flex-col  items-center justify-center">
    

                    <ul className="flex flex-col gap-11 items-center justify-center w-full max-w-[1980px]">
                {Details[1].length > 0 ? (
                    Details[1].map((Detail) => (
                        <li className="list-none ">
                            
                                <div className=" w-full flex items-center justify-center ">
                                    <img
                                        src={Detail}
                                        alt="Image card goes here"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                          

                                
                            
                        </li>
                    ))
                ) : (
                    <p>No Project Currently available for this section</p>
                )}

            </ul>
                </div>
            </div>
        
    )
}

export default Fullprojects
