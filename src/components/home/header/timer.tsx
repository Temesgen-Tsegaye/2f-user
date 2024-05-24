"use client"
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Box } from '@mui/material';

export const TimeCounter = ({type}:{type:boolean}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const formattedTime = type?format(currentTime, "h a EEEE, MMM d"): format(currentTime, 'h:mm aa');

  return (
    <Box>
      {formattedTime}
    </Box>
  );
};

