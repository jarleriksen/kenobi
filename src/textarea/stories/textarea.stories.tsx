import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Component from '@reach/component-component';
import Textarea from '../src/TextArea';

storiesOf('Textarea', module).add('basic', () => {
  return (
    <Wrapper>
      <Component initialState={{ value: '' }}>
        {({ state, setState }) => (
          <>
            <Textarea
              onChange={(e) => setState({ value: e.target.value })}
              defaultValue="bob"
            />
            {state.value}
          </>
        )}
      </Component>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 360px;
`;
