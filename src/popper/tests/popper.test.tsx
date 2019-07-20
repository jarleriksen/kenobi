import React from 'react';
import { render } from '@testing-library/react';
import { Popper } from '../';
import { Button } from '../../button';
import '@testing-library/jest-dom/extend-expect';

describe('Popper', () => {
  test('renders children correctly', () => {
    const { getByTestId } = render(
      <Popper>
        {({ ref, style }) => {
          return <Button>Inside Popper</Button>;
        }}
      </Popper>,
    );

    const button = getByTestId('kenobi-button');

    expect(button).toBeInTheDocument();
  });
});
