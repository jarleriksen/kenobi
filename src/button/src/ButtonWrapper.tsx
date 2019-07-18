import styled from 'styled-components';

interface Props {
  /**
   * How thick should the Button be
   */
  buttonSize?: number;

  /**
   * Height of the Button
   */
  buttonHeight: number;

  /**
   * Margin right of the Button
   */
  marginRight?: number;

  /**
   * What's the intent of the button?
   * Default: default
   */
  intent?: string;
}

const ButtonWrapper = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  margin: 0 ${({ marginRight }) => marginRight || 0}px 0 0;

  min-height: ${({ buttonHeight }) => buttonHeight}px;
  max-height: ${({ buttonHeight }) => buttonHeight}px;
  padding-right: ${({ buttonHeight }) => Math.round(buttonHeight / 2)}px;
  padding-left: ${({ buttonHeight }) => Math.round(buttonHeight / 2)}px;

  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;

  ${({ intent, theme }) => theme.getButtonAppearanceByIntent(intent)};
  ${({ buttonHeight, theme }) =>
    theme.getTextStyle(theme.getTextSizeForControlHeight(buttonHeight))};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;

    &:hover {
      transform: none;
    }
  }
`;

export default ButtonWrapper;
