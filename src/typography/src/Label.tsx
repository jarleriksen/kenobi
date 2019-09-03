import React from 'react';
import Text from './Text';
import { TextProps } from './Text';

const Label = (props: TextProps) => {
  return <Text as="label" fontWeight={500} {...props} />;
};

export default Label;
