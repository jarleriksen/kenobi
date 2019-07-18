import React from "react";
import ThemeConsumer from "./ThemeConsumer";

const WithTheme = (WrappedComponent: any) => {
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

export default WithTheme;
