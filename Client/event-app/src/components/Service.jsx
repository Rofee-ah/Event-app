import React from 'react';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import img4 from '../assets/img4.svg';
import img5 from '../assets/img5.svg';
import img6 from '../assets/img6.svg';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-5 tablet:grid-cols-3 laptop:grid-cols-4 justify-around '>
        <div className='flex flex-col gap-2 '>
          <Link to={'/services/entertainment'}>
            <img src={img1} alt='' className=' tablet:h-80 w-80' />
            <p className='ml-7'>Entertainment</p>
          </Link>
        </div>

        <div className='flex flex-col gap-2'>
          <Link to={'/services/eventVenue'}>
          <img src={img2} alt='' className=' tablet:h-80 w-80' />
          <p className='ml-7'>Event Venues</p>
          </Link>
          
        </div>

        <div className='flex flex-col gap-2'>
          <Link to={'/services/securityPersonnel'}>
          <img src={img3} alt='' className=' tablet:h-80 w-80' />
          <p className='ml-7'>Security Personnel</p>
          </Link>
         
        </div>

        <div className='flex flex-col gap-2'>
        <Link to={'/services/catering'}>

          <img src={img4} alt='' className=' tablet:h-80 w-80' />
          <p className='ml-7'>Catering Services</p>
        </Link>
        </div>

        <div className='flex flex-col gap-2'>
          <img src={img5} alt='' className=' tablet:h-80 w-80' />
          <h4 className='ml-7'>Photography</h4>
        </div>

        <div className='flex flex-col gap-2'>
          <img src={img6} alt='' className=' tablet:h-80 w-80' />
          <h4 className='ml-7'>Videography</h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
