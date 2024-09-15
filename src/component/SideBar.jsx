import { React, useState, useContext } from 'react'
import { jwtDecode } from 'jwt-decode'
import { FaUser } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineForm } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthenticationContext/auth.context';

export default function SideBar() {
  const {setAuthenticated, currentUserName} = useContext(AuthContext);

  const {handleLogout} = useContext(AuthContext)


  // // if(localStorage.getItem('token')){
  // //   userName = jwtDecode(localStorage.getItem('token')).user.name
  // // }

  const [activeLink, setActiveLink] = useState("chat")
  const handleActive = (link) => {
    setActiveLink(link);
  }

  return (
    <div className='side-bar'>
      <h3 className='align ai-logo'>Muscular💪</h3>
      <div className="no-of-chats">

      </div>
      <div className='user-info'>
        {/* <Link to='explore' > <p className={`user-info-link ${activeLink === 'explore' ? 'user-info-active' : ''}`} onClick={() => handleActive('explore')}><FaSearch /> Explore</p></Link> */}

        <Link to='home' ><p className={`user-info-link ${activeLink === 'chat' ? 'user-info-active' : ''}`} onClick={() => handleActive('chat')}> <IoChatboxEllipsesOutline /> Home</p></Link>

        <Link to='feedback' > <p className={`user-info-link ${activeLink === 'feeback' ? 'user-info-active' : ''}`} onClick={() => handleActive('job-data')}><AiOutlineForm /> Feedback Form</p></Link>

        <Link to='userprofile' ><p className={`user-info-link ${activeLink === 'userprofile' ? 'user-info-active' : ''}`} onClick={() => handleActive('user')}> <FaUser /> Account</p></Link>

        <Link to='contact' > <p className={`user-info-link ${activeLink === 'contact' ? 'user-info-active' : ''}`} onClick={() => handleActive('contact')}><MdConnectWithoutContact /> Contact Us</p></Link>

        <Link to='pricing' > <p className={`user-info-link ${activeLink === 'pricing' ? 'user-info-active' : ''}`} onClick={() => handleActive('pricing')}><MdGroups /> Pricing</p></Link>

        <Link to='admin' > <p className={`user-info-link ${activeLink === 'admin' ? 'user-info-active' : ''}`} onClick={() => handleActive('admin')}><MdGroups /> Admin Login</p></Link>

        <Link to='/' ><p className={`user-info-link ${activeLink === 'current-user' ? 'user-info-active' : ''}`} onClick={handleLogout}> <IoIosLogOut /> Logout</p></Link>
      </div>
    </div>
  )
}