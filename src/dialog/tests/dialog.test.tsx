import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '../src/Dialog';
import { Button } from '../../button';
import '@testing-library/jest-dom/extend-expect';

describe('Dialog', () => {
  test('should not be in portal when closed', () => {
    const { getByTestId, container, asFragment } = render(
      <Dialog
        isOpen={false}
        dialogTitle="Dialog title"
        onRequestClose={() => {}}>
        <div title="insideDialog" />
      </Dialog>,
    );

    const portal = getByTestId('kenobi-portal');
    const dialog: HTMLElement | null = document.querySelector(
      '[data-testid="kenobi-dialog"]',
    );

    expect(portal).not.toContainElement(dialog);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be in portal when open', () => {
    const { getByTestId, container, asFragment } = render(
      <Dialog
        isOpen={true}
        dialogTitle="Dialog title"
        onRequestClose={() => {}}>
        <div title="insideDialog" />
      </Dialog>,
    );

    const portal = getByTestId('kenobi-portal');
    const dialog: HTMLElement | null = document.querySelector(
      '[data-testid="kenobi-dialog"]',
    );

    expect(portal).toContainElement(dialog);
    expect(asFragment()).toMatchSnapshot();
  });

  test('close button has focus when first opened', () => {
    const { getByTestId, asFragment } = render(
      <Dialog
        isOpen={true}
        dialogTitle="Dialog title"
        onRequestClose={() => {}}>
        <div title="insideDialog" />
      </Dialog>,
    );

    expect(getByTestId('kenobi-dialog-close-button')).toHaveFocus();
    expect(asFragment()).toMatchSnapshot();
  });

  test('can focus another element', () => {
    const { getByTestId, asFragment } = render(
      <Dialog
        isOpen={true}
        dialogTitle="Dialog title"
        onRequestClose={() => {}}>
        <Button data-autofocus>Hello</Button>
      </Dialog>,
    );

    expect(getByTestId('kenobi-button')).toHaveFocus();
    expect(asFragment()).toMatchSnapshot();
  });
});
