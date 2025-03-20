import {useEffect, useState} from 'react';

const StartAnimationHook = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (shouldAnimate) {
      setShouldAnimate(false);
    }
  }, []);

  return shouldAnimate;
};

export default StartAnimationHook;
