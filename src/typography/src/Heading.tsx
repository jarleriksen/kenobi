import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme';

export interface HeadingProps {
  /**
   * Heading text
   */
  children: React.ReactNode | string;

  /**
   * Size of the heading
   */
  size?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  /**
   * Custom color of the Heading.
   */
  color?: string;

  /**
   * The HTML tag or custom component that will be rendered.
   */
  as?: any;
}

interface StyledProps {
  size?: number;
}

const Wrapper = styled.h2<StyledProps>`
  margin: 0;
  ${({ size, theme }) => theme.getHeadingStyle(size)};
  color: ${({ color, theme }) => theme.getTextColor(color)};
`;

const Heading = ({ size = 500, ...props }: HeadingProps) => {
  const themeContext = useContext(ThemeContext);
  const { children, as, ...rest } = props;

  return (
    <Wrapper theme={themeContext} as={as} size={size} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Heading;
