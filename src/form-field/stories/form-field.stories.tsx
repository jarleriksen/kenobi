import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormField } from '../';
import { Input } from '../../input';

storiesOf('Form Field', module).add('Field', () => (
  <FormField
    label="A required text input field"
    description="Text input description"
    errorMessage="This field is required">
    <Input placeholder="suuup" />
  </FormField>
));
