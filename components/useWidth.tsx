// Source From : https://stackoverflow.com/questions/60853629/nextjs-passing-dynamic-width-on-resize-not-re-rendering
import { useEffect, useState } from 'react';

const useWidth = (): number => {
  const [width, setWidth] = useState(0);
  const handleSize = () => {
    setWidth(window.outerWidth);
  };

  useEffect(() => {
    setWidth(window.outerWidth);
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, [handleSize]);

  return width;
};

export default useWidth;
