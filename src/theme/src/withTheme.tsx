import React from 'react';
import { ThemeConsumer } from './ThemeConsumer';

export const withTheme = (WrappedComponent: any) => {
  return class extends React.Component {
    render() {
      return (
        <ThemeConsumer>
          <WrappedComponent {...this.props} />
        </ThemeConsumer>
      );
    }
  };
};
