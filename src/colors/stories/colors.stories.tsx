import React from 'react';
import { storiesOf } from '@storybook/react';
import Colors from './Colors';

storiesOf('colors', module).add('overview', () => (
  <div>
    <Colors />
  </div>
));
