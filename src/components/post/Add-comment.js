import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FirebaseContext } from '../../context/firebase';
import { UserContext } from '../../context/user';

const AddComment = ({docId,comments,setComments,commentInput}) => {
  const [comment,setComment] = useState('')
  const {firebase,FieldValue} = useContext(FirebaseContext)
const {user:{displayName}}= useContext(UserContext)
  const handleSubmitComment = (event) => {
    event.preventDefault()
    return null
  }
  return (
    <div>

    </div>
  );
};
AddComment.propTypes = {

    docId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    setComments: PropTypes.func.isRequired,
    commentInput: PropTypes.object.isRequired,

};
export default AddComment;
