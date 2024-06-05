import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from '@material-tailwind/react';

const NavBar = () => {
  const { pathname } = useLocation();
  // if (location.pathname === '/') {
  //   console.log("line 15");
  //   console.log(location.pathname)
  //   console.log(typeof location.pathname)
  // }
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 text-black tablet:mb-0 tablet:mt-0 tablet:flex-row tablet:items-center tablet:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a href='/events/page' className='flex items-center tablet:text-lg'>
          Event
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a href='/services' className='flex items-center tablet:text-lg'>
          Services
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a href='/profile' className='flex items-center  tablet:text-lg'>
          Profile
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className='-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll mb-5 text-black' style={{backgroundColor:''}}>
      <Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 tablet:px-8 tablet:py-4'>
        <div className='flex items-center justify-between text-black'>
          <Typography
            as='a'
            href='/'
            className='mr-4 cursor-pointer py-1.5 font-medium tablet:text-xl'>
            Event App
          </Typography>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden tablet:block'>{navList}</div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent tablet:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
