// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

import GetUpcomingEvent from '../components/GetUpcomingEvent';
import HappeningEvent from '../components/HappeningEvent';
import DiscoverVenue from '../components/DiscoverVenue';
import NavBar from '../components/NavBar';

const EventPage = () => {
  const navigate = useNavigate();

  const loadMoreEvents = () => {
    navigate('/event/upcoming-event');
  };
  const discoverMoreVenues = () => {
    navigate('/venue/discover');
  };

  return (
    <>
      <div className=' h-full'>
        <NavBar />
        <div className='mt-3'>
          <h1 className='tablet:justify-center font-semibold text-lg tablet:mb-5'>
            Happening Now!!!
          </h1>
          <HappeningEvent />
        </div>
        <div className='mb-5 text-left gap-3 mt-4'>
          <div className='flex flex-row justify-between items-center mb-4'>
            <p className='text-lg font-semibold'>Upcoming Event</p>
            <button
              type='button'
              className='items-center text-xs bg-black text-white p-2 rounded-md'
              onClick={loadMoreEvents}
              aria-hidden
            >
              See More Events
            </button>
          </div>
          <GetUpcomingEvent />
        </div>
        <hr />
        <div className='mt-4 mb-5 text-left gap-3'>
          <div className='flex flex-row justify-between items-center mb-5'>
            <p className='text-lg font-semibold mt-4'>Discover Venues</p>
            <button
              type='button'
              className='items-center text-xs bg-black text-white p-2 rounded-md'
              onClick={discoverMoreVenues}
              aria-hidden
            >
              See More Venues
            </button>
          </div>
          <DiscoverVenue />
        </div>
        <hr />
      </div>
    </>
  );
};

export default EventPage;
