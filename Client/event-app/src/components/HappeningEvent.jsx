import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from '../assets/ven 7.jpeg';
import { IoLocationSharp } from "react-icons/io5";



const HappeningEvent = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEvent = () => {
    axios.get('http://localhost:8080/happening/event').then((res) => {
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
          {event.length > 0 && (
            <div className=' w-full'>
              {event.map((item) => (
                <div key={item._id}>
                  <img
                    className='rounded-lg overflow-hidden shadow-lg w-[500px] tablet:w-[1000px] mx-auto tablet:h-72 h-48  mt-3 object-cover'
                    src={image}
                    alt=''
                  />
                    <h2 className='hidden tablet:flex tablet:text-3xl mt-2 justify-center'>{item.eventName}</h2>
                  <div className=' items-center flex tablet:hidden  justify-between mt-3'>
                    <div className='mb-2 flex flex-col'>
                      <h3 className=' font-semibold  text-lg'>
                      {item.eventName}
                      </h3>
                      <p className='flex items-center gap-1 '> <IoLocationSharp color='red' /> {item.location} </p>
                    </div>
                    <div className='flex flex-col items-end'>
                    <p className='text-gray-700 text-base'>
                      Entry:$50
                    </p>
                    <p className='text-gray-700 text-base '>Time:18:00 - 22:00</p>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HappeningEvent;
