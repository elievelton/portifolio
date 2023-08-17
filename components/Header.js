// next image
import Image from 'next/image';
//next link
import Link from 'next/link';
// next components
import Socials from '../components/Socials';

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">

    <div className=' container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
        {/*Logo*/}
        <Link href={'/'}>
          <Image src={'/logoEli2.png'} width={220} height={48} alt='' priority={true} />
        </Link>

        {/*Social*/}
        <Socials/>

      </div>
    </div>

  </header>;
};

export default Header;
