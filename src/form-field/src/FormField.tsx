import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '../../input';
import { Icon } from '../../icon';
import { Text, Paragraph } from '../../typography';
import { ThemeContext } from '../../theme/ThemeConsumer';

export type FormFieldProps = {
  /**
   * Field
   */
  children: React.ReactElement;

  /**
   * Label to show above the Input field
   */
  label?: string;

  /**
   * Passed to the label as htmlFor
   */
  labelFor?: string;

  /**
   * Short description under the Input field
   */
  description?: string;

  /**
   * Error message to show under the Input field
   */
  errorMessage?: string;

  /**
   * If the field is required.
   * This will show an astrix after the Label
   */
  isRequired?: boolean;
};

interface LabelProps {
  isRequired: boolean;
  marginBottom: number;
  forwardedAs: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
`;

const Label = styled(Text).attrs({ 'data-testid': 'kenobi-form-field-label' })<
  LabelProps
>`
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  font-weight: 500;

  &:after {
    content: ${({ isRequired }) => (isRequired ? "'*'" : null)};
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.text.danger};
  }
`;

const Description = styled(Paragraph).attrs({
  'data-testid': 'kenobi-form-field-description',
})`
  margin-bottom: 4px;
`;

const ErrorMessage = styled.div.attrs({
  'data-testid': 'kenobi-form-field-error-message',
})`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 4px;
`;

const FormField = (props: FormFieldProps) => {
  const themeContext = useContext(ThemeContext);
  const {
    children,
    label,
    labelFor,
    description,
    errorMessage,
    isRequired,
  } = props;

  return (
    <Wrapper data-testid="kenobi-form-field">
      {label && (
        <Label
          theme={themeContext}
          isRequired={!!isRequired}
          forwardedAs="label"
          htmlFor={labelFor || ''}
          marginBottom={description ? 0 : 4}>
          {label}
        </Label>
      )}
      {description && (
        <Description size={400} color="muted">
          {description}
        </Description>
      )}
      {children}
      {errorMessage && (
        <ErrorMessage theme={themeContext}>
          <Icon size={14} marginRight={8} icon="error" color="danger" />
          <Paragraph role="alert" size={300} color="danger">
            {errorMessage}
          </Paragraph>
        </ErrorMessage>
      )}
    </Wrapper>
  );
};

export default FormField;
