import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma,FaPython, FaNodeJs } from 'react-icons/fa';
import React, { useState } from 'react';
import Head from 'next/head';

//  data
const aboutData = [

  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
          FaPython,
          FaNodeJs,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];
// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0)

  console.log(index)
  return (
    <>
      <Head>
        <title>About-Elievelton - Skill, Awards, Experience, credentials</title>
        <meta name="description" content="In a world shaped by zeros and ones, creativity is the true superpower" />
        <meta name="keywords" content="Elievelton, developer, programmer, Dev, Skill, Awards, Experience, credentials" />
        <link rel="canonical" href="https://elievelton.dev/" />
        <link rel="alternate" hreflang="en-US" href="https://elievelton.dev/" />
      </Head>
      <div className='h-full bg-primary/30 py-32 text-center xl:text-left relative'> {/* Aqui adicionamos 'relative' */}
        <Circles />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute bottom-[-100px] -left-[230px]'
          style={{ zIndex: 1 }} // menor zIndex
        >
          <Avatar />
        </motion.div>
        <div
          className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '

        >
          {/*Text*/}
          <div className='flex-1 flex flex-col justify-center' style={{ zIndex: 2 }} // zIndex menor sempre fica sobreposto do maior
          >
            <motion.h2 variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden' className='h2'>
              {/*Em um mundo moldado por zeros e uns, a criatividade é o verdadeiro superpoder*/}
              In a world shaped by zeros and ones, <span className='text-accent'>creativity</span> is the true superpower


            </motion.h2>
            <motion.p variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              {/* 
                Com paixão por solucionar problemas e um apreço inabalável pela tecnologia, estou aqui para fazer a diferença. Cada projeto que realizo é uma manifestação da minha dedicação e compromisso com a excelência. Para mim, a programação não é apenas uma habilidade, é uma vocação.

                Estou sempre à procura de oportunidades para colaborar, inovar e aprender. Se você está buscando alguém que traga entusiasmo, conhecimento técnico e uma vontade incessante de superar desafios, estou à disposição!

                Vamos transformar ideias em realidade juntos?
                */}
              With a passion for problem-solving and an unwavering appreciation for technology, I am here to make a difference. Every project I undertake is a testament to my dedication and commitment to excellence. For me, programming is not just a skill, It&apos;s a calling.

              I am always on the lookout for opportunities to collaborate, innovate, and learn. If You&apos;re seeking someone who brings enthusiasm, technical know-how, and an unyielding drive to overcome challenges, Im at your service!

              Shall we turn ideas into reality together?
            </motion.p>
            {/*counters*/}
            <motion.div variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden' className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='flex flex-1 gap-x-6'>
                {/*experience*/}
                <div className=' relative flex-1 after-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={2} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
                </div>
                {/*clients*/}
                <div className=' relative flex-1 after-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
                </div>
                {/*projects*/}
                <div className=' relative flex-1 after-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={12} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
                </div>
                {/*awards*/}
                <div className=' relative flex-1 '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={5} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
            <div className=' flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (<div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)} >{item.title}</div>
                )
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => {
                return <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/*title*/}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  {/*icon*/}
                  <div className='flex gap-x-4'>
                    {item.icons && item.icons.map((IconComponent, iconIndex) => {
                      return <IconComponent key={iconIndex} className='text-2xl text-white/100' />;
                    })}

                  </div>
                </div>
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default About;
