//links
import Link from 'next/link';

//incons
import { RiYoutubeLine, RiInstagramLine, RiLinkedinLine, RiFacebookBoxLine, RiTiktokLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiFacebookBoxLine />
      </Link>
      <Link href={''} className=' hover:text-accent transition-all duration-300'>
        <RiTiktokLine />
      </Link>
    </div>

  );
};

export default Socials;
