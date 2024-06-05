import React from 'react';
import Header from '../components/Header';
import Signup from '../components/Signup';

const SignupPage = () => {
  return (
    <div>
      <Header
        linkName='Login'
        linkUrl='/'
        heading='Register Here'
        paragraph='Already have an account?'
      />
      <div className=''>
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
