import palx from 'palx';

export const palette = palx('#3452ff');

const neutral = {
  lightest: '#F9F9FB',
  light: '#E4E7EB',
  base: '#425A70',
  dark: '#234361',
  transparentBase: 'rgba(67, 90, 111, 0.90)',
};

const neutralScales = {
  N1: '#F9F9FB',
  N2: '#F5F6F7',
  N3: '#EDF0F2',
  N4: '#E4E7EB',
  N5: '#C7CED4',
  N6: '#A6B1BB',
  N7: '#7B8B9A',
  N8: '#66788A',
  N9: '#425A70',
  N10: '#234361',
};

const blue = {
  color: palette.indigo,
  lightest: palette.indigo[2],
  light: palette.indigo[6],
  base: palette.base,
  dark: palette.indigo[9],
};

const red = {
  color: palette.red,
  lightest: palette.red[2],
  light: palette.red[4],
  base: palette.red[7],
  dark: palette.red[8],
};

const orange = {
  color: palette.orange,
  lightest: palette.orange[2],
  light: palette.orange[4],
  base: palette.orange[7],
  dark: palette.orange[8],
};

const yellow = {
  color: palette.yellow,
  lightest: palette.yellow[0],
  light: palette.yellow[1],
  base: palette.yellow[5],
  dark: palette.yellow[7],
};

const green = {
  color: palette.green,
  lightest: palette.green[0],
  light: palette.green[1],
  base: palette.green[8],
  dark: palette.green[9],
};

const cyan = {
  color: palette.cyan,
  lightest: palette.cyan[0],
  light: palette.cyan[2],
  base: palette.cyan[6],
  dark: palette.cyan[9],
};

const intent = {
  success: green.base,
  info: palette.blue[7],
  danger: red.base,
  warning: palette.orange[6],
};

const fills = {
  none: {
    color: 'inherit',
    backgroundColor: 'transparent',
  },
  neutral: {
    color: 'white',
    backgroundColor: neutral.base,
  },
  blue: {
    color: 'white',
    backgroundColor: palette.base,
  },
  red: {
    color: 'white',
    backgroundColor: red.base,
  },
  orange: {
    color: 'white',
    backgroundColor: orange.base,
  },
  yellow: {
    color: 'white',
    backgroundColor: yellow.base,
  },
  green: {
    color: 'white',
    backgroundColor: green.base,
  },
  cyan: {
    color: 'white',
    backgroundColor: cyan.base,
  },
  purple: {
    color: 'white',
    backgroundColor: palette.violet[7],
  },
};

export default {
  fills,
  palette: {
    neutral,
    blue,
    red,
    orange,
    yellow,
    green,
    cyan,
  },
  scales: {
    neutral: neutralScales,
  },
  appearance: {
    default: neutral.light,
    primary: palette.base,
    fills: fills,
    palette: palette,
  },
  text: {
    default: neutral.base,
    muted: neutralScales.N7,
    disabled: neutral.base,
    selected: palette.base,
    dark: neutral.dark,

    ...intent,
  },
  icon: {
    default: neutral.base,
    disabled: neutral.light,
    selected: palette.base,

    ...intent,
  },
  intent: {
    none: fills.none,
    default: fills.neutral,
    primary: fills.blue,
    success: fills.green,
    danger: fills.red,
    warning: fills.orange,
  },
};
