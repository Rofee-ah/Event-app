// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import NavBar from '../components/NavBar';
import AllEvent from '../components/AllEvent';

const AllEventPage = () => {
  const navigate = useNavigate();

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
      <AllEvent />
    </>
  );
};

export default AllEventPage;
