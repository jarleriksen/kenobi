import React, { useContext } from 'react';
import { Overlay } from '../../overlay';
import styled from 'styled-components';
import { ThemeContext } from '../../theme/ThemeConsumer';
import { Heading, Paragraph } from '../../typography';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { VisuallyHidden } from '../../visually-hidden';
import DialogWrapper from './DialogWrapper';

const ANIMATION_DURATION = 200;

interface DefaultProps {
  topOffset?: any;
  sideOffset?: any;
  minHeightContent?: number;
}

export interface DialogProps extends DefaultProps {
  /**
   * Controls if the Drawer is open or closed.
   */
  isOpen: boolean;

  /**
   * Dialog content
   */
  children: React.ReactNode;

  /**
   * If the dialog should show a header
   */
  showHeader?: boolean;

  /**
   * If showHeader is true, show this title.
   * Will be used as aria-label if no custom label is given.
   */
  dialogTitle?: string;

  /**
   * If set the aria-label will be set to this.
   * Otherwise use dialogTitle or simply nothing.
   */
  ariaLabel?: string;

  /**
   * Whether or not to show close icon
   */
  hasClose?: boolean;

  /**
   * If clicking the overlay should close the Dialog.
   */
  shouldCloseOnOverlayClick?: boolean;

  /**
   * If the Dialog should close on Escape press.
   */
  shouldCloseOnEsc?: boolean;

  /**
   * Function to control the value of isOpen.
   *
   * This is a user provided function.
   */
  onRequestClose: () => void;

  /**
   * Width of the Dialog
   */
  width?: number;
}

const DialogContentWrapper = styled.div<{ minHeight?: number }>`
  display: flex;
  overflow: auto;
  flex-direction: column;
  min-height: ${({ minHeight }) => minHeight}px;

  box-shadow: ${({ theme }) =>
    `0 0 1px ${theme.colors.palette.neutral.base}, 0 16px 24px -8px ${theme.colors.palette.neutral.dark}`};
`;

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.neutral.light};
  padding: 16px;
  flex-shrink: 0;
`;

const DialogCloseIconWrapper = styled.div`
  border-radius: 100%;
  width: 32px;

  transition: background-color 200ms ease 0s;
`;

const DialogContent = styled.div`
  padding: 16px;
  overflow: auto;
`;

const Dialog = ({
  isOpen = false,
  showHeader = true,
  hasClose = true,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  width = 560,
  topOffset = '12vmin',
  sideOffset = '16px',
  minHeightContent = 80,
  ...props
}: DialogProps) => {
  const themeContext = useContext(ThemeContext);

  const { children, dialogTitle, ariaLabel, onRequestClose } = props;

  const sideOffsetWithUnit = Number.isInteger(sideOffset)
    ? `${sideOffset}px`
    : sideOffset;
  const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`;

  const topOffsetWithUnit = Number.isInteger(topOffset)
    ? `${topOffset}px`
    : topOffset;
  const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`;

  const dialogContent =
    typeof children === 'string' ? (
      <Paragraph size={400}>{children}</Paragraph>
    ) : (
      children
    );

  return (
    <Overlay
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      childrenWrapperStyles={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      {({ state }) => (
        <DialogWrapper
          role="dialog"
          aria-modal="true"
          aria-labelledby={ariaLabel || dialogTitle || ''}
          theme={themeContext}
          width={width}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          marginX={sideOffsetWithUnit}
          marginY={topOffsetWithUnit}
          state={state}
          animationDuration={ANIMATION_DURATION}
          data-testid="kenobi-dialog">
          <DialogContentWrapper
            theme={themeContext}
            minHeight={minHeightContent}>
            {showHeader && (
              <DialogHeader theme={themeContext}>
                <Heading as="h4" size={600}>
                  {dialogTitle}
                </Heading>
                {hasClose && (
                  <DialogCloseIconWrapper>
                    <Button
                      tabIndex={0}
                      intent="none"
                      onClick={onRequestClose}
                      data-testid="kenobi-dialog-close-button">
                      <VisuallyHidden>Close</VisuallyHidden>
                      <Icon aria-hidden icon="cross" />
                    </Button>
                  </DialogCloseIconWrapper>
                )}
              </DialogHeader>
            )}

            <DialogContent>{dialogContent}</DialogContent>
          </DialogContentWrapper>
        </DialogWrapper>
      )}
    </Overlay>
  );
};

export default Dialog;
