import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from '../assets/ven3.jpeg';
import { IoLocationSharp } from 'react-icons/io5';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const DiscoverVenue = () => {
  const [venue, setVenue] = useState([]);
  const [loading, setLoading] = useState(true);
  const getVenue = () => {
    axios.get('http://localhost:8080/discover/venue').then((res) => {
      setVenue(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getVenue();
  }, []);
  return (
    <>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <div className='hidden tablet:flex gap-10 mx-auto'>
            {venue.length > 0 && (
              <div className='grid grid-cols-3 gap-8'>
                {venue.map((item) => (
                  <div className='flex flex-col gap-1 mt-3 ' key={item._id}>
                    <img
                      src={image}
                      alt=''
                      className='rounded-md w-96 h-56 object-cover'
                    />
                    <h3 className='text-lg font-semibold'>{item.venueName}</h3>
                    <p className='flex items-center gap-1'>
                      {' '}
                      <IoLocationSharp color='red' /> {item.location}{' '}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Swiper slidesPerView={2.5} spaceBetween={10}  className='block tablet:hidden '>
            {venue.length > 0 && (
              <div className='flex gap-4'>
                {venue.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className='flex flex-col gap-1 mt-3' key={item._id}>
                      <img
                        src={image}
                        alt=''
                        className='rounded-md w-36 h-36 object-cover'
                      />
                      <h3 className='text-lg font-semibold'>
                        {item.venueName}
                      </h3>
                      <p className='flex items-center gap-1'>
                        {' '}
                        <IoLocationSharp color='red' /> {item.location}{' '}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            )}
          </Swiper>
        </>
      )}
    </>
  );
};

export default DiscoverVenue;
