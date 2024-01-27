import React, { useEffect, useState } from 'react';
import maincar from '../assets/hero/main-car.png';
import washcar from '../assets/hero/washcar.jpg';

import {EnvironmentOutlined} from '@ant-design/icons';
const Hero = () => {
  const [showMainCar, setShowMainCar] = useState(false);

  useEffect(() => {
    // Set showMainCar to true after a delay
    const delayToShowMainCar = setTimeout(() => {
      setShowMainCar(true);
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delayToShowMainCar);
  }, []); // Run only once when the component mounts
  return (
<div className='hero' style={{ position: 'relative', background: `url(${washcar}) center/cover`, backgroundSize: 'cover', backgroundPosition: 'center',margin: '0 20px' }}>
      <div className="color-overlay" style={{ backgroundColor: '#38bdf8', opacity: 0.5, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
     
           <div className="container relative z-20 mx-auto flex flex-col md:flex-row py-2">
        <div className="w-full md:w-1/2 p-8 py-16">
        
          <h1 className="animate__animated animate__backInDown  text-white text-5xl font-bold mt-2 md:text-left md:ml-8 py-4">
            Best Car Wash in Tunisia 
          </h1>
          <p className="animate__animated animate__bounceInRight text-white mt-4 md:text-left md:ml-8" >
           Your car will shine like never before
          </p>
          <div className="mt-8 flex flex-col items-center md:flex-row md:items-center md:ml-8">
            <button className="animate__animated animate__backInLeft bg-orange text-white rounded px-8 py-4 flex items-center mb-4 md:mb-0 md:mr-4">
              See our location<EnvironmentOutlined className="ml-2" />

            </button>
        
          </div>
        </div>
        <div className="hidden  md:block ">
          
        
            <img
              src={maincar}
              alt=""
              className="animate__animated animate__bounceInRight images mt-28 z-10 max-w-full "
              style={{ maxWidth: '800px', position: 'absolute', right: 0 }}
            />
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
