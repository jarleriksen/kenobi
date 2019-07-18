import React from 'react';
import { render } from '@testing-library/react';
import { Select } from '../';

describe('Select', () => {
  test('renders correctly', () => {
    const { getByTestId, asFragment } = render(<Select />);

    const select = getByTestId('kenobi-select');

    expect(select).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
