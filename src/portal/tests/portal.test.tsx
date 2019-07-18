import React from 'react';
import { render } from '@testing-library/react';
import { Portal } from '../';
import { Button } from '../../button';
import '@testing-library/jest-dom/extend-expect';

describe('Portal', () => {
  test('renders correctly', () => {
    const { getByTestId, asFragment } = render(
      <Portal>
        <div>bup</div>
      </Portal>,
    );

    const portal = getByTestId('kenobi-portal');

    expect(portal).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders children correctly', () => {
    const { getByTestId, asFragment } = render(
      <Portal>
        <Button>Test</Button>
      </Portal>,
    );

    const button = getByTestId('kenobi-button');

    expect(button).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
