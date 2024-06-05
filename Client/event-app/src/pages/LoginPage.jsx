import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
const LoginPage = () => {
  return (
    <>
      <div className=''>
        <Header
          linkName='Signup'
          linkUrl='/signup'
          heading='Welcome Back'
          paragraph="Don't have an account yet?"
        />
      </div>
      <div className=''>
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
