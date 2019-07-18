import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./index";

type Props = {
  children: any;
};

const ThemeContext = React.createContext(theme);

const themeConsumer = (props: Props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default themeConsumer;

export { ThemeContext };
