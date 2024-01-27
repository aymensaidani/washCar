import React from 'react';
import heroesbg from '../assets/about/heroes-bg.png';
import contactbg from '../assets/banners/bg-contact.png';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const bgStyle = {
  backgroundImage: `url(${heroesbg})`,
  alignItems: 'center',
  backgroundSize: 'unset',
};

const bg2Style = {
    backgroundImage: `url(${contactbg})`,
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition:'center'
  };

const Contact = () => {
  return (
    <div>
      <div className="relative h-72 -mt-16 -z-10">
        <div
          className="absolute inset-0 bg-white opacity-40"
          style={{ ...bgStyle, zIndex: -1 }}
        ></div>
      </div>
      <nav aria-label="Breadcrumb" className="flex mx-14 -mt-36">
        <ol className="flex overflow-hidden rounded-lg  border border-gray-dark  text-gray-dark">
          <li className="flex items-center">
            <a
              href="/"
              className="flex h-10 items-center gap-1.5 bg-gray-light px-4 transition hover:text-gray-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ms-1.5 text-xs font-medium"> Home </span>
            </a>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-light [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
            <a
              href="/contact"
              className="flex h-10 items-center bg-orange pe-4 ps-8 text-xs font-medium transition hover:text-gray-dark"
            >
              Contact
            </a>
          </li>
        </ol>
      </nav>
      <div className="mx-4 md:mx-14 mt-8 md:mt-28" style={{ ...bg2Style, zIndex: -1 }}>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 p-4 md:p-12">
            <h1 className="text-left text-4xl md:text-6xl font-bold my-4">
            Need additional information?
            </h1>
            <p className="text-left my-8 text-gray-dark">
Contact us for more information            </p>
            <div className="flex flex-col ">
              <a
                href="tel:+216 20 672 548"
                className="flex items-center text-gray-dark hover:text-orange mb-2 font-bold text-left"
              >
                <PhoneOutlined className="mr-2" />
                +216 20 672 548
              </a>
              <a
                href="mailto:aymensaidany@gmail.com"
                className="flex items-center text-gray-dark hover:text-orange mb-2 font-bold text-left"
              >
                <MailOutlined className="mr-2" /> aymensaidany@gmail.com
              </a>
              <a
                className="flex items-center font-bold hover:text-orange text-left mb-2"
                href="/"
              >
                <EnvironmentOutlined className="mr-2" />
                Nabeul, Tunisia
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-12">
            <form className='flex flex-col' action="">
                <label className='text-left font-bold' htmlFor="input1">Full Name <span className='text-red-500'>*</span></label>
                <input id='input1' required placeholder='Eg. Aymen saidani' className='bg-gray-light rounded h-12 p-4' type="text" />
                <label className='text-left font-bold mt-8' htmlFor="input2">Email <span className='text-red-500'>*</span> </label>
                <input id='input2' required placeholder='aymensaidany@gmail.com' className='bg-gray-light rounded h-12 p-4' type="email" />
                <label className='text-left font-bold mt-8' htmlFor="input3">Tell us about it <span className='text-red-500'>*</span> </label>
                <textarea id='input3' required placeholder='This is a simple message ' className='bg-gray-light rounded h-52 p-4' />
                <button className='w-full bg-orange text-white font-bold mt-8 p-3 rounded' type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
