import { colors } from './styles';
import Intent from '../../constants/src/Intent';
import { fontFamilies, headings, text, paragraphs } from './styles/typography';

/**
 * Utility function to get theme presets from an object
 *
 * @param object
 * @param keyOrValue
 */
const themedProperty = (object, keyOrValue) => {
  // Check if there is a preset in the collection for the property.
  if (Object.prototype.hasOwnProperty.call(object, keyOrValue)) {
    return object[keyOrValue];
  }

  // Return value if no preset could be found
  return keyOrValue;
};

/**
 * @param {String} intent
 * @return {Object} color, background-color
 */
const getButtonAppearanceByIntent = (intent: string) => {
  switch (intent) {
    case Intent.NONE:
      return colors.intent.none;
    case Intent.DEFAULT:
      return colors.intent.default;
    case Intent.PRIMARY:
      return colors.intent.primary;
    case Intent.SUCCESS:
      return colors.intent.success;
    case Intent.DANGER:
      return colors.intent.danger;
    case Intent.WARNING:
      return colors.intent.warning;

    default:
      return colors.intent.none;
  }
};

/**
 * @param fontFamily
 */
const getFontFamily = (fontFamily: string) => {
  return themedProperty(fontFamilies, fontFamily);
};

/**
 * @param color
 */
const getIconColor = (color: string) => {
  return themedProperty(colors.icon, color);
};

/**
 * @param size
 */
const getTextStyle = (size: number) => {
  return themedProperty(text, size);
};

/**
 * @param color
 */
const getTextColor = (color: string) => {
  return themedProperty(colors.text, color);
};

/**
 * @param size
 */
const getParagraphStyle = (size: number) => {
  return themedProperty(paragraphs, size);
};

/**
 * @param height
 */
const getTextSizeForControlHeight = (height: number) => {
  if (height <= 24) return 300;
  if (height <= 28) return 300;
  if (height <= 32) return 300;
  if (height <= 36) return 400;
  if (height <= 40) return 400;

  return 500;
};

/**
 * @param height
 */
const getIconSizeForButton = (height: number) => {
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;

  return 20;
};

/**
 * @param size
 */
const getHeadingStyle = (size: number) => {
  return themedProperty(headings, size);
};

export {
  themedProperty,
  getButtonAppearanceByIntent,
  getFontFamily,
  getIconColor,
  getTextStyle,
  getTextColor,
  getParagraphStyle,
  getTextSizeForControlHeight,
  getIconSizeForButton,
  getHeadingStyle,
};
