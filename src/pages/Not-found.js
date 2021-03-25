import React, { useEffect } from 'react';

export const NotFound = () => {
  useEffect(()=>{
    document.title = 'Not Found!'
  },[])
  return (
    <div className='bg-gray-background'>
      <div className='mx-auth max-w-screen-lg'>
        <p className='text-center text-2xl'>
          Not Fount!
        </p>
      </div>
    </div>
  );
};

