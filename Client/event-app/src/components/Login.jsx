import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginFields } from '../resources/utils';
import Input from './Input';

// toast.configure()

const Login = () => {
  const navigate = useNavigate();
  const fields = loginFields;
  let fieldsState = {};
  fields.forEach((field) => (fieldsState[field.id] = ''));
  const [formData, setFormData] = useState(fieldsState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/user/login',
        formData
      );
      if (response.status === 200) {
        toast.success('Successfully logged in');
        localStorage.setItem('userToken', response.data.generateToken);
        localStorage.setItem('userName', response.data.other.firstname);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={handleSubmit}>
        <div>
          {loginFields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={formData[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <div className='border border-purple-600 rounded flex justify-center mt-3'>
          <button
            type='submit'
            className=' text-purple-600 hover:text-purple-500  py-2 '>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
