import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme';

export interface TextAreaProps {
  /**
   * Name of the textarea.
   */
  name?: string;
  
  /**
   * Value of the textarea.
   */
  value?: string;

  /**
   * Default value of the textarea.
   */
  defaultValue?: string;

  /**
   * Whether the textarea should be disabled.
   */
  disabled?: boolean;

  /**
   * Placeholder of the textarea.
   */
  placeholder?: string;

  /**
   * onChange handler for the textarea.
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;

  /**
   * onBlur handler for the textarea.
   */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;

  /**
   * Whether to use native browser spellcheck.
   */
  spellCheck?: boolean;

  /**
   * Minimum number of rows to show.
   */
  minimumRows?: number;

  /**
   * Max height of the textarea.
   */
  maxHeight?: string | number;
}

const TextAreaElement = styled.textarea<TextAreaProps>`
  background: transparent;
  min-height: ${({ minimumRows = 1 }) => 20 * minimumRows}px;
  line-height: 1.5;
  max-width: 100%;
  width: 100%;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 10px;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border: 2px solid ${({ theme }) => theme.colors.palette.neutral.light};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.palette.blue.base};
  }

  ${({ theme }) => theme.getTextStyle(400)};
`;

const Textarea = ({ minimumRows = 1, ...rest }: TextAreaProps) => {
  const theme = useContext(ThemeContext);

  return (
    <TextAreaElement
      data-testid="kenobi-textarea"
      theme={theme}
      minimumRows={minimumRows}
      {...rest}
    />
  );
};

export default Textarea;
