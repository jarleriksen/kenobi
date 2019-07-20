import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '..';

describe('Button', () => {
  test('it renders correctly', () => {
    const { getByTestId } = render(<Button>Hello!</Button>);

    const button = getByTestId('kenobi-button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Hello!');
  });

  test('it renders as an anchor tag', () => {
    const { container } = render(
      <Button isLink={true} href="https://example.com">
        Hello!
      </Button>,
    );

    const button = container.getElementsByTagName('a')[0];

    expect(button).toBeInTheDocument();
  });

  test('it renders icon before', () => {
    const { getByTestId } = render(<Button iconBefore="edit">Hello!</Button>);

    const button = getByTestId('kenobi-button');
    const icon = getByTestId('kenobi-icon');

    expect(button).toContainElement(icon);
  });

  test('it renders icon after', () => {
    const { getByTestId } = render(<Button iconAfter="edit">Hello!</Button>);

    const button = getByTestId('kenobi-button');
    const icon = getByTestId('kenobi-icon');

    expect(button).toContainElement(icon);
  });

  test('it renders spinner', () => {
    const { getByTestId } = render(<Button isLoading={true}>Hello!</Button>);

    const button = getByTestId('kenobi-button');
    const spinner = getByTestId('kenobi-spinner');

    expect(button).toContainElement(spinner);
  });
});
