import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme/src/ThemeConsumer';
import Transition from 'react-transition-group/Transition';
import { Paragraph } from '../../typography';
import { Portal } from '../../portal';
import { Popper } from '../../popper';
import { Placement } from '../../popper/src/Popper';
import TooltipContent from './TooltipContent';

export interface TooltipProps {
  /**
   * Position of the Tooltip
   */
  placement?: Placement;

  /**
   * If true, manually show the Tooltip
   */
  show?: boolean;

  /**
   * The content of the Tooltip
   */
  content: React.ReactNode | string;

  /**
   *  Toggle of the Tooltip
   */
  trigger: React.ReactNode;

  /**
   * Delay before tooltip is visible
   */
  animationDuration?: number;

  offset?: number;
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

const TooltipTrigger = styled.div`
  cursor: pointer;
`;

let tooltipIdCounter = 0;

const Tooltip = ({
  placement = 'top',
  animationDuration = 200,
  offset = 5,
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [timeout, setCustomTimeout] = useState<any>(undefined);
  const [tooltipId, setTooltipId] = useState<string>('0');
  const themeContext = useContext(ThemeContext);
  let targetRef: HTMLElement | undefined;

  const { show, content, trigger } = props;

  const onMouseEnter = () => {
    if (typeof show === 'boolean') return;
    clearTimeout(timeout);

    setIsVisible(true);
  };

  const setHoverTimeout = useCallback(() => {
    clearTimeout(timeout);

    setCustomTimeout(
      setTimeout(() => {
        if (!isVisible) {
          setIsVisible(false);
        }
      }, 1000),
    );
  }, [isVisible, timeout]);

  const onMouseLeave = () => {
    setIsVisible(false);

    setHoverTimeout();
  };

  useEffect(() => {
    setTooltipId(`kenobi-tooltip-${tooltipIdCounter++}`);
  }, []);

  const setTargetRef = (ref) => {
    targetRef = ref;
  };

  const tooltipContent =
    typeof content === 'string' ? (
      <Paragraph size={400} color="white">
        {content}
      </Paragraph>
    ) : (
      content
    );

  return (
    <TooltipContainer theme={themeContext}>
      <TooltipTrigger
        ref={setTargetRef}
        onMouseOverCapture={onMouseEnter}
        onMouseOut={onMouseLeave}
        theme={themeContext}
        data-testid="kenobi-tooltip-trigger">
        {trigger}
      </TooltipTrigger>

      <Transition appear in={isVisible || show} timeout={300} unmountOnExit>
        {(state) => (
          <Portal>
            <Popper placement={placement} referenceElement={targetRef}>
              {({ ref, style }) => (
                <TooltipContent
                  id={tooltipId}
                  ref={ref}
                  role="tooltip"
                  data-testid="kenobi-tooltip"
                  theme={themeContext}
                  state={state}
                  style={{ ...style }}
                  {...props}>
                  {tooltipContent}
                </TooltipContent>
              )}
            </Popper>
          </Portal>
        )}
      </Transition>
    </TooltipContainer>
  );
};

export default Tooltip;
