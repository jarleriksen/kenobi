import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Component from '@reach/component-component';
import { Button } from '../../button';
import Drawer from '../src/Drawer';
import { Heading } from '../../typography';

storiesOf('drawer', module).add('Drawer', () => {
  return (
    <Component initialState={{ isOpen: false, position: 'right' }}>
      {({ setState, state }) => (
        <Wrapper>
          <Drawer
            placement={state.position}
            isOpen={state.isOpen}
            width={250}
            onRequestClose={() => setState({ isOpen: false })}>
            <DrawerWrapper>
              <div>
                <Heading size={600}>Drawer Title</Heading>
              </div>
            </DrawerWrapper>
          </Drawer>
          {['left', 'right'].map((position) => (
            <Button
              key={position}
              marginRight={8}
              onClick={() => setState({ isOpen: true, position })}>
              Show {position}
            </Button>
          ))}
        </Wrapper>
      )}
    </Component>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const DrawerWrapper = styled.div`
  display: flex;
`;
