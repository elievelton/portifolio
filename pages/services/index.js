
// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Head from 'next/head';

// framer motion

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Services = () => {
  return (
    <>
    <Head>
    <title>My Services-Elievelton - Questions? Contact Me!</title>
    <meta name="description" content="My mission is to provide holistic digital solutions that drive your business growth and success" />
    <meta name="keywords" content="Elievelton, My Services, Services" />
        <link rel="canonical" href="https://elievelton.dev/" />
        <link rel="alternate" hreflang="en-US" href="https://elievelton.dev/" />
  </Head>
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8 '>
        {/*text*/}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My services <span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          As a dedicated and passionate developer, I offer a comprehensive suite of services to help transform your vision into digital reality. My portfolio includes:
      
          </motion.p>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          My mission is to provide holistic digital solutions that drive your business growth and success. Let's work together and turn your ideas into impressive achievements!
          </motion.p>
        </div>
        {/*slider*/}
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className='h-full xl:max-w-[65%] '>

        <ServiceSlider/>
        </motion.div>

      </div>
    </div>
    <Bulb />
  </div>
  </>
  )
};

export default Services;
