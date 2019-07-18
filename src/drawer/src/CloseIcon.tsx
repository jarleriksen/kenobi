import React from 'react';
import { Button } from '../../button';
import { VisuallyHidden } from '../../visually-hidden';
import { Icon } from '../../icon';
import styled, { css } from 'styled-components';
import { PlacementType } from '../../constants/src/Placement';
import { Placement } from '../../constants';

interface Props {
  onRequestClose: () => void;
  placement: PlacementType;
}

interface StyledProps {
  placement: PlacementType;
}

const placementStyles = {
  [Placement.LEFT]: css`
    top: 10px;
    right: -50px;
  `,
  [Placement.RIGHT]: css`
    top: 10px;
    left: -50px;
  `,
};

const Wrapper = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  transition: background-color 200ms ease 0s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  ${({ placement }) => placementStyles[placement]};
`;

const CloseIcon = (props: Props) => {
  const { onRequestClose, placement } = props;

  return (
    <Wrapper placement={placement}>
      <Button
        tabIndex={0}
        intent="none"
        onClick={onRequestClose}
        data-testid="kenobi-drawer-close-button">
        <VisuallyHidden>Close</VisuallyHidden>
        <Icon
          size={20}
          aria-hidden
          icon={placement === Placement.RIGHT ? 'arrow-right' : 'arrow-left'}
          color="white"
        />
      </Button>
    </Wrapper>
  );
};

export default CloseIcon;
