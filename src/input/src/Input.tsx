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
  border: none;
  border-radius: 4px;
  background-color: white;
  padding-left: ${({ inputHeight }) => Math.round(inputHeight / 3.2)}px;
  padding-right: ${({ inputHeight }) => Math.round(inputHeight / 3.2)}px;
  box-shadow: ${({ theme }) =>
    `inset 0 0 0 1px ${theme.colors.scales.neutral.N5}, inset 0 1px 2px ${theme.colors.scales.neutral.N4}`};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.scales.neutral.N6};
  }

  &:focus {
    z-index: 2;
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
