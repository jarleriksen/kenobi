import styled from 'styled-components';

const ANIMATION_DURATION = 240;

interface StyledProps {
  state: string;
}

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
};

const animations = {
  entering: `animation: fadeInAnimation ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`,
  entered: `animation: fadeInAnimation ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`,
  exiting: `animation: fadeOutAnimation ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`,
};

const OverlayWrapper = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  &:before {
    background-color: ${({ theme }) =>
      theme.colors.palette.neutral.transparentBase};
    left: 0;
    top: 0;
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    content: '';

    ${({ state }) => animations[state] || null};
  }

  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOutAnimation {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export default OverlayWrapper;
