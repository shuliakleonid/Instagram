import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Timeline from '../components/Timeline';
import Header from '../components/Header';

const Dashboard = () => {
  useEffect(()=> {
    document.title = 'Instagram'
  },[])
  return (
    <div className='bg-gray-background'>
      <Header/>
      <div className='grid grid-cols-3 justify-between max-w-screen-lg '>
        <Timeline/>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Dashboard;
