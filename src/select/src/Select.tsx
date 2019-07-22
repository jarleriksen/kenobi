import React from 'react';
import ReactSelect, { OptionProps, CommonProps } from 'react-select';
import styled from 'styled-components';
import { theme } from '../../theme';

type ReactSelectProps = OptionProps & CommonProps;

export interface SelectProps extends ReactSelectProps {
  /**
   * Height of the Select input
   */
  height?: number;
}

interface StyledProps {
  selectHeight: number;
}

const SelectWrapper = styled.div<StyledProps>`
  width: 100%;
  height: ${({ selectHeight }) => selectHeight}px;

  ${({ selectHeight }) =>
    theme.getTextStyle(theme.getTextSizeForControlHeight(selectHeight))};
`;

const Select = ({ height = 32, ...props }: SelectProps) => {
  return (
    <SelectWrapper data-testid="kenobi-select" selectHeight={height}>
      <ReactSelect {...props} />
    </SelectWrapper>
  );
};

export default Select;
