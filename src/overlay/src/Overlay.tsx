import React, { useContext, useEffect } from 'react';
import { Portal } from '../../portal';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import { ThemeContext } from '../../theme/src/ThemeConsumer';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import OverlayWrapper from './OverlayWrapper';

const ANIMATION_DURATION = 240;

export interface OverlayProps {
  /**
   * Whether or not to show the Overlay.
   */
  isOpen: boolean;

  /**
   * Overlay content
   */
  children: React.ReactNode;

  /**
   * Styles for the OverlayWrapper
   */
  childrenWrapperStyles?: object;

  /**
   * If Overlay should close on click
   */
  shouldCloseOnClick: boolean;

  /**
   * If overlay should close on Escape press
   */
  shouldCloseOnEsc: boolean;

  /**
   * Provided function to set opposite value of isOpen prop
   *
   * This function is used to close the Overlay on Esc or OverlayClick.
   *
   * This is a user provided function.
   */
  onRequestClose: () => void;
}

const Overlay = ({
  isOpen = false,
  shouldCloseOnClick = true,
  shouldCloseOnEsc = true,
  ...props
}: OverlayProps) => {
  const themeContext = useContext(ThemeContext);

  const { children, childrenWrapperStyles, onRequestClose } = props;

  const handleClose = (e) => {
    if (shouldCloseOnEsc && e.key === 'Escape') {
      /**
       * This should be enough to avoid closing
       * nested Overlays. However, it is not.
       * Requires more research, I guess.
       */
      e.stopPropagation();
      onRequestClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && shouldCloseOnClick) {
      onRequestClose();
    }
  };

  return (
    <Portal>
      <Transition appear unmountOnExit timeout={ANIMATION_DURATION} in={isOpen}>
        {(state) => (
          <FocusLock returnFocus>
            <RemoveScroll>
              <OverlayWrapper
                theme={themeContext}
                onClick={handleOverlayClick}
                onKeyDown={handleClose}
                style={{ ...childrenWrapperStyles }}
                state={state}
                data-testid="kenobi-overlay">
                {typeof children === 'function'
                  ? children({ state })
                  : children}
              </OverlayWrapper>
            </RemoveScroll>
          </FocusLock>
        )}
      </Transition>
    </Portal>
  );
};

export default Overlay;
