import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signupFields } from '../resources/utils';
import Input from './Input';

const Signup = () => {
  const navigate = useNavigate();
  const fields = signupFields;
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
        'http://localhost:8080/api/user/register',
        formData
      );
      if (response.status === 200) {
        toast.success('Account successfully created, proceed to login');
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <form className=' space-y-6 max-w-xl mx-auto' onSubmit={handleSubmit}>
      <div className=' mt-5'>
        {fields.map((field) => (
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
      <div className=' border border-purple-600 rounded flex justify-center mt-2'>
      <button
            type='submit'
            className=' text-purple-600 hover:text-purple-500  py-2 '>
            Submit
          </button>
      </div>
    </form>
  );
};

export default Signup;
