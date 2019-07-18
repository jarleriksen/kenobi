import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme/ThemeConsumer';

type defaultProps = {
  size: number;
  color: string;
};

const DefaultProps: defaultProps = {
  size: 400,
  color: 'default',
};

export interface ParagraphProps {
  /**
   * Role of the Paragraph.
   * e.g Alert
   */
  role?: string;

  /**
   * Text size of the Paragraph.
   */
  size?: number;

  /**
   * Custom color of the Paragraph.
   */
  color?: string;

  /**
   * Content of the Paragraph.
   */
  children: React.ReactNode;
}

const ParagraphWrapper = styled.p<ParagraphProps>`
  margin: 0;
  color: ${({ color, theme }) => theme.getTextColor(color)};
  ${({ size, theme }) => theme.getParagraphStyle(size)};
`;

const Paragraph = (props: ParagraphProps) => {
  const themeContext = useContext(ThemeContext);
  const { children, ...rest } = props;

  return (
    <ParagraphWrapper theme={themeContext} {...rest}>
      {children}
    </ParagraphWrapper>
  );
};

Paragraph.defaultProps = DefaultProps;

export default Paragraph;
