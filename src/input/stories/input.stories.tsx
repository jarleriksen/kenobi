import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Component from '@reach/component-component';
import { Input, TextField } from '..';

storiesOf('input', module)
  .add('text', () => {
    return (
      <Wrapper>
        <Input placeholder="Enter some text...." />
      </Wrapper>
    );
  })
  .add('field', () => {
    return (
      <Wrapper>
        <TextField
          name="project_language"
          label="A required text input field"
          placeholder="Enter some text...."
          description="Text input description"
          isRequired
          errorMessage="This field is required"
        />
      </Wrapper>
    );
  });

const Wrapper = styled.div`
  width: 360px;
`;
