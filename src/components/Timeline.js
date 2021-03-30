import React from 'react';
import { usePhotos } from '../hooks/use-photos';

const Timeline = () => {

  const { photos } = usePhotos();
  return (
    <div className='container col-span-2'>
      i am timeline
    </div>
  );
};


export default Timeline;
