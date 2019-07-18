import styled from 'styled-components';
import { Placement } from '../../constants';

interface Props {
  placement: string;
}

const placementStyles = {
  [Placement.LEFT]: {
    height: '100vh',
  },
  [Placement.RIGHT]: {
    height: '100vh',
  },
};

const DrawerContent = styled.div<Props>`
  max-height: 100vh;
  background-color: white;
  overflow-y: auto;
  padding: 16px;
  ${({ placement }) => placementStyles[placement]};
`;

export default DrawerContent;
