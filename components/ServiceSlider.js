
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from 'react-icons/rx'; // Nota: rx é apenas um exemplo, o conjunto correto pode ser diferente.

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting visual identities that capture the essence and values of your brand, ensuring you stand out in the market.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Developing intuitive and visually appealing design solutions that enhance user experience and capture audience attention.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Utilizing cutting-edge technologies to create functional, efficient, and adaptable websites and applications tailored to your specific needs.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Producing authentic and engaging content that speaks directly to your target audience, establishing your brand as a trusted voice in the industry.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizing your website to ensure it achieves the highest rankings on search engines, boosting your visibility and organic traffic.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15

    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,

    },
  }}
    freeMode={true}
    pagination={
      { clickacle: true }
    }
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'

  >{serviceData.map((item,index)=>{
    return <SwiperSlide key={index}>
      <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]'>
        {/*icons*/}
        <div className='text-4xl text-accent'>{item.icon}</div>
        {/*title and desc*/}
        <div className='mb-8'>
          <div className='mb-2 text-lg'>
            {item.title}
          </div>
          <p className='max-w-[350px] loading-normal'>
            {item.description}
          </p>
        </div>

        {/*arrow*/}
        <div className='text-3xl'><RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/></div>
      </div>
    </SwiperSlide>
  })}</Swiper>;
};

export default ServiceSlider;
