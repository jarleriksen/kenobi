import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme';

interface DefaultProps {
  size?: number;
}

const defaultProps = {
  size: 500,
};

export interface HeadingProps extends DefaultProps {
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
  color: ${({ color, theme }) => theme.getTextColor(color)};
  ${({ size, theme }) => theme.getHeadingStyle(size)};
`;

const Heading = (props: HeadingProps) => {
  const themeContext = useContext(ThemeContext);
  const { children, size, as, ...rest } = props;

  return (
    <Wrapper theme={themeContext} as={as} size={size} {...rest}>
      {children}
    </Wrapper>
  );
};

Heading.defaultProps = defaultProps;

export default Heading;
