import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '../src/Dialog';
import { Button } from '../../button';
import '@testing-library/jest-dom/extend-expect';

describe('Dialog', () => {
  test('should be in portal when open', () => {
    const { getByTestId } = render(
      <Dialog isOpen={true} title="Dialog title" onRequestClose={() => {}}>
        <div title="insideDialog" />
      </Dialog>,
    );

    const portal = getByTestId('kenobi-portal');
    const dialog: HTMLElement | null = document.querySelector(
      '[data-testid="kenobi-dialog"]',
    );

    expect(portal).toContainElement(dialog);
  });

  test('close button has focus when first opened', () => {
    const { getByTestId } = render(
      <Dialog isOpen={true} title="Dialog title" onRequestClose={() => {}}>
        <div title="insideDialog" />
      </Dialog>,
    );

    expect(getByTestId('kenobi-dialog-close-button')).toHaveFocus();
  });

  test('can focus another element', () => {
    const { getByTestId } = render(
      <Dialog isOpen={true} title="Dialog title" onRequestClose={() => {}}>
        <Button data-autofocus>Hello</Button>
      </Dialog>,
    );

    expect(getByTestId('kenobi-button')).toHaveFocus();
  });
});
