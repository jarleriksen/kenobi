import styled from 'styled-components';

interface StyledProps {
  state: number;
  minWidth: number;
  minHeight: number;
  dialogWidth?: number;
  dialogHeight?: number;
  placement: string;
}

const ANIMATION_DURATION = 120;
const distance = 8;

const horizontalOffset = {
  left: distance,
  right: -distance,
  top: 0,
  bottom: 0,
};
const verticalOffset = {
  bottom: -distance,
  top: distance,
  left: 0,
  right: 0,
};

const animations = (state, position) => {
  const transitions = {
    entering: {
      transform: `translate3d(${horizontalOffset[position]}px, ${verticalOffset[position]}px, 0)`,
    },
    entered: {
      opacity: 1,
    },
    exiting: {
      opacity: 0,
      transition: `${ANIMATION_DURATION}ms linear`,
      transform: `translate3d(${horizontalOffset[position] /
        2}px, ${verticalOffset[position] / 2}px, 0)`,
    },
  };

  return transitions[state];
};

const InlineDialogContent = styled.div<StyledProps>`
  position: fixed;
  z-index: 10;
  background-color: white;
  min-width: ${({ minWidth }) => minWidth}px;
  min-height: ${({ minHeight }) => minHeight}px;
  overflow: hidden;
  border-radius: 4px;
  opacity: 0;

  width: ${({ dialogWidth }) => `${dialogWidth}px` || null};
  height: ${({ dialogHeight }) => `${dialogHeight}px` || null};

  box-shadow: ${({ theme }) => `0 0 1px ${theme.colors.scales.neutral.N5},
    0 8px 10px -4px ${theme.colors.scales.neutral.N6}`};

  transition: transform ${ANIMATION_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1),
    opacity ${ANIMATION_DURATION}ms linear;

  ${({ state, placement }) => animations(state, placement)};
`;

export default InlineDialogContent;
