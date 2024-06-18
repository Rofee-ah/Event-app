// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdArrowBack } from 'react-icons/io';

import NavBar from '../components/NavBar';

import image from '../assets/events.jpeg';

const IndividualVenue = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [venue, setVenue] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEventById = useCallback(() => {
    axios
      .get(`http://localhost:8080/venue/${location.state.id}`)
      .then((res) => {
        setVenue(res.data);
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
              alt={venue.venueName}
              className='rounded-md h-full w-full '
            />
          </div>
          <div className='col-span-2 ml-5 mt-2'>
            <div className='mb-2'>
              <span className='mr-5'>Venue - </span>
              <span>{venue.venueName}</span>
            </div>
            <hr />
            <div className='mt-4 mb-2'>
              <span className='mr-5'>Available - </span>
              <span>{venue.isAvailable ? 'Yes' : 'No'}</span>
            </div>
            <hr />
            <div className='mt-4 mb-2'>
              <span className='mr-5'>Upcoming Book Date - </span>
              <span>{venue?.upcoming || 'N/A'}</span>
            </div>
            <hr />
            <div className='mt-4 mb-2 flex'>
              <span className='mr-5'>Location - </span>
              <p className='flex items-center'>
                <IoLocationSharp color='red' className='mr-2' />{' '}
                {venue.location}
              </p>
            </div>
            <hr />
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualVenue;
