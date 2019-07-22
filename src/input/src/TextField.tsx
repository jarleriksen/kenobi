import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { FormField } from '../../form-field';
import Input from './Input';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Custom ID
   * Default: Auto generated value
   */
  id?: string;

  /**
   * Height of the input
   */
  height?: number;

  /**
   * Label to show above the input
   */
  label?: string;

  /**
   * Passed to the label as htmlFor
   */
  labelFor?: string;

  /**
   * Short description under the input
   */
  description?: string;

  /**
   * Short note below the Input field
   */
  note?: string;

  /**
   * Error message to show under the input
   */
  errorMessage?: string | any;

  /**
   * If the field is required.
   * This will show an astrix after the Label
   */
  isRequired?: boolean;
}

let idCounter = 1;

const TextField = (props: TextFieldProps) => {
  const [inputCounter, setInputCounter] = useState();

  const {
    id,
    label,
    labelFor,
    description,
    note,
    errorMessage,
    isRequired,
    ...rest
  } = props;

  useEffect(() => {
    setInputCounter((idCounter++).toString());
  }, []);

  const inputId = id ? id : `kenobi-input-field-${inputCounter}`;

  return (
    <FormField
      label={label}
      labelFor={labelFor || inputId}
      isRequired={isRequired}
      description={description}
      errorMessage={errorMessage}>
      <Input id={inputId} {...rest} />
    </FormField>
  );
};

export default TextField;
