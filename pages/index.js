// next image
 import Image from "next/image"

 // components

 import ParticlesContainer from '../components/ParticlesContainer'
 import ProjectsBtn from '../components/ProjectsBtn'
 import Avatar from '../components/Avatar'

 // framer motion

import {motion} from 'framer-motion'

// variante
import {fadeIn} from '../variants';
const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/*text*/}
    <div>
      <div>
        {/*titulo*/}
        <h1 className="h1">Transforming Ideas <br/> Into <span className="text-accent">Digital Reality</span> </h1>
        {/*Subtitulo*/}
        <p>Loren teste </p>
      </div>
    </div>


    {/*text*/}
    <div>image</div>

  </div>;
};

export default Home;
