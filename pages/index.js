// next image
import Image from "next/image"
import Head from 'next/head';

import { useEffect, useState } from 'react';
import { incrementVisitCount } from '../lib/visits';

// components

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// framer motion

import { motion } from 'framer-motion'

// variante
import { fadeIn } from '../variants';


const Home = () => {

  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    async function handleVisit() {
      try {
        // Incrementa a contagem de visitas
        const newCount = await incrementVisitCount();
        setVisitCount(newCount);
      } catch (error) {
        console.error("Error incrementing visit count:", error);
      }
    }
    
    handleVisit();
  }, []);
  

  return (
            <>
            {/*config SEO*/}
      <Head>
        <title>Elievelton-Developer - Transforming Ideas into Digital Reality </title>
        <meta name="description" content="Hello! I am Elievelton, graduated in Information Systems from the Federal University of Piauí (UFPI) in April 2022" />
        <meta name="keywords" content="Elievelton, Portfolio, Desenvolvedor, UFPI, Sistemas de Informação, programador, developer, programmer, Dev" />
        <link rel="canonical" href="https://elievelton.dev/" />
        <link rel="alternate" hreflang="en-US" href="https://elievelton.dev/" />
      </Head>

      <div className="bg-primary/60 h-full">
        {/*text*/}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
          <div className="text-center flex flex-col justify-center p-4 xl:pt-40 xl:text-left h-full container mx-auto">
            {/*titulo*/}
            <motion.h2 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span> </motion.h2>
            {/*Subtitulo*/}
            <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">

              Hello! I am Elievelton, graduated in Information Systems from the Federal University of Piauí (UFPI) in April 2022. Throughout my academic and professional journey, I have honed expertise in several cutting-edge languages and technologies, positioning myself uniquely in the IT market.

              Welcome to my portfolio, and I invite you to explore more about the projects I am proud to have been a part of!

            </motion.p>
            {/*btn*/}
            <div className="flex justify-center xl:hidden relative z-10">
              <ProjectsBtn />
            </div>
            <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex z-10">
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>


        {/*img*/}
        <div className=" w-[1200px] h-full absolute right-8 bottom-0" >
          {/*bg img*/}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 ">

          </div>
          {/*particles*/}
          <div><ParticlesContainer /></div>
          {/*Avatar img*/}
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: 'easeInOut' }} className="w-full h-full max-w-[600px] max-h-[889px] absolute -bottom-32 lg:bottom-0 lg:right-[5%] " ><Avatar /></motion.div>
        </div>
        <div className="">
        {visitCount !== null ? `Total Visits: ${visitCount}` : 'Loading visits...'}
      </div>
      </div>;
      </>
      );
  
};


      export default Home;
