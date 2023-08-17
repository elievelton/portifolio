// next image
import Image from "next/image"
// next link
import Link from "next/link"
//icons
import { HiArrowRight } from "react-icons/hi2"

// ... (outras importações)

// ... (outras importações)

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 flex flex-row gap-x-4 " >  
      
      {/* Botão de download do CV */}
      <a 
        href="/path/to/your/cv-file.pdf" 
        download 
        className="px-4 py-2 border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 text-center rounded text-sm max-w-[141px] max-h-[48px] mt-20 mr-6 hover:text-accent"  
      >
        Download CV
      </a>

      {/* Botão original de projetos */}
      <Link href={'work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image 
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=''
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 hover:text-accent"/>
      </Link>

    </div>
  );
};

export default ProjectsBtn;


