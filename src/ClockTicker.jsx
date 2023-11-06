import React, { useEffect, useState } from 'react';
import PageContainer from '../src/PageContainer';

const ClockTicker = () => {
    
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  function tick() {
    setTime(new Date());
  };

  return (
    <PageContainer 
        title='Ticking (and flipping) clock'
        description='A clock that ticks and flips.'
        resultDescription='The current time is: '
        result={`${time.toLocaleTimeString()}.`}>
    </PageContainer>
    )
}

export default ClockTicker;