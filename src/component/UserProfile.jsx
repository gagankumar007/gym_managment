import { React, useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthenticationContext/auth.context'
import Spinner from './Spinner';
import { toast } from 'react-toastify'
import { FaUserCircle } from "react-icons/fa";
import { Navigate, Link } from 'react-router-dom';

export default function UserProfile() {
  const { currentUser } = useContext(AuthContext);
  const [formUIloading, setFormUILoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFormUILoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);


  if (formUIloading) {
    return (
      <div className='spinner-user-info'>
        <Spinner />
      </div>
    )
  }

  //   if (currentUserDetails === 'There is no userdetails for this user') {
  //     toast.error("No Data available");
  //   }



  const { name, email, address, contact, age } = currentUser;



  return (
    <div className='curr-user-info'>
      <div className='user-details-info user-details'>
        <div className='user-details-flex'>
          <div className='user-photo'>
            <FaUserCircle />
          </div>
          <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Mobile Number: {contact}</p>
            <p>Address: {address}</p>
          </div>
        </div>

        <div className='trainer-details'>

          <div>
            <h1>Your trainer Details</h1>
          </div>
          <div>
            <p>Name: {name} Trainer</p>
            <p>Trainer Experience: {contact}</p>
            <p>Trainer specilization: {address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
