import React, { useEffect, useState } from 'react';
import {
  CloseOutlined,
  MenuOutlined,
  RightOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import logo from '../assets/logo/logo.png';
import {
  FieldTimeOutlined,
  PhoneOutlined,
  MailOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import notificationSound from '../assets/notsound.mp3'; // Import your notification sound file

const Navbar = ({ socket, role, username, clientId, handleLogout }) => {
  console.log('clientid navbar :', clientId);
  console.log('username home :', username);
  console.log('rolehome:', role);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'contact', label: 'Contact' },
  ];

  ///////
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false); // New state variable
  const [playNotificationSound, setPlayNotificationSound] = useState(false); // State variable for sound notification

  useEffect(() => {
    const handleText = (data) => {
      if (Array.isArray(data.text)) {
        setNotifications(data.text);
      } else if (typeof data.text === 'string') {
        setNotifications([data.text]);
      } else {
        setNotifications([]);
      }
      setHasUnreadNotifications(true);
      setPlayNotificationSound(true);
    };
  
    if (socket) {
      socket.on('getText', handleText);
    }
  
    return () => {
      if (socket) {
        socket.off('getText', handleText);
      }
    };
  }, [socket]); // Ensure that this effect runs whenever the socket changes
  
  useEffect(() => {
    if (playNotificationSound) {
      const audio = new Audio(notificationSound);
      audio.play();
      setPlayNotificationSound(false);
    }
  }, [playNotificationSound]);
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setHasUnreadNotifications(false);

  };

  return (
    <>
      <div className="njes  sm:px-8 px-4 bg-gray py-2 z-50 w-full flex flex-wrap">
        <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
          <label className="flex items-center text-lg text-left mb-2">
            <div>
              <FieldTimeOutlined
                className="text-orange mr-2"
                style={{ fontSize: '40px' }}
              />
            </div>
            <div>
              <p className="font-bold">Opening Hours</p>
              <div style={{ display: 'block', fontSize: '14px' }}>
                Mon - Fri, 8:00 - 9:00
              </div>
            </div>
          </label>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
          <label className="flex items-center text-lg text-left mb-2">
            <div>
              <PhoneOutlined
                className="text-orange mr-2"
                style={{ fontSize: '40px' }}
              />
            </div>
            <div>
              <p className="font-bold">Call Us</p>
              <div style={{ display: 'block', fontSize: '14px' }}>
                +216 20 672 548
              </div>
            </div>
          </label>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
          <label className="flex items-center text-lg text-left mb-2">
            <div>
              <MailOutlined
                className="text-orange mr-2"
                style={{ fontSize: '40px' }}
              />
            </div>
            <div>
              <p className="font-bold">Email Us</p>
              <div style={{ display: 'block', fontSize: '14px' }}>
                aymensaidany@gmail.com
              </div>
            </div>
          </label>
        </div>
      </div>

      <header className="sm:px-8 px-4 py-2 z-50 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold">
            <img
              src={logo}
              style={{ width: '60px', height: 'auto' }}
              className="h-12 fill-current cursor-pointer  "
              alt=""
            />
          </a>
          <ul className="flex-1 flex justify-center items-center  gap-6 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className=" hover:text-orange leading-normal font-bold "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            {clientId ? (
              <>
                <p className="text-orange rounded px-8 py-2.5">{username}</p>
                <LogoutOutlined
                  onClick={handleLogout}
                  className="text-orange rounded px-3 py-4"
                />
              </>
            ) : (
              <>
                <button className="bg-transparent text-black mr-4 hover:text-orange ">
                  <Link to={'/login'}>Sign In</Link>
                </button>
                <button className="bg-orange text-white rounded px-8 py-2.5 ">
                  <Link to={'/register'}>Register</Link>
                </button>
              </>
            )}
            {role === 'admin' && (
              <div className="flex items-center">
                <NotificationOutlined
            className={`text-${hasUnreadNotifications ? 'red-600' : 'orange'} rounded px-3 py-3.5`}
            onClick={handleNotificationClick}

                />
                
              </div>
            )}
          </div>

          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <MenuOutlined className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 z-50 bottom-0 lg:bottom-auto bg-white">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <CloseOutlined className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col mt-20 mx-12  gap-6  h-full ">
              {navLinks.map((item) => (
                <a
                  href={item.href}
                  className="flex items-center justify-between leading-normal text-lg w-full"
                >
                  <span>{item.label}</span>
                  <RightOutlined />
                </a>
              ))}
              {clientId ? (
                <>
                  <button
                    onClick={handleLogout}
                    className=" bg-orange p-4 text-white rounded font-bold   flex-col items-center  md:ml-8"
                  >
                    Logout <LogoutOutlined className="ml-2 " />
                  </button>
                </>
              ) : (
                <>
                  <button className=" bg-orange p-4 text-white rounded font-bold">
                    Sign In
                  </button>
                  <button className="bg-black p-4  text-white rounded font-bold">
                    Register
                  </button>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
       {showNotifications && (
  <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button
          onClick={handleNotificationClick}
          className="text-gray-500 hover:text-gray-700"
        >
          <CloseOutlined />
        </button>
      </div>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  </div>
)}

    </>
  );
};
export default Navbar;
