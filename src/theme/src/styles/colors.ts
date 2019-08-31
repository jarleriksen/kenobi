const palette = {
  base: '#3452ff',
};

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

  N1A: 'rgba(67, 90, 111, 0.04)',
  N2A: 'rgba(67, 90, 111, 0.06)',
  N3A: 'rgba(67, 90, 111, 0.09)',
  N4A: 'rgba(67, 90, 111, 0.14)',
  N5A: 'rgba(67, 90, 111, 0.3)',
  N6A: 'rgba(67, 90, 111, 0.47)',
  N7A: 'rgba(67, 90, 111, 0.7)',
  N8A: 'rgba(67, 90, 111, 0.81)',
};

const blue = {
  lightest: '#dadfff',
  light: '#8799ff',
  base: '#3452ff',
  dark: '#20329c',
};

const red = {
  lightest: '#ffd7dd',
  light: '#ffaeba',
  base: '#ff3a57',
  dark: '#cd2a42',
};

const orange = {
  lightest: '#ffd9c5',
  light: '#ffb289',
  base: '#d9692c',
  dark: '#ac5323',
};

const yellow = {
  lightest: '#fffade',
  light: '#ffef92',
  base: '#cbb329',
  dark: '#9b8920',
};

const green = {
  lightest: '#ebffe8',
  light: '#baffae',
  base: '#287c19',
  dark: '#18490f',
};

const cyan = {
  lightest: '#e4fffb',
  light: '#33fbde',
  base: '#24b39e',
  dark: '#0f473f',
};

const intent = {
  success: green.base,
  info: '#2992ca',
  danger: red.base,
  warning: '#e66f2f',
};

const fills = {
  none: {
    color: neutral.base,
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
    backgroundColor: '#6028c8',
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
