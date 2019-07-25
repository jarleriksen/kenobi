import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../src/Button';
import Component from '@reach/component-component';

storiesOf('Buttons', module).add('Common', () => (
  <Component
    initialState={{
      options: [
        { label: 'Height 24', value: 24 },
        { label: 'Height 32', value: 32 },
        { label: 'Height 40', value: 40 },
      ],
      value: 32,
    }}>
    {({ state, setState }) => (
      <>
        <h2 style={{ margin: '0' }}>Standard buttons</h2>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button height={state.value} marginRight={16}>
              Default
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100px',
            }}>
            <Button height={state.value} marginRight={16} intent="primary">
              Primary
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100px',
            }}>
            <Button height={state.value} marginRight={16} intent="success">
              Success
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100px',
            }}>
            <Button height={state.value} marginRight={16} intent="warning">
              Warning
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100px',
            }}>
            <Button height={state.value} marginRight={16} intent="danger">
              Danger
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100px',
            }}>
            <Button height={state.value} marginRight={16} isLoading={true}>
              Hello
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100px',
            }}>
            <Button
              height={state.value}
              marginRight={16}
              isLink={true}
              href="/test">
              Link
            </Button>
          </div>
        </div>
        <h2 style={{ margin: '1rem 0 0 0' }}>Icon buttons</h2>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button height={state.value} marginRight={16} iconBefore="chat">
              Icon before
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button marginRight={16} height={state.value} iconAfter="delete">
              Icon after
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              marginRight={16}
              height={state.value}
              iconAfter="arrow-right"
              isLink={true}
              href="/test">
              Link
            </Button>
          </div>
        </div>
      </>
    )}
  </Component>
));
