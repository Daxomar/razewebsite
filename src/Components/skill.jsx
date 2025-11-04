import React from 'react'

const Skill = ({skill}) => {
   
  return (
         <div className="flex flex-col justify-center items-center gap-4 h-full   ">
                        <div className="flex flex-col gap-2 w-full  h-[294px] mb-9">
                            <div className="text-RParagraph2 font-RMontserrat">{skill.description}</div>
                            <div className="flex flex-col justify-center w-full h-full ">
                                <div className="text-RParagraph1 font-RMontserrat border-b-4 text-center border-RonPrimary w-[80px] ">See More</div>
                            </div>
                        </div>


                        <div className="flex flex-col w-full  h-full  max-w-[400px] max-h-[400px] sm:max-w-[450px] sm:min-h-[400px] lg:min-h-[450px]  lg:max-h-[900px] ">
                            <div className="border-2 h-full border-RPrimary rounded-RSkill flex flex-col justify-between px-4 py-24">
                                <div className="flex justify-start items-start ">
                                    <div className=" flex justify-center items-center w-[45px] h-[45px] border-2 rounded-full bg-RonPrimary ">
                                        <img src="/Arrow.svg" />
                                    </div>
                                </div>
                                {/* <div className="flex flex-col">
                                    <div className="">{skill.number}</div>
                                    <div className=" text-RTitle font-RMontserrat">{skill.skilltop}<br />{skill.skillbottom}</div>
                                </div> */}

                                 <div className="flex flex-col">
                                    <div className="">{skill.number}</div>
                                    <div className=" text-RTitle font-RMontserrat">{skill.skilltop}<br />{skill.skillbottom}</div>
                                </div>
                            </div>
                        </div>



                        

                    </div>

  )
}

export default Skill