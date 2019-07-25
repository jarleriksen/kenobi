import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Component from '@reach/component-component';
import { Select, SelectField } from '../../select';

storiesOf('select', module)
  .add('Select', () => {
    return (
      <Component initialState={{ isOpen: false, position: 'right' }}>
        {({ setState, state }) => (
          <Wrapper>
            <Select
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          </Wrapper>
        )}
      </Component>
    );
  })
  .add('SelectField', () => {
    return (
      <Component initialState={{ isOpen: false, position: 'right' }}>
        {({ setState, state }) => (
          <Wrapper>
            <SelectField
              label="A required text input field"
              placeholder="Enter some text...."
              description="Text input description"
              note="This is a note"
              isRequired
              errorMessage="This field is required"
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          </Wrapper>
        )}
      </Component>
    );
  });

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;
