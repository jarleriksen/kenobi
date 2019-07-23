import React from 'react';
import { OptionProps, CommonProps } from 'react-select/src/types';
import { FormField } from '../../form-field';
import Select from './Select';

type ReactSelectProps = OptionProps & CommonProps;

export interface SelectFieldProps extends ReactSelectProps {
  /**
   * Label to show above the Select
   */
  label?: string;

  /**
   * Passed to the label as htmlFor
   */
  labelFor?: string;

  /**
   * Short description under the Select
   */
  description?: string;

  /**
   * Short note below the Select
   */
  note?: string;

  /**
   * Error message to show under the Select
   */
  errorMessage?: string | any;

  /**
   * If the field is required.
   * This will show an astrix after the Label
   */
  isRequired?: boolean;
}

const SelectField = (props: SelectFieldProps) => {
  const {
    label,
    labelFor,
    description,
    note,
    errorMessage,
    isRequired,
    ...rest
  } = props;

  return (
    <FormField
      label={label}
      labelFor={labelFor}
      isRequired={isRequired}
      description={description}
      errorMessage={errorMessage}>
      <Select {...rest} />
    </FormField>
  );
};

export default SelectField;
