import React, { useEffect } from 'react';

import Hero from '../components/Hero';
import BookCar from '../components/BookWash';
import PlanTrip from '../components/PlanTrip';
import ChooseUs from '../components/ChooseUs';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';

const Home = ({role,clientId,socket,username}) => {
  console.log("clientid in home :",clientId);
console.log("username inhome:",username);

useEffect(() => {
  socket?.emit("newUser",clientId);
}, [socket]);
  return (
    <div>
      <Hero socket={socket} />
      <BookCar role={role} username={username} socket={socket}  clientId={clientId}  />
      <PlanTrip socket={socket}/>
      
      <ChooseUs socket={socket}/>
      <Testimonials socket={socket} />
      <Faq  socket={socket}/>
      
    </div>
  );
};

export default Home;
