import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InlineDialog } from '../';
import { Button } from '../../button';
import { Input } from '../../input';
import '@testing-library/jest-dom/extend-expect';

describe('Inline Dialog', () => {
  test('should not be in document when closed', () => {
    const { getByTestId, asFragment } = render(
      <InlineDialog trigger={<div>Open</div>}>Test</InlineDialog>,
    );

    const inlineDialog = document.querySelector(
      '[data-testid="kenobi-inline-dialog"]',
    );

    expect(inlineDialog).not.toBeInTheDocument();
  });

  test('should be in document when open', () => {
    const { getByTestId } = render(
      <InlineDialog trigger={<Button>Open</Button>}>Test</InlineDialog>,
    );

    fireEvent.click(getByTestId('kenobi-button'));

    expect(getByTestId('kenobi-inline-dialog')).toBeInTheDocument();
  });

  test('should be in document on manual show', () => {
    const { getByTestId } = render(
      <InlineDialog show={true} trigger={<Button>Open</Button>}>
        sup
      </InlineDialog>,
    );

    expect(getByTestId('kenobi-inline-dialog')).toBeInTheDocument();
  });

  test('can focus element inside dialog', () => {
    const { getByTestId } = render(
      <InlineDialog trigger={<Button>Open</Button>}>
        <Input data-autofocus />
      </InlineDialog>,
    );

    fireEvent.click(getByTestId('kenobi-button'));

    expect(getByTestId('kenobi-input')).toHaveFocus();
  });
});
