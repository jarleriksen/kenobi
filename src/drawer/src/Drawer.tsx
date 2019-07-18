import React, { useContext, Fragment } from 'react';
import { Overlay } from '../../overlay';
import DrawerWrapper from './DrawerWrapper';
import { ThemeContext } from '../../theme/src/ThemeConsumer';
import DrawerContent from './DrawerContent';
import CloseIcon from './CloseIcon';

export interface DrawerProps {
  /**
   * Controls if the Drawer is open or closed.
   */
  isOpen: boolean;

  /**
   * Placement of the Drawer
   */
  placement?: 'right' | 'left';

  /**
   * Content of the Drawer
   */
  children: React.ReactNode;

  /**
   * Width of the Drawer
   */
  width?: number | string;

  /**
   * Control the aria label
   */
  ariaLabel?: string;

  /**
   * If clicking the overlay should close the Drawer.
   */
  shouldCloseOnOverlayClick?: boolean;

  /**
   * If the Drawer should close on Escape press.
   */
  shouldCloseOnEsc?: boolean;

  /**
   * Function to control the value of isOpen.
   *
   * This is a user provided function.
   */
  onRequestClose: () => void;
}

const Drawer = ({
  isOpen = false,
  placement = 'right',
  width = 620,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  ...props
}: DrawerProps) => {
  const themeContext = useContext(ThemeContext);
  const { children, ariaLabel, onRequestClose } = props;

  return (
    <Overlay
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}>
      {({ state }) => (
        <DrawerWrapper
          aria-labelledby={ariaLabel || ''}
          placement={placement}
          width={width}
          state={state}
          data-testid="kenobi-drawer">
          <Fragment>
            <CloseIcon onRequestClose={onRequestClose} placement={placement} />
            <DrawerContent placement={placement}>{children}</DrawerContent>
          </Fragment>
        </DrawerWrapper>
      )}
    </Overlay>
  );
};

export default Drawer;
