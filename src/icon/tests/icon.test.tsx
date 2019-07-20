import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../';
import '@testing-library/jest-dom/extend-expect';

describe('Icon', () => {
  test('it renders correctly', () => {
    const { getByTestId } = render(<Icon icon="edit" title="test" />);

    const icon = getByTestId('kenobi-icon');

    expect(icon).toBeInTheDocument();
  });

  test('contains accessibility title', () => {
    const { getByTestId } = render(<Icon icon="edit" title="test" />);

    const icon = getByTestId('kenobi-icon');

    expect(icon).toContainHTML('<title>test</title>');
  });
});
