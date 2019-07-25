import React, { useContext } from 'react';
import ReactSelect, { OptionProps, CommonProps } from 'react-select';
import styled from 'styled-components';
import { theme, ThemeContext } from '../../theme';

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
  position: relative;

  ${({ selectHeight }) =>
    theme.getTextStyle(theme.getTextSizeForControlHeight(selectHeight))};
`;

const customStyles = {
  multiValue: (provided: any, state: any) => ({
    ...provided,
    fontSize: '14px',
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    zIndex: '5',
  }),
};

const Select = ({ height = 32, ...props }: SelectProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <SelectWrapper
      data-testid="kenobi-select"
      theme={themeContext}
      selectHeight={height}>
      <ReactSelect {...props} styles={customStyles} />
    </SelectWrapper>
  );
};

export default Select;
