import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthenticationContext/auth.context';
import Spinner from '../component/Spinner';
import { toast } from 'react-toastify';

export default function SignupPage() {
  const { register, isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(false); // Loading state

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    role: '',
    address: '',
    contact: ''
  });

  const { name, age, email, password, role, address, contact } = formData;

  // Handle input change
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    let message = await register(name, age, email, password, role, address, contact);

    // Handle user already exists error
    if (message === 'User already exists') {
      toast.error(message);
    }

    setLoading(false); // Stop loading
  };

  // UseEffect to handle toast notification when authentication state changes
  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Registration Successful 🥳', { toastId: 'reg1' });
    }
  }, [isAuthenticated]);

  // Redirect if authenticated
  if (isAuthenticated) {
    return <Navigate to='/dashboard/' />;
  }

  return (
    <div className='flex-box'>
      <h1>Create your Account</h1>
      <form onSubmit={onSubmit} className='flex-box'>
        <input type='text' placeholder='Name' onChange={onChange} value={name} name='name' />
        <input type='text' placeholder='Age' onChange={onChange} value={age} name='age' />
        <input type='email' placeholder='Email address' onChange={onChange} value={email} name='email' />
        <input type='password' placeholder='Password' onChange={onChange} value={password} name='password' />
        <input type='text' placeholder='Role' onChange={onChange} value={role} name='role' />
        <input type='text' placeholder='Address' onChange={onChange} value={address} name='address' />
        <input type='text' placeholder='Contact' onChange={onChange} value={contact} name='contact' />

        <button className='btn' disabled={loading}>
          {loading ? <Spinner /> : 'Sign up'}
        </button>
      </form>

      <p>Already have an account? <Link to='/login'>Log in</Link></p>
    </div>
  );
}
