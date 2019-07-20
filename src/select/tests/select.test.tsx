import React from 'react';
import { render } from '@testing-library/react';
import { Select } from '../';
import '@testing-library/jest-dom/extend-expect';

describe('Select', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Select />);

    const select = getByTestId('kenobi-select');

    expect(select).toBeInTheDocument();
  });
});
