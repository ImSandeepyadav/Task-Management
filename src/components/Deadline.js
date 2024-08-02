import React, { useEffect, useState } from 'react';

const getTimeRemaining = (dueDate) => {
  const total = Date.parse(dueDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  if (total <= 0) {
    return 'Overdue';
  } else if (days > 30) {
    return `${Math.floor(days / 30)} Months`;
  } else if (days > 7) {
    return `${Math.floor(days / 7)} Weeks`;
  } else if (days > 0) {
    return `${days} Days`;
  } else if (hours > 0) {
    return `${hours} Hours`;
  } else if (minutes > 0) {
    return `${minutes} Minutes`;
  } else {
    return `${seconds} Seconds`;
  }
};

const Deadline = ({ dueDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(dueDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(dueDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [dueDate]);

  return <span>{timeRemaining}</span>;
};

export default Deadline;
