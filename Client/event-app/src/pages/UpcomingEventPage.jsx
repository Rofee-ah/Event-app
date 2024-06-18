// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';

import NavBar from '../components/NavBar';

import image from '../assets/events.jpeg';

const UpcomingEventPage = () => {
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
      <NavBar />
      <button
        className='flex items-center bg-black text-white p-2 rounded-md'
        onClick={() => navigate(-1)}
      >
        <span>
          <IoMdArrowBack />
        </span>
        <p className='ml-2'>Back</p>
      </button>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <p className='text-lg mt-5'>All Upcoming Events</p>
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

export default UpcomingEventPage;
