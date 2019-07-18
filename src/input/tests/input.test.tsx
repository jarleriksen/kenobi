import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '../';
import '@testing-library/jest-dom/extend-expect';

describe('Input', () => {
  test('renders correctly', () => {
    const { getByTestId, asFragment } = render(<Input name="test-input" />);

    const input = getByTestId('kenobi-input');

    expect(input).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
