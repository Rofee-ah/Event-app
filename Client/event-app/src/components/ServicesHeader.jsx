import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import { Link } from 'react-router-dom';

const ServicesHeader = () => {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        className='hidden tablet:flex gap-5 mx-auto '>
        <div className='flex flex-row gap-2'>
          <SwiperSlide>
            <Link to={'/services/entertainment/all'}>
              <button className=' bg-slate-200 p-2 w-32 rounded'>ALL</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/catering'}>
              <button className=' bg-slate-200 p-2 w-32 rounded'>
                Catering
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/mc'}>
              <button className=' bg-slate-200 p-2 w-32 rounded'>MC</button>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={'/services/entertainment/dj'}>
              <button className=' bg-slate-200 p-2 w-32 rounded'>DJ</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/dancer'}>
              <button className=' bg-slate-200 p-2 w-32 rounded'>Dancer</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/comedian'}>
              <button className=' bg-slate-200 p-2 w-32 rounded'>
                Comedian
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/music'}>
              <button className=' bg-slate-200 p-2 w-32 rounded'>Music</button>
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        className='block tablet:hidden '>
        <div className='flex flex-row gap-2'>
          <SwiperSlide>
            <Link to={'/services/entertainment/all'}>
              <button className=' bg-slate-200 p-2 w-28 rounded'>ALL</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/catering'}>
              <button className=' bg-slate-200 p-2 w-28 rounded'>
                Catering
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/mc'}>
              <button className=' bg-slate-200 p-2 w-28 rounded'>MC</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/DJ'}>
              <button className=' bg-slate-200 p-2 w-28 rounded'>DJ</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/dancer'}>
              <button className=' bg-slate-200 p-2 w-28 rounded'>Dancer</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/comedian'}>
              <button className=' bg-slate-200 p-2 w-28 rounded'>
                Comedian
              </button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/services/entertainment/music'}>
              <button className=' bg-slate-200 p-2 w-28 rounded'>Music</button>
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default ServicesHeader;
