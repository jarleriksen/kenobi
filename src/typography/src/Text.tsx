import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme';

const defaultProps = {
  size: 400,
  color: 'default',
  fontFamily: 'ui',
};

export interface TextProps {
  /**
   * Content to render if component is not used as an Input
   */
  children?: string;

  /**
   * Size of the text
   */
  size?: number;

  htmlFor?: string;

  /**
   * Font Family
   */
  fontFamily?: string;

  /**
   * Colour of the Text
   */
  color?: string;

  /**
   * The HTML tag or custom component that will be rendered.
   */
  as?: any;
}

const TextWrapper = styled.span<TextProps>`
  font-family: ${({ fontFamily, theme }) => theme.getFontFamily(fontFamily)};
  color: ${({ color, theme }) => theme.getTextColor(color)};
  ${({ size, theme }) => theme.getTextStyle(size)};
`;

const Text = (props: TextProps) => {
  const themeContext = useContext(ThemeContext);

  const { htmlFor } = props;

  return <TextWrapper htmlFor={htmlFor} theme={themeContext} {...props} />;
};

Text.defaultProps = defaultProps;

export default Text;
