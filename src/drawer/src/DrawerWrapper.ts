import styled, { keyframes, css } from 'styled-components';
import { Placement } from '../../constants';
import {
  leftSlideInAnimation,
  leftSlideOutAnimation,
  rightSlideInAnimation,
  rightSlideOutAnimation,
} from './keyframes';

const ANIMATION_DURATION = 240;

interface Props {
  state: string;
  width: number | string;
  placement: string;
}

const placementStyles = {
  [Placement.LEFT]: {
    height: '100vh',
    maxWidth: '100vw',
    left: 0,
    right: 'auto',
  },
  [Placement.RIGHT]: {
    height: '100vh',
    maxWidth: '100vw',
    right: 0,
    left: 'auto',
  },
};

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
};

const withTransitions = (animateIn, animateOut, state) => {
  const transitions = {
    entering: css`
      animation: ${animateIn} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    `,
    entered: css`
      animation: ${animateIn} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    `,
    exiting: css`
      animation: ${animateOut} ${ANIMATION_DURATION}ms
        ${animationEasing.acceleration} both;
    `,
  };

  return transitions[state];
};

const animationStyles = (placement, state) => {
  const animations = {
    [Placement.LEFT]: css`
      transform: translateX(-100%);
      ${withTransitions(leftSlideInAnimation, leftSlideOutAnimation, state)};
    `,
    [Placement.RIGHT]: css`
      transform: translateX(100%);
      ${withTransitions(rightSlideInAnimation, rightSlideOutAnimation, state)};
    `,
  };

  return animations[placement];
};

const DrawerWrapper = styled.div<Props>`
  position: absolute;
  width: ${({ width }) => width}px;

  ${({ placement }) => placementStyles[placement]};
  ${({ state, placement }) => animationStyles(placement, state)};
`;

export default DrawerWrapper;
