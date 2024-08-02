import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePicture, loadProfilePicture } from '../features/profile/profileSlice';
import { Avatar, Button } from '@mui/material';

const ProfilePicture = () => {
  const dispatch = useDispatch();
  const profilePicture = useSelector((state) => state.profile.profilePicture);
  const [image, setImage] = useState(profilePicture || '');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(setProfilePicture(reader.result));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    dispatch(loadProfilePicture());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={image} alt="Profile Picture" style={{ marginRight: '10px' }} />
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-profile-pic"
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="upload-profile-pic">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default ProfilePicture;
