import { colors } from '../styles';

const fontFamilies = {
  display: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  ui: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
};

const headings = {
  900: {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    fontFamily: fontFamilies.display,
    color: colors.text.dark,
  },
  800: {
    fontSize: '29px',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '-0.2px',
    fontFamily: fontFamilies.display,
    color: colors.text.dark,
  },
  700: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: '-0.07px',
    fontFamily: fontFamilies.display,
    color: colors.text.dark,
  },
  600: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    fontFamily: fontFamilies.display,
    color: colors.text.dark,
  },
  500: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    fontFamily: fontFamilies.ui,
    color: colors.text.dark,
  },
  400: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    fontFamily: fontFamilies.ui,
    color: colors.text.dark,
  },
  300: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    fontFamily: fontFamilies.ui,
    color: colors.text.dark,
  },
  200: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.text.muted,
  },
  100: {
    fontSize: '11px',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '16px',
    letterSpacing: '0.6px',
    fontFamily: fontFamilies.ui,
    color: colors.text.muted,
  },
};

const text = {
  600: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    fontFamily: fontFamilies.display,
  },
  500: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    fontFamily: fontFamilies.ui,
  },
  400: {
    // Default
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    fontFamily: fontFamilies.ui,
  },
  300: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0',
    fontFamily: fontFamilies.ui,
  },
};

const paragraphs = {
  500: {
    ...text[500],
    lineHeight: '24px',
  },
  400: {
    ...text[400],
    lineHeight: '21px',
  },
  300: {
    ...text[300],
    lineHeight: '18px',
  },
};

export { fontFamilies, headings, text, paragraphs };
