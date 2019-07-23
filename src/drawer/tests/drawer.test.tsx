import React from 'react';
import { render } from '@testing-library/react';
import { Drawer } from '..';
import { Button } from '../../button';
import '@testing-library/jest-dom/extend-expect';

describe('Drawer', () => {
  test('should be in portal when open', () => {
    const { getByTestId } = render(
      <Drawer isOpen={true} onRequestClose={() => {}}>
        Content
      </Drawer>,
    );

    const portal = getByTestId('kenobi-portal');
    const drawer: HTMLElement | null = document.querySelector(
      '[data-testid="kenobi-drawer"]',
    );

    expect(portal).toContainElement(drawer);
  });

  test('close button has focus when first opened', () => {
    const { getByTestId } = render(
      <Drawer isOpen={true} onRequestClose={() => {}}>
        <div title="insideDrawer" />
      </Drawer>,
    );

    expect(getByTestId('kenobi-drawer-close-button')).toHaveFocus();
  });

  test('can autofocus another element', () => {
    const { getByTestId } = render(
      <Drawer isOpen={true} onRequestClose={() => {}}>
        <Button data-autofocus>Hello</Button>
      </Drawer>,
    );

    expect(getByTestId('kenobi-button')).toHaveFocus();
  });

  test('contains aria-labelledby', () => {
    const { getByTestId } = render(
      <Drawer isOpen={true} ariaLabel="test-drawer" onRequestClose={() => {}}>
        Content
      </Drawer>,
    );

    const drawer = getByTestId('kenobi-drawer');

    expect(drawer).toHaveAttribute('aria-labelledby', 'test-drawer');
  });
});
