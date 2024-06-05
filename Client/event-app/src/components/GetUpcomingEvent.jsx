import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import image from '../assets/events.jpeg';
import { IoLocationSharp } from 'react-icons/io5';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const GetUpcomingEvent = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEvent = () => {
    axios.get('http://localhost:8080/upcoming/event').then((res) => {
      setEvent(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <div className='hidden tablet:flex gap-10 mx-auto'>

            {event.length > 0 && (
              <div className='grid grid-cols-3 gap-8'>
                {event.map((item) => (
            
                    <div className='flex flex-col gap-1 mt-3 ' key={item._id}>
                      <img
                        src={image}
                        alt=''
                        className='rounded-md w-96 h-56 object-cover'
                      />
                      <h3 className='text-lg font-semibold'>
                        {item.eventName}
                      </h3>
                      <p className='flex items-center gap-1'>
                        {' '}
                        <IoLocationSharp color='red' /> {item.location}{' '}
                      </p>
                      <p>Entry: ${item.price} </p>
                    </div>
                
                ))}
              </div>
            )}
          </div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            className='block tablet:hidden '>
            {event.length > 0 && (
              <div className='flex gap-4'>
                {event.map((item) => (
                  <SwiperSlide key={item._id} > 
                    <div className='flex flex-col gap-1 mt-3 ' key={item._id}>
                      <img
                        src={image}
                        alt=''
                        className='rounded-md w-36 h-36 object-cover'
                      />
                      <h3 className='text-lg font-semibold'>
                        {item.eventName}
                      </h3>
                      <p className='flex items-center gap-1'>
                        {' '}
                        <IoLocationSharp color='red' /> {item.location}{' '}
                      </p>
                      <p>Entry: ${item.price} </p>
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

export default GetUpcomingEvent;

// {event.length > 0 && (
//   <div className='flex flex-wrap'>
//   {event.slice(-3).map((item) => (
//     <div className=' sm:w-12/12 md:w-6/12 lg:w-4/12' key={item._id}>
//       <div className=' rounded overflow-hidden shadow-lg'>
//         <img className='w-full' src={image} alt='' />
//         <div className='px-6 py-4'>
//           <div className='font-bold text-xl mb-2'>
//             {' '}
//             {item.eventName}
//           </div>
//           <p className='text-gray-700 text-base'>Price: {item.price}</p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
// )}