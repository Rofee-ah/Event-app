import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// import image from '../assets/events.jpeg';
// import { IoLocationSharp } from 'react-icons/io5';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Dj = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEvent = () => {
    axios.get('http://localhost:8080/post/dj').then((res) => {
      setEvent(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
    <h3 className=' font-semibold'>DJ Service</h3>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <div className='hidden tablet:flex gap-10 mx-auto'>
            {event.length > 0 && (
              <div className='grid grid-cols-4 gap-8'>
                {event.map((item) => (
                  <div className='flex flex-col gap-1 mt-3 ' key={item._id}>
                    <img
                      src={item.image}
                      alt=''
                      className='rounded-md w-96 h-56 object-cover'
                    />
                    <h3 className='text-lg font-semibold'>{item.djName}</h3>
                    <p className='flex items-center gap-1'>
                      {' '}
                       {item.description}{' '}
                    </p>
                    <p>Entry: ${item.price} </p>
                    <p>Time: {item.time} </p>

                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='block tablet:hidden '>
            {event.length > 0 && (
              <div className=''>
                {event.map((item) => (
                  <div className=' gap-1 mt-3 ' key={item._id}>
                    <img
                      src={item.image}
                      alt=''
                      className='rounded-md w-full h-36 object-cover'
                    />

                    <div className='flex justify-between'>
                      <h3 className='text-lg font-semibold'>
                        {item.djName}
                      </h3>
                      <p>Entry: ${item.price} </p>
                      <p>Time: {item.time} </p>

                    </div>
                    <p className='flex items-center gap-1'>
                      {item.description}{' '}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Dj;

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
