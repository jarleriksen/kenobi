import React, { useEffect, useRef } from 'react';

const useEventListener = (
  event: string,
  callback,
  options: boolean = false,
  element = window,
) => {
  /**
   * We use a Ref because we want the callback
   * to be saved across re-renders.
   */
  const cachedCallback = useRef<any>(null);

  useEffect(() => {
    cachedCallback.current = callback;
  }, [callback]);

  /**
   * Because of the cachedCallback our Effect
   * only re-renders when the event changes instead
   * of doing also re-render when the callback changes.
   */
  useEffect(() => {
    if (!element) return;

    const eventListener = (event) => cachedCallback.current(event);

    element.addEventListener(event, eventListener, options);

    /**
     * Cleanup listener
     */
    return () => {
      element.removeEventListener(event, eventListener);
    };
  }, [event]);
};

export default useEventListener;
