import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tooltip from '../src/Tooltip';
import '@testing-library/jest-dom/extend-expect';

describe('Tooltip', () => {
  test('Tooltip renders on mouseOver', () => {
    const { getByTestId, asFragment, container } = render(
      <Tooltip content="I am a tooltip" trigger={<div>Hello</div>} />,
    );

    fireEvent.mouseOver(getByTestId('kenobi-tooltip-trigger'), {
      key: 'onmouseover',
    });

    expect(getByTestId('kenobi-tooltip')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('Tooltip renders with manual show', () => {
    const { getByTestId, asFragment, container } = render(
      <Tooltip
        show={true}
        content="I am a tooltip"
        trigger={<div>Hello</div>}
      />,
    );

    expect(getByTestId('kenobi-tooltip')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
