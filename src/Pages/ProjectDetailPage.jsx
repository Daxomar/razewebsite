import React from 'react'
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: "1",
    ProjectName: "Modern Serenity - Interior Visualization",
    Owners: "Multiple Owners",
    Type: "Interior Visualization",
    Spaces: "Family Lounge | Dining | Kitchen",
    Tools: "Interior Visualization",
    ProjectDescription:
      "A modern apartment visualization blending Scandinavian minimalism with warm, natural textures. The space seamlessly integrates the family lounge, dining, and kitchen areas, using a soft neutral palette of whites, beige, and wood tones, accented by matte black details and subtle greenery. Sculptural lighting, curved furniture, and clean lines create a serene yet functional atmosphere, perfect for modern living.",
    images: [
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
    ],
  },


  {
    id: "2",
    ProjectName: "Modern Serenity - Interior Visualization",
    Owners: "Multiple Owners",
    Type: "Interior Visualization",
    Spaces: "Family Lounge | Dining | Kitchen",
    Tools: "Interior Visualization",
    ProjectDescription:
      "A modern apartment visualization blending Scandinavian minimalism with warm, natural textures. The space seamlessly integrates the family lounge, dining, and kitchen areas, using a soft neutral palette of whites, beige, and wood tones, accented by matte black details and subtle greenery. Sculptural lighting, curved furniture, and clean lines create a serene yet functional atmosphere, perfect for modern living.",
    images: [
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
    ],
  },




  {
    id: "3",
    ProjectName: "Modern Serenity - Interior Visualization",
    Owners: "Multiple Owners",
    Type: "Interior Visualization",
    Spaces: "Family Lounge | Dining | Kitchen",
    Tools: "Interior Visualization",
    ProjectDescription:
      "A modern apartment visualization blending Scandinavian minimalism with warm, natural textures. The space seamlessly integrates the family lounge, dining, and kitchen areas, using a soft neutral palette of whites, beige, and wood tones, accented by matte black details and subtle greenery. Sculptural lighting, curved furniture, and clean lines create a serene yet functional atmosphere, perfect for modern living.",
    images: [
      "/ProjectMain/Mer/Mer1.png",
      "/ProjectMain/Mer/Mer2.png",
      "/ProjectMain/Mer/Mer3.png",
      "/ProjectMain/Mer/Mer4.png",
      "/ProjectMain/Mer/Mer5.png",
      "/ProjectMain/Mer/Mer6.png",
      "/ProjectMain/Mer/Mer7.png",
      "/ProjectMain/Mer/Mer8.png",
      "/ProjectMain/Mer/Mer9.png",
      "/ProjectMain/Mer/Mer10.png",
      "/ProjectMain/Mer/Mer11.png",
      "/ProjectMain/Mer/Mer12.png",
      "/ProjectMain/Mer/Mer13.png",
      "/ProjectMain/Mer/Mer14.png",
      "/ProjectMain/Mer/Mer15.png",
      "/ProjectMain/Mer/Mer16.png",
      "/ProjectMain/Mer/Mer17.png",
      "/ProjectMain/Mer/Mer18.png",
      "/ProjectMain/Mer/Mer19.png",
      "/ProjectMain/Mer/Mer20.png",
      "/ProjectMain/Mer/Mer21.png",
    ],
  },



  {
    id: "4",
    ProjectName: "This right here is Project 4, when this shows, it means it works",
    Owners: "Multiple Owners",
    Type: "Interior Visualization",
    Spaces: "Family Lounge | Dining | Kitchen",
    Tools: "Interior Visualization",
    ProjectDescription:
      "A modern apartment visualization blending Scandinavian minimalism with warm, natural textures. The space seamlessly integrates the family lounge, dining, and kitchen areas, using a soft neutral palette of whites, beige, and wood tones, accented by matte black details and subtle greenery. Sculptural lighting, curved furniture, and clean lines create a serene yet functional atmosphere, perfect for modern living.",
    images: [
      "/ProjectMain/Allure/Allure1.png",
      "/ProjectMain/Allure/Allure2.png",
      "/ProjectMain/Allure/Allure3.png",
      "/ProjectMain/Allure/Allure4.png",
      "/ProjectMain/Allure/Allure5.png",
      "/ProjectMain/Allure/Allure6.png",
    ],
  },




  {
    id: "5",
    ProjectName: "Modern Serenity - Interior Visualization",
    Owners: "Multiple Owners",
    Type: "Interior Visualization",
    Spaces: "Family Lounge | Dining | Kitchen",
    Tools: "Interior Visualization",
    ProjectDescription:
      "A modern apartment visualization blending Scandinavian minimalism with warm, natural textures. The space seamlessly integrates the family lounge, dining, and kitchen areas, using a soft neutral palette of whites, beige, and wood tones, accented by matte black details and subtle greenery. Sculptural lighting, curved furniture, and clean lines create a serene yet functional atmosphere, perfect for modern living.",
    images: [
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
    ],
  },



  {
    id: "6",
    ProjectName: "Modern Serenity - Interior Visualization",
    Owners: "Multiple Owners",
    Type: "Interior Visualization",
    Spaces: "Family Lounge | Dining | Kitchen",
    Tools: "Interior Visualization",
    ProjectDescription:
      "A modern apartment visualization blending Scandinavian minimalism with warm, natural textures. The space seamlessly integrates the family lounge, dining, and kitchen areas, using a soft neutral palette of whites, beige, and wood tones, accented by matte black details and subtle greenery. Sculptural lighting, curved furniture, and clean lines create a serene yet functional atmosphere, perfect for modern living.",
    images:[
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

         ],
  },
];






