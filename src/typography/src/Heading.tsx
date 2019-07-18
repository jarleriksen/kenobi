import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme/ThemeConsumer';

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
  size?: number;

  /**
   * The HTML tag or custom component that will be rendered.
   */
  as?: any;
}

interface StyledProps {
  size?: number;
}

const Wrapper = styled.h2<StyledProps>`
  flex: 1;
  margin: 0;

  ${({ size, theme }) => theme.getHeadingStyle(size)};
`;

const Heading = (props: HeadingProps) => {
  const themeContext = useContext(ThemeContext);
  const { children, size, as } = props;

  return (
    <Wrapper theme={themeContext} as={as} size={size} {...props}>
      {children}
    </Wrapper>
  );
};

Heading.defaultProps = defaultProps;

export default Heading;
