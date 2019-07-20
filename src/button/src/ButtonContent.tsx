import styled from 'styled-components';

interface Props {
  isLoading: boolean;
}

const ButtonContent = styled.span<Props>`
  display: flex;
  align-items: center;
  transition: opacity 0.3s;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  font-weight: 500;
`;

export default ButtonContent;
