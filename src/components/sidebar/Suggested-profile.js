import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateFollowedUserFollowers, updateLoggedInUserFollowing } from '../../services/firebase';


const SuggestedProfile = ({ profileDocId, profileId, username, userId, loggedInUserDocId }) => {

  const [followed, setFollowed] = useState(false);

  const handleFollowUser = async () => {
    setFollowed(true);
    // update the following array of the logged in user (in this case,my profile)
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId,false);
    await updateFollowedUserFollowers(profileDocId.userId,false);
  };

  return !followed
    ? (<div className='flex flex-row items-center align-items justify-between'>
      <div className='flex items-center justify-between'>
        <img src={`/images/avatars/${username}.jpg`} alt='Avatar' className='rounded-full w-8 flex mr-3' />
        <Link to={`/p/${username}`}>
          <p className='font-bold text-sm'>{username}</p>
        </Link>
      </div>
      <div>
        <button
          className='text-xs font-bold text-blue-medium'
          type='button'
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>)
    : null;
};

SuggestedProfile.propTypes = {
  userId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  profileDocId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired

};

export default SuggestedProfile;
