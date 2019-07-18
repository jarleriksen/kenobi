import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ThemeContext } from '../../theme/src/ThemeConsumer';
import InlineDialogContent from './InlineDialogContent';
import FocusLock from 'react-focus-lock';
import Transition from 'react-transition-group/Transition';
import { Paragraph } from '../../typography';
import { Popper } from '../../popper';
import { Placement } from '../../popper/src/Popper';
import { useEventListener, useEscapeListener } from '../../hooks';

export interface InlineDialogProps {
  /**
   * Node that can activate Inline Dialog
   */
  trigger: React.ReactNode;

  /**
   * Which event that should open the Inline Dialog
   * Default: click
   */
  triggerEvent?: 'click' | 'hover';

  /**
   * Content of the Inline Dialog
   */
  children: React.ReactNode | string;

  /**
   * Placement of the Inline Dialog relative to the trigger element
   */
  placement?: Placement;

  /**
   * Offset from the trigger element
   */
  offset?: number;

  /**
   * Manually show the Inline Dialog
   */
  show?: boolean;

  /**
   * Min width of the Inline Dialog window
   */
  minWidth?: number;

  /**
   * Min height of the Inline Dialog window
   */
  minHeight?: number;

  /**
   * Width of the Inline Dialog
   */
  width?: number;

  /**
   * Height of the Inline Dialog
   */
  height?: number;
}

const InlineDialogContainer = styled.div`
  position: relative;
  display: inline-flex;
  box-sizing: content-box;
`;

const InlineDialogTrigger = styled.div`
  cursor: pointer;
`;

let idCounter = 1;

/**
 * Do not put Inline Dialog inside a Portal.
 *
 * Focus management is out of control on a react-popper element
 * if it is inside a Portal.
 *
 * Causes page jumps and all kind of weird stuff.
 */
const InlineDialog = ({
  placement = 'top',
  triggerEvent = 'click',
  offset = 10,
  minWidth = 200,
  minHeight = 40,
  ...props
}: InlineDialogProps) => {
  const [dialogCounter, setDialogCounter] = useState();
  const [isVisible, setIsVisible] = useState();
  const themeContext = useContext(ThemeContext);
  let triggerRef: HTMLElement | undefined;
  let targetRef: HTMLElement | undefined;

  const { trigger, children, show, width, height, ...rest } = props;

  const handleClose = () => {
    if (!isVisible) return;

    setIsVisible(false);
  };

  const handleDialogClick = (e) => {
    // Avoid dialog window from closing when clicking on it
    if (targetRef && targetRef.contains(e.target)) return;

    if (triggerRef && triggerRef.contains(e.target)) return;

    if (isVisible || show) {
      handleClose();
    }
  };

  /**
   * I'm pretty excited about these hooks
   */
  useEscapeListener(handleClose);
  useEventListener('click', handleDialogClick);

  useEffect(() => {
    setDialogCounter((idCounter++).toString());
  }, []);

  const handleToggle = () => {
    isVisible ? handleClose() : handleOpen();
  };

  const handleOpen = () => {
    if (isVisible) return;

    setIsVisible(true);
  };

  const handleDialogHoverOpen = () => {
    if (triggerEvent !== 'hover') return;

    setIsVisible(true);
  };

  const handleDialogHoverClose = () => {
    if (triggerEvent !== 'hover') return;

    handleClose();
  };

  const setTriggerRef = (ref) => {
    triggerRef = ref;
  };

  const setTargetRef = (ref) => {
    targetRef = ref;
  };

  const content =
    typeof children === 'string' ? (
      <Paragraph size={400}>{children}</Paragraph>
    ) : (
      children
    );

  const shown = show || isVisible;

  const id = `kenobi-inline-dialog-${dialogCounter}`;

  return (
    <InlineDialogContainer>
      <InlineDialogTrigger
        role="button"
        aria-expanded={shown}
        aria-haspopup
        ref={setTriggerRef}
        onClick={handleToggle}>
        {trigger}
      </InlineDialogTrigger>

      <Transition appear in={shown} timeout={120} unmountOnExit>
        {(state) => (
          <Popper placement={placement} referenceElement={triggerRef}>
            {({ ref, style }) => (
              <FocusLock>
                <InlineDialogContent
                  id={id}
                  role="dialog"
                  theme={themeContext}
                  ref={(node) => {
                    setTargetRef(node);

                    ref(node);
                  }}
                  minWidth={minWidth}
                  minHeight={minHeight}
                  dialogWidth={width}
                  dialogHeight={height}
                  state={state}
                  placement={placement}
                  style={{ ...style }}
                  data-testid="kenobi-inline-dialog"
                  {...rest}>
                  {content}
                </InlineDialogContent>
              </FocusLock>
            )}
          </Popper>
        )}
      </Transition>
    </InlineDialogContainer>
  );
};

export default InlineDialog;
