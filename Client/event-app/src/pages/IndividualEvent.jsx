// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdArrowBack } from 'react-icons/io';

import NavBar from '../components/NavBar';

import image from '../assets/events.jpeg';

const IndividualEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEventById = useCallback(() => {
    axios
      .get(`http://localhost:8080/event/${location.state.id}`)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      });
  }, [location]);

  useEffect(() => {
    getEventById();
  }, [getEventById]);

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
        <p className='mt-5'> loading... </p>
      ) : (
        <div className='grid grid-cols-3 pt-5'>
          <div className=''>
            <img
              src={image}
              alt={event.eventName}
              className='rounded-md h-full w-full '
            />
          </div>
          <div className='col-span-2 ml-5 mt-2'>
            <div className='mb-2'>
              <span className='mr-5'>Event Name - </span>
              <span>{event.eventName}</span>
            </div>
            <hr />
            <div className='mt-4 mb-2'>
              <span className='mr-5'>Event Category - </span>
              <span>{event.category}</span>
            </div>
            <hr />
            <div className='mt-4 mb-2'>
              <span className='mr-5'>Upcoming Date - </span>
              <span>{event?.upcoming || 'N/A'}</span>
            </div>
            <hr />
            <div className='mt-4 mb-2 flex'>
              <span className='mr-5'>Location - </span>
              <p className='flex items-center'>
                <IoLocationSharp color='red' className='mr-2' />{' '}
                {event.location}
              </p>
            </div>
            <hr />
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualEvent;
