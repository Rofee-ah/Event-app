import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    navigate('/login');
  };
  return (
   <>
   <NavBar/>
    <div>
      <h1>ProfilePage
      </h1>
      <div>
        <button onClick={()=>handleLogout()} className='border rounded-lg text-white border-blue-800 bg-blue-600 p-3'>Logout</button>
      </div>
    </div>
   </>
  )
}

export default ProfilePage