// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { MdEvent } from 'react-icons/md';
import { LuWarehouse } from 'react-icons/lu';
import axios from 'axios';

const Cards = () => {
  const [totalEvent, setTotalEvent] = useState();
  const [totalVenue, setTotalVenue] = useState();
  const [totalUsers, setTotalUsers] = useState();
  const [loadingTotal, setLoadingTotal] = useState(false);
  const [loadingVenue, setLoadingVenue] = useState(false);
  const [loadingTotalUser, setLoadingTotalUser] = useState(false);

  const getTotal = async () => {
    setLoadingTotal(true);
    setLoadingVenue(true);
    setLoadingTotalUser(true);
    try {
      axios.get('http://localhost:8080/event/total').then((res) => {
        setTotalEvent(res.data.total);
        setLoadingTotal(false);
      });
      axios.get('http://localhost:8080/venue/total').then((res) => {
        setTotalVenue(res.data.total);
        setLoadingVenue(false);
      });
      axios.get('http://localhost:8080/api/user/total').then((res) => {
        setTotalUsers(res.data.total);
        setLoadingTotalUser(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <>
      <div className='mb-4 flex flex-wrap justify-between'>
        <div className='w-100 flex items-center bg-white border rounded-md overflow-hidden shadow p-2'>
          <div className='p-4'>
            <MdEvent size={40} />
          </div>
          <div className='px-4 text-sm mt-4'>
            <h3 className='text-sm'>Total Event</h3>
            <p className=''>{loadingTotal ? 'loading' : totalEvent}</p>
          </div>
        </div>
        <div className=''>
          <div className='flex items-center bg-white border rounded-md overflow-hidden shadow p-2'>
            <div className='p-4'>
              <LuWarehouse size={40} />
            </div>
            <div className='px-4 text-sm mt-4'>
              <h3 className='text-sm'>Total Venue</h3>
              <p className=''>{loadingVenue ? 'loading' : totalVenue}</p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex items-center bg-white border rounded-md overflow-hidden shadow p-2'>
            <div className='p-4'>
              <MdEvent size={40} />
            </div>
            <div className='px-4 text-sm mt-4'>
              <h3 className='text-sm'>Total Users</h3>
              <p className=''>{loadingTotalUser ? 'loading' : totalUsers}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-4'>
        <hr />
      </div>
    </>
  );
};

export default Cards;
