import React from 'react';
import GetUpcomingEvent from '../components/GetUpcomingEvent';
import HappeningEvent from '../components/HappeningEvent';
import DiscoverVenue from '../components/DiscoverVenue';
import NavBar from '../components/NavBar';
import { LuPlus } from "react-icons/lu";

const EventPage = () => {
  return (
    <>
      <div className=' h-full'>
        <NavBar />
        <div className='mb-3 mt-3'>
          <h1 className='flex justify-start tablet:justify-center font-semibold text-lg tablet:text-3xl tablet:mb-10'>
            Happening Now!!!
          </h1>
          <HappeningEvent />
        </div>
        <div className='mb-5 text-left tablet:flex  tablet:flex-col gap-3'>
          <div className='flex flex-row justify-between'>
          <p className='text-lg font-semibold tablet:text-3xl tablet:ml-[213px]'>Upcoming Event</p>
          <button className='flex flex-row tablet:hidden items-center gap-1' >See All <LuPlus className='bg-slate-200 rounded-sm p-0.5'/></button>
          </div>
          <GetUpcomingEvent />
          {/* <FaArrow/> */}
        </div>
        <div className='mb-5 text-left tablet:flex  tablet:flex-col gap-3'>
          <div className='flex flex-row justify-between'>
          <p className='text-lg font-semibold tablet:text-3xl tablet:ml-[213px]'>Discover Venues</p>
          <button className='flex flex-row tablet:hidden items-center gap-1' >See All <LuPlus className='bg-slate-200 rounded-sm p-0.5' /></button>
          </div>
          <DiscoverVenue />
        </div>
       
      </div>
    </>
  );
};

export default EventPage;
