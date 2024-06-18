// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../assets/events.jpeg';
import { IoLocationSharp } from 'react-icons/io5';

import 'swiper/css';
import 'swiper/css/pagination';

const AllEvent = () => {
  const navigate = useNavigate();
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

  const goToEvent = (eventId) => {
    navigate(`/event/${eventId}`, { state: { id: eventId } });
  };

  return (
    <>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <p className='text-lg mt-5'>All Events</p>
          <div className='flex flex-wrap gap-10 mb-5 mt-4'>
            {event.length > 0 &&
              event.map((item) => (
                <div
                  key={item._id}
                  className='individual'
                  onClick={() => goToEvent(item._id)}
                >
                  <div className='flex flex-col gap-1'>
                    <img
                      src={image}
                      alt={item.eventName}
                      className='rounded-md w-100 h-56 object-cover'
                    />
                    <h3 className='text-lg font-semibold'>{item.eventName}</h3>
                    <p className='flex items-center gap-1'>
                      <IoLocationSharp color='red' /> {item.location}
                    </p>
                    <p>Entry: ${item.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllEvent;
