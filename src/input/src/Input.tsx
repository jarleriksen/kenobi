import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Id of the input
   */
  id?: string;

  /**
   * Height of the input
   */
  height?: number;
}

interface StyledProps {
  inputHeight: number;
}

const InputElement = styled.input<StyledProps>`
  ${({ inputHeight, theme }) =>
    theme.getTextStyle(theme.getTextSizeForControlHeight(inputHeight))};
  height: ${({ inputHeight }) => inputHeight}px;
  color: ${({ theme }) => theme.getTextColor('default')};
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.palette.neutral.light};
  border-radius: 4px;
  background-color: white;
  padding-left: ${({ inputHeight }) => Math.round(inputHeight / 3.2)}px;
  padding-right: ${({ inputHeight }) => Math.round(inputHeight / 3.2)}px;
  width: 100%;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.scales.neutral.N6};
  }

  &:focus {
    z-index: 2;
    outline: none;
    border-color: ${({ theme }) => theme.colors.palette.blue.base};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.palette.neutral.lightest};
  }
`;

const Input = ({ height = 32, ...props }: InputProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <InputElement
      theme={themeContext}
      inputHeight={height}
      {...props}
      data-testid="kenobi-input"
    />
  );
};

export default Input;
