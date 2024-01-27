import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import abts from '../assets/chooseUs/abts.jpg';



const ChooseUs = () => {
  return (
    <div className="md:mx-14 mt-12 md:mt-20" >
      
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-4 md:p-12">
          <h3 className="md:text-left text-lg font-bold" style={{color:"#FFA500"}}>Why Choose Us <span style={{color:"black"}}>?</span></h3>
          <h1 className="md:text-left text-4xl md:text-6xl font-bold my-4">
           Quality service you will ever find
          </h1>
          <p className="md:text-left text-gray-dark">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate wash cars
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="bg-orange text-white font-bold rounded py-3 px-8 sm:px-8 my-4 md:float-left">
            Find Detail <RightOutlined className="align-text-bottom" />
          </button>
        </div>
        <div className="w-full md:w-1/2 block p-4 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
          
              <img src={abts}       className="custom-image-style"
alt="" />
            <div className="w-full md:w-2/3">
             
             
            </div>
          </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
