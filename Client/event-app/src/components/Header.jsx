// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = ({ linkName, linkUrl, paragraph, heading }) => {
  return (
    <div className='mb-10 mt-24'>
      <div className='flex justify-center'>
        <img
          alt=''
          className='h-8 w-8'
          src='https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315'
        />
      </div>
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        {heading}
      </h2>
      <p className='mt-5 text-center text-sm text-gray-600'>
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className='font-medium text-purple-600 hover:text-purple-500'
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
