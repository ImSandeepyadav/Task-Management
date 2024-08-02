import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../features/notifications/notificationsSlice';
import { Snackbar, Alert } from '@mui/material';

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const handleClose = (id) => {
    dispatch(removeNotification(id));
  };

  return (
    <>
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open
          autoHideDuration={3000}
          onClose={() => handleClose(notification.id)}
          style={{ marginBottom: '20px' }}
        >
          <Alert onClose={() => handleClose(notification.id)} severity={notification.type}>
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};

export default Notifications;
