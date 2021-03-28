import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from '../Suggested-profile';

const Suggestion = ({ userId,following }) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestionProfiles() {
      const response = await getSuggestedProfiles(userId,following);
      console.log(response);
      setProfiles(response);
    }
    if (userId) {
      suggestionProfiles();
    }
  }, [userId]);

  if (!profiles) {
    return <Skeleton count={1} height={150} className='mt-5' />;
  }
  if (profiles.length > 0) {
    return (<div className='rounded flex flex-col'>
      <div className='text-sm flex items-center align-items justify-between mb-2'>
        <p className='font-bold text-gray-base'>Suggestions for you</p>
      </div>
      <div className='mt-4 grid gap-4'>
        {profiles.map((profile)=>(
          <SuggestedProfile
          key={profile.docId}
          userDocId={profile.docId}
          profileId={profile.userId}
          username={profile.username}
          userId={userId}

          />
        ))}
      </div>
    </div>);
  }
  return null;
};

Suggestion.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array
};


export default Suggestion;
