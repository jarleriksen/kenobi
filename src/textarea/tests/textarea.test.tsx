import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Textarea } from '../';

describe('TextArea', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Textarea />);

    const textarea = getByTestId('kenobi-textarea');

    expect(textarea).toBeInTheDocument();
  });
});
