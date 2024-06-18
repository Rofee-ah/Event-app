// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../assets/ven3.jpeg';
import { IoLocationSharp } from 'react-icons/io5';

import 'swiper/css';
import 'swiper/css/pagination';

const DiscoverVenue = () => {
  const navigate = useNavigate();
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

  const goToEvent = (eventId) => {
    navigate(`/venue/${eventId}`, { state: { id: eventId } });
  };

  return (
    <>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <>
          <div className='flex flex-wrap gap-10 mx-auto'>
            {venue.length > 0 &&
              venue
                .slice(-4)
                .reverse()
                .map((item) => (
                  <div
                    className='flex flex-col gap-1 mt-3 individual'
                    key={item._id}
                    onClick={() => goToEvent(item._id)}
                  >
                    <img
                      src={image}
                      alt=''
                      className='rounded-md w-33.3 h-56 object-cover'
                    />
                    <h3 className='text-lg font-semibold'>{item.venueName}</h3>
                    <p className='flex items-center gap-1'>
                      {' '}
                      <IoLocationSharp color='red' /> {item.location}{' '}
                    </p>
                  </div>
                ))}
          </div>
        </>
      )}
    </>
  );
};

export default DiscoverVenue;
