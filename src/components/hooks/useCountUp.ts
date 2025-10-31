import { useEffect, useState } from 'react';

// Animates a number from 0 to 'end' over a duration
const useCountUp = (end: number, duration = 1500, startCounting = true) => {
  const [count, setCount] = useState(0);
  const start = 0;

  useEffect(() => {
    if (!startCounting) return; 

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentValue = Math.floor(start + percentage * (end - start));
      setCount(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return Math.min(count, end);
};
export default useCountUp;