const ProjectDetailPage = () => {

   const { id } = useParams() // grabs ID from the route, e.g. /projects/1
   const project = projects.find((p) => p.id === id);
   console.log("This right here are the projects too", project)


    if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-600">
        Project not found.
      </div>
    );
  }

  return (
    <div className=' px-[20px] md:px-[40px] lg:px-[80px]  border-t-4 border-RonPrimary pb-16  space-y-8 flex flex-col text-RPrimary  w-full   mt-16 max-w-[1980px]  '>
            <div className="flex  gap-2  items-center mt-20">
                <div className=" w-20 h-20 rounded-full flex items-center justify-center bg-[#CECECE]"><img src="/Background.png" className='object-contain w-16 h-16' /></div>
                <div className="flex flex-col">
                    <div className="">{project.ProjectName}</div>
                    <div className="">{project.Owners}</div>
                </div>
            </div>


            <div className=" mt-16 w-full flex items-center justify-center ">
                <div className=" flex  flex-col gap-1  w-full max-w-[1000px] text-RTitle font-RMontserrat xl:leading-[60px]">
                    <div className="">{project.ProjectName}</div>
                    <div className="">Type: <span className='text-[#599AFD]'>{project.Type}</span></div>
                    <div className="">Spaces: <span className='text-[#599AFD]'>{project.Spaces} </span></div>
                    <div className="">Tools: <span className='text-[#599AFD]'>{project.Tools}</span></div>
                </div>

            </div>

            <div className=" w-full flex items-center justify-center ">
                <div className=" w-full max-w-[1000px] text-RTitle font-RMontserrat leading-[40px] xl:leading-[60px]">
                  {project.ProjectDescription}
                </div>
            </div>


            <div className=" w-full flex flex-col  items-center justify-center ">
    

                    <ul className="flex flex-col gap-11 items-center justify-center w-full max-w-[1980px]">
                {project.images.length > 0 ? (
                    project.images.map((img, index) => (
                        <li key={index} className="list-none ">
                            
                                <div className=" w-full flex items-center justify-center ">
                                    <img
                                        src={img}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>                       
                        </li>
                    ))
                ) : (
                    <p>No Project images Currently available for this particular project here</p>
                )}

            </ul>
                </div>
            </div>
        
    )
  
}

export default ProjectDetailPage