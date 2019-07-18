import styled from 'styled-components';

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
};

const animations = (state: string, animationDuration: number) => {
  const transitions = {
    entering: `animation: open ${animationDuration}ms ${animationEasing.deceleration} both`,
    entered: `animation: open ${animationDuration}ms ${animationEasing.deceleration} both`,
    exiting: `animation: close ${animationDuration}ms ${animationEasing.acceleration} both`,
  };

  return transitions[state];
};

interface WrapperProps {
  width?: number;
  maxWidth: string;
  maxHeight: string;
  marginX: string;
  marginY: string;
  state: string;
  animationDuration: number;
}

const DialogWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: ${({ width }) => `${width}px`};
  border-radius: 8px;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};

  margin: ${({ marginX, marginY }) => `${marginY} ${marginX}`};

  ${({ state, animationDuration }) =>
    animations(state, animationDuration) || null};

  @keyframes open {
    from {
      transform: scale(0.8);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes close {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(0.8);
      opacity: 0;
    }
  }
`;

export default DialogWrapper;
