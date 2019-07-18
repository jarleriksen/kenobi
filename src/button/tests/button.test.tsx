import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '..';

describe('Button', () => {
  test('it renders correctly', () => {
    const { getByTestId, container, asFragment } = render(
      <Button>Hello!</Button>,
    );

    const button = getByTestId('kenobi-button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Hello!');
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders as an anchor tag', () => {
    const { getByTestId, container, asFragment } = render(
      <Button isLink={true} href="https://example.com">
        Hello!
      </Button>,
    );

    const button = container.getElementsByTagName('a')[0];

    expect(button).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders icon before', () => {
    const { getByTestId, container, asFragment } = render(
      <Button iconBefore="edit">Hello!</Button>,
    );

    const button = getByTestId('kenobi-button');
    const icon = getByTestId('kenobi-icon');

    expect(button).toContainElement(icon);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders icon after', () => {
    const { getByTestId, container, asFragment } = render(
      <Button iconAfter="edit">Hello!</Button>,
    );

    const button = getByTestId('kenobi-button');
    const icon = getByTestId('kenobi-icon');

    expect(button).toContainElement(icon);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders spinner', () => {
    const { getByTestId, container, asFragment } = render(
      <Button isLoading={true}>Hello!</Button>,
    );

    const button = getByTestId('kenobi-button');
    const spinner = getByTestId('kenobi-spinner');

    expect(button).toContainElement(spinner);
    expect(asFragment()).toMatchSnapshot();
  });
});
