import React from 'react';
import { render } from '@testing-library/react';
import Overlay from '../src/Overlay';
import '@testing-library/jest-dom/extend-expect';

describe('Overlay', () => {
  test('is in portal when open', () => {
    const { getByTestId } = render(
      <Overlay
        isOpen={true}
        childrenWrapperStyles={{}}
        onRequestClose={() => {}}
        shouldCloseOnEsc={true}
        shouldCloseOnClick={true}>
        <div />
      </Overlay>,
    );

    expect(getByTestId('kenobi-overlay')).toBeInTheDocument();
  });

  test('is not in portal when closed', () => {
    const { getByTestId } = render(
      <Overlay
        isOpen={false}
        childrenWrapperStyles={{}}
        onRequestClose={() => {}}
        shouldCloseOnEsc={true}
        shouldCloseOnClick={true}>
        <div />
      </Overlay>,
    );

    const portal = getByTestId('kenobi-portal');
    const overlay: HTMLElement | null = document.querySelector(
      '[data-testid="kenobi-overlay"]',
    );

    expect(portal).not.toContainElement(overlay);
  });
});
