import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Component from '@reach/component-component';
import Button from '../../button/src/Button';
import Overlay from '../src/Overlay';

storiesOf('overlay', module).add('Overlay', () => (
  <Component initialState={{ isOpen: false }}>
    {({ setState, state }) => (
      <Wrapper>
        <Button onClick={() => setState({ isOpen: true })}>Open Overlay</Button>
        <Overlay
          isOpen={state.isOpen}
          shouldCloseOnClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={() => setState({ isOpen: false })}>
          <div>children</div>
        </Overlay>
      </Wrapper>
    )}
  </Component>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
