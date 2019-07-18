import React from 'react';
import { render } from '@testing-library/react';
import { TextField } from '../';
import '@testing-library/jest-dom/extend-expect';

describe('TextField', () => {
  test('renders correctly', () => {
    const { getByTestId, asFragment } = render(<TextField />);

    const textField = getByTestId('kenobi-form-field');

    expect(textField).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
