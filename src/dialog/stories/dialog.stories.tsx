import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Dialog from '../src/Dialog';
import Component from '@reach/component-component';
import Button from '../../button/src/Button';
import { getFontFamily } from '../../theme/src/helpers';

storiesOf('dialog', module)
  .add('Dialog', () => {
    return (
      <Component initialState={{ isOpen: false }}>
        {({ setState, state }) => (
          <Wrapper fontFamily={getFontFamily('ui')}>
            <Button onClick={() => setState({ isOpen: true })}>
              Open Dialog
            </Button>
            <Dialog
              isOpen={state.isOpen}
              dialogTitle="Dialog title"
              onRequestClose={() => setState({ isOpen: false })}>
              <DialogWrapper>Dialog content</DialogWrapper>
            </Dialog>
          </Wrapper>
        )}
      </Component>
    );
  })
  .add('nested dialog', () => {
    return (
      <Component initialState={{ isOpen: false }}>
        {({ setState, state }) => (
          <Wrapper fontFamily={getFontFamily('ui')}>
            <Button onClick={() => setState({ isOpen: true })}>
              Open Dialog
            </Button>
            <Dialog
              isOpen={state.isOpen}
              dialogTitle="Dialog title"
              onRequestClose={() => setState({ isOpen: false })}>
              <Wrapper fontFamily={getFontFamily('ui')}>
                <Component initialState={{ isNestedOpen: false }}>
                  {({ setState, state }) => (
                    <Wrapper fontFamily={getFontFamily('ui')}>
                      <Button onClick={() => setState({ isNestedOpen: true })}>
                        Open Dialog
                      </Button>
                      <Dialog
                        isOpen={state.isNestedOpen}
                        dialogTitle="Dialog title"
                        shouldCloseOnEsc={false}
                        onRequestClose={() =>
                          setState({ isNestedOpen: false })
                        }>
                        <DialogWrapper>Dialog content</DialogWrapper>
                      </Dialog>
                    </Wrapper>
                  )}
                </Component>
              </Wrapper>
            </Dialog>
          </Wrapper>
        )}
      </Component>
    );
  });

const Wrapper = styled.div<{ fontFamily: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ fontFamily }) => fontFamily};
`;

const DialogWrapper = styled.div`
  height: 1200px;
`;
