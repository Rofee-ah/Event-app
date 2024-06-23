// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import axios from 'axios';
import { toast } from 'react-toastify';

import NavBar from '../components/NavBar';

import { data, venue } from '../resources/utils';
import Cards from '../components/Cards';

const ProfilePage = () => {
  const navigate = useNavigate();

  const [formEvent, setFormEvent] = useState({ ...data });
  const [formVenue, setVenue] = useState({ ...venue });
  const [error, setError] = useState(false);
  const [venueError, setVenueError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingVenue, setLoadingVenue] = useState(false);
  const handleLogout = () => {
    console.log('logining out');
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');
  const username = localStorage.getItem('username');

  const handleSubmit = async (type) => {
    try {
      if (formEvent.eventName.length === 0 && type === 'event')
        return setError(true);
      if (formVenue.venueName.length === 0) return setVenueError(true);
      setLoading(true);
      setLoadingVenue(true);
      if (type === 'event') {
        axios
          .post(`http://localhost:8080/post/event`, formEvent)
          .then((res) => {
            console.log(res);
            setLoading(false);
            setFormEvent({ ...data });
            toast.success('Event successfully created');
            setError(false);
          });
      }
      if (type === 'venue') {
        axios
          .post(`http://localhost:8080/post/venue`, formVenue)
          .then((res) => {
            console.log(res);
            setLoadingVenue(false);
            setVenue({ ...venue });
            toast.success('Venue successfully created');
            setError(false);
          });
      }
    } catch (error) {
      setLoading(false);
      console.log({ error });
      // toast.error(error);
    }
  };

  const handleChange = (val, attr) => {
    const updatedForm = { ...formEvent, [attr]: val };
    const updatedVenue = { ...formVenue, [attr]: val };
    if (updatedForm.isUpcoming === 'true') {
      updatedForm.isUpcoming = true;
    } else if (updatedForm.isUpcoming === 'false') {
      updatedForm.isUpcoming = false;
    }
    if (updatedVenue.isAvailable === 'true') {
      updatedVenue.isAvailable = true;
    } else if (updatedVenue.isAvailable === 'false') {
      updatedVenue.isAvailable = false;
    }
    setFormEvent(updatedForm);
    setVenue(updatedVenue);
  };

  return (
    <>
      <NavBar />
      <div className='flex flex-wrap'>
        <div
          className='flex-initial w-72 mb-3 p-2 rounded-md bg-black text-white'
          style={{ height: '90vh' }}
        >
          <span className=''>
            <RxAvatar
              className='ml-2'
              style={{ width: '50px', height: '50px' }}
            />
          </span>
          <h1 className='ml-2 mt-2 text-sm'>Hello {userName}</h1>
          <span className='italic text-xs ml-2'>{userEmail}</span>
        </div>
        <div className='ml-5' style={{ width: '70%' }}>
          <div className='ml-10'>
            <Cards />
          </div>
          <div className='ml-10 mb-5'>
            <button className='mr-5 rounded-md text-white bg-black p-2'>
              Event
            </button>
            <button className='rounded-md text-white bg-black p-2'>
              Venue
            </button>
          </div>
          <div className='flex flex-row flex-wrap gap-5 justify-between ml-10 rounded-md w-82'>
            <div className=''>
              <span>Add New Events</span>
              <form className=''>
                <div className='flex flex-col mt-5'>
                  <div className='mb-4 flex flex-col'>
                    <label className='text-xs'>Event Name</label>
                    <input
                      className='border-2 rounded-md p-2 max-w-80'
                      type='text'
                      id='eventName'
                      name='eventName'
                      autoComplete='off'
                      value={formEvent.eventName}
                      onChange={(e) =>
                        handleChange(e.target.value, 'eventName')
                      }
                    />
                    {error && (
                      <span className='text-red-600 text-xs mt-1'>
                        {' '}
                        Event name is required
                      </span>
                    )}
                  </div>

                  <label className='text-xs'>Event Location</label>
                  <input
                    className='border-2 rounded-md p-2 max-w-80 mb-4'
                    type='text'
                    autoComplete='off'
                    id='location'
                    name='location'
                    value={formEvent.location}
                    onChange={(e) => handleChange(e.target.value, 'location')}
                  />

                  <label className='text-xs'>Gate Pass</label>
                  <input
                    className='border-2 rounded-md p-2 max-w-80 mb-4'
                    type='number'
                    autoComplete='off'
                    id='price'
                    name='price'
                    value={formEvent.price}
                    onChange={(e) => handleChange(e.target.value, 'price')}
                  />

                  <label className='text-xs'>isUpcoming</label>
                  <select
                    name='isUpcoming'
                    id='isUpcoming'
                    className='text-xs border-2 rounded-md p-2 max-w-80 mb-4'
                    value={formEvent.isUpcoming}
                    onChange={(e) => handleChange(e.target.value, 'isUpcoming')}
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>

                  <label className='text-xs'>Category</label>
                  <input
                    className='border-2 rounded-md p-2 max-w-80 mb-4'
                    type='text'
                    name='category'
                    id='category'
                    value={formEvent.category}
                    autoComplete='off'
                    onChange={(e) => handleChange(e.target.value, 'category')}
                  />

                  <label className='text-xs'>Upload Image</label>
                  <input
                    className='border-2 rounded-md p-2 max-w-80 mb-5 text-xs'
                    type='file'
                    name='image'
                    id='image'
                    autoComplete='off'
                    onChange={(e) =>
                      handleChange(e.target.files[0].name, 'image')
                    }
                  />

                  <button
                    className='rounded-md text-center p-2 max-w-80 mb-4 bg-black text-white text-xs'
                    onClick={() => handleSubmit('event')}
                    type='button'
                  >
                    {loading ? 'Loading....' : 'Submit'}
                  </button>
                </div>
              </form>
              <hr />
            </div>
            <div className='ml-5'>
              <span>Add New Venue</span>
              <form className=''>
                <div className='flex flex-col mt-5'>
                  <div className='flex flex-col mb-4'>
                    <label className='text-xs'>Venue Name</label>
                    <input
                      className='border-2 rounded-md p-2 max-w-80'
                      type='text'
                      id='venueName'
                      name='venueName'
                      value={formVenue.venueName}
                      onChange={(e) =>
                        handleChange(e.target.value, 'venueName')
                      }
                      autoComplete='off'
                    />
                    {venueError && (
                      <span className='text-red-600 text-xs mt-1'>
                        {' '}
                        Venue name is required
                      </span>
                    )}
                  </div>

                  <label className='text-xs'>Venue Location</label>
                  <input
                    className='border-2 rounded-md p-2 max-w-80 mb-4'
                    type='text'
                    id='venueLocation'
                    name='venueLocation'
                    value={formVenue.venueLocation}
                    onChange={(e) =>
                      handleChange(e.target.value, 'venueLocation')
                    }
                    autoComplete='off'
                  />

                  <label className='text-xs'>Availability Status</label>
                  <select
                    id='isAvailable'
                    name='isAvailable'
                    value={formVenue.isAvailable}
                    onChange={(e) =>
                      handleChange(e.target.value, 'isAvailable')
                    }
                    className='border-2 rounded-md p-2 max-w-80 mb-4 text-xs'
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>

                  <label className='text-xs'>Upload Image</label>
                  <input
                    className='border-2 rounded-md p-2 max-w-80 mb-5 text-xs'
                    type='file'
                    id='venueImage'
                    name='venueImage'
                    onChange={(e) =>
                      handleChange(e.target.files[0].name, 'venueImage')
                    }
                    autoComplete='off'
                  />

                  <button
                    className='rounded-md text-center p-2 max-w-80 mb-4 bg-black text-white text-xs'
                    onClick={() => handleSubmit('venue')}
                    type='button'
                  >
                    {loadingVenue ? 'Loading....' : 'Submit'}
                  </button>
                </div>
              </form>
              <hr />
            </div>

            <div className='ml-5 mb-5'>
              <span>Settings</span>
              <div className='flex flex-col mt-5'>
                <label className='text-xs'>
                  {username ? 'Edit' : 'Add'} Username
                </label>
                <input
                  className='border-2 rounded-md p-2 max-w-80 mb-4'
                  type='text'
                  autoComplete='off'
                />

                <label className='text-xs'>Update email</label>
                <input
                  className='border-2 rounded-md p-2 max-w-80 mb-4'
                  type='text'
                  autoComplete='off'
                />

                <button
                  className='rounded-md text-center p-2 max-w-80 mb-4 bg-black text-white text-xs'
                  type='button'
                >
                  Update Account
                </button>

                <button
                  className='rounded-md text-center p-2 max-w-80 mb-4 bg-red-700 text-white text-xs'
                  type='button'
                  disabled
                >
                  Delete Account
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleLogout()}
          className='rounded-md text-white bg-black p-2'
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
