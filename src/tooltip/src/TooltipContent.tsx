import styled from 'styled-components';

interface Props {
  state: number;
}

const animations = {
  entering: { opacity: 1, visibility: 'visible', transform: 'scale(1)' },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const TooltipContent = styled.div<Props>`
  position: fixed;
  color: white;
  background: ${({ theme }) => theme.colors.palette.neutral.transparentBase};
  padding: 4px 8px;
  text-decoration: none;
  z-index: 30;
  border-radius: 4px;

  ${({ state }) => animations[state]};

  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.175);
  transition-duration: 300ms;
  transition-property: opacity, transform;
  transition: opacity 300ms ease-in-out;
`;

export default TooltipContent;
