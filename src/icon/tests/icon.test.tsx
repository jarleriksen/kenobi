import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../';
import '@testing-library/jest-dom/extend-expect';

describe('Icon', () => {
  test('it renders correctly', () => {
    const { getByTestId, asFragment } = render(
      <Icon icon="edit" title="test" />,
    );

    const icon = getByTestId('kenobi-icon');

    expect(icon).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('contains accessibility title', () => {
    const { getByTestId, asFragment } = render(
      <Icon icon="edit" title="test" />,
    );

    const icon = getByTestId('kenobi-icon');

    expect(icon).toContainHTML('<title>test</title>');
    expect(asFragment()).toMatchSnapshot();
  });
});
