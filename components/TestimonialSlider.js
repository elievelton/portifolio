// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// next image
import Image from 'next/image';

// import required modules
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';



const TestimonialSlide = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}  // Correção aqui
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialData.map((person, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div>
            {/*Avatar, name, position*/}
            <div>
              <div>
                {/*Avatar*/}
                <div>avatar</div>
                {/*Name*/}
                <div>name</div>
                {/*position*/}
                <div>position</div>
              </div>
            </div>
            {/*quote message*/}
            <div>message</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlide;
