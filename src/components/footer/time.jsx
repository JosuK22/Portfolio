import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []); 

  // Get individual hour, minute, and second values
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  return (
    <div>
      <div className="clock-container">
        <div className="time-box">
          <p>{hour}</p>
        </div>
        <div className="time-box">
          <p>:</p>
        </div>
        <div className="time-box">
          <p>{minute}</p>
        </div>
        <div className="time-box">
          <p>:</p>
        </div>
        <div className="time-box">
          <p>{second}</p>
        </div>
        <div className="time-box">
          <p>IST</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
