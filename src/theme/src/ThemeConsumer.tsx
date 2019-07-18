import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './index';

type Props = {
  children: any;
};

const ThemeContext = React.createContext(theme);

const ThemeConsumer = (props: Props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export { ThemeContext, ThemeConsumer };
