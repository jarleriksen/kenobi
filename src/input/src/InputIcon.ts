import styled from 'styled-components';

type Props = {
  left?: string;
  right?: string;
  top?: string;
};

export const InputIcon = styled.div<Props>`
  background-color: #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid #ebebeb;
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${({ top }) => (top ? top : '1.4rem')};
  z-index: 2;
  font-size: 1.9rem;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
