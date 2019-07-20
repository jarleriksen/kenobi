import React from 'react';
import { render } from '@testing-library/react';
import { FormField } from '../';
import '@testing-library/jest-dom/extend-expect';

describe('Form Field', () => {
  test('it renders correct elements', () => {
    const { getByTestId } = render(
      <FormField
        label="A required text input field"
        description="Text input description"
        errorMessage="This field is required">
        <span>Form Field</span>
      </FormField>,
    );

    const formField = getByTestId('kenobi-form-field');
    const label = getByTestId('kenobi-form-field-label');
    const description = getByTestId('kenobi-form-field-description');
    const errorMessage = getByTestId('kenobi-form-field-error-message');

    expect(formField).toContainElement(label);
    expect(formField).toContainElement(description);
    expect(formField).toContainElement(errorMessage);
  });
});
