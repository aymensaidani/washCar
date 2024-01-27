import React, { useState } from 'react';
import {
  CarOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import 'animate.css';
import bookbg from '../assets/book-car/book-bg.png';
import axios from "axios";
import toast  from 'react-hot-toast';

const divStyle = {
  backgroundImage: `url(${bookbg})`,
  alignItems: 'center',
};

const BookWash = ({clientId , role , username,socket}) => {
  console.log("clientId in BookWash",clientId);

  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clientId) {
      toast.error('You need to be authenticated to make a reservation.');
      return;
    }
  
    try {
      await toast.promise(
        axios.post(`http://localhost:3001/api/booking/${clientId}`, {
          date,
          service,
          location,
        }),
        {
          loading: 'Creating reservation...',
          success: (response) => {

            socket.emit("sendText", {

              senderName: clientId,
              receiverName: 3, // Assuming you want to send the notification to user with username 3
              text: `${service} service in ${location} at : ${date} `, // Provide appropriate notification text
            });
            return 'Reservation created successfully';
          },
          error: (error) => {
            console.error('Error creating reservation:', error);
            return 'Date is already reserved';
          },
        }
      );
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };
  

  return (
    <div className="mx-14 my-12">
      <div
        className="flex flex-wrap justify-center shadow-xl md:p-10 rounded	"
        style={divStyle}
      >
        
        <div className="w-full">
          <h3 className="text-black text-lg text-left ml-8 font-bold">
            Reserve washer
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-between" action="">
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              
              className="flex items-center text-lg text-left mb-2"
            >
               <CarOutlined className="text-orange mr-2" /> Select Your Service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            >
                <option value="" selected disabled>
               selecte service wash
            </option>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            
      
            </select>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
              
              className="flex items-center text-lg text-left mb-2"
            >
              <EnvironmentOutlined className="text-orange mr-2" /> Location
            </label>
            <select
             value={location}
             onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            >
               <option value="" selected disabled >
              Select availble location
            </option>
            <option value="nabeul">Nabeul</option>
            <option value="tunis">Tunis</option>
            <option value="gabes">Mestir</option>
            <option value="bizert">Bizert</option>
            </select>
          </div>
        
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-4">
            <label
             
              className="flex items-center text-lg text-left mb-2"
            >
              <CalendarOutlined className="text-orange mr-2" />  Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        
          {/* reserve Button */}
          
        <div className="w-full lg:w-1/3 md:w-1/2  px-4 mb-4">
            <label
              
              className="block text-transparent  select-none text-lg text-left mb-2"
            >
              .
            </label>
            <button type='submit'  className="bg-orange text-white rounded font-bold flex items-center justify-center w-full h-12">
              <ShoppingCartOutlined className='mr-2' /> Reserve now
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default BookWash;
