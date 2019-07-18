import React from 'react';
import useEventListener from './useEventListener';

const useEscapeListener = (callback, shouldReact: boolean = true) => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && shouldReact) {
      e.stopPropagation();
      callback(e);
    }
  };

  useEventListener('keydown', handleEscape);
};

export default useEscapeListener;
