import React, { useContext } from 'react';
import { IconSvgPaths16, IconSvgPaths20 } from '@blueprintjs/icons';
import { ThemeContext } from '../../theme/src/ThemeConsumer';

const SIZE_STANDARD = 16;
const SIZE_LARGE = 20;

const renderSvgPaths = (pathsSize: number, iconName: string) => {
  const svgPathsRecord: any =
    pathsSize === SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
  const pathStrings: any = svgPathsRecord[iconName];

  if (pathStrings === null) {
    return null;
  }

  return pathStrings.map((d: any, i: any) => (
    <path key={i} d={d} fillRule="evenodd" />
  ));
};

export interface IconProps {
  /**
   * color of the Icon
   */
  color?: string;

  /**
   * Icon type
   */
  icon: string;

  /**
   * Size of the icon
   */
  size?: number;

  /**
   * Accessible title
   */
  title?: string;

  /**
   * TextFieldProps that should be spread onto the SVG element.
   */
  svgProps?: any;

  /**
   * Any custom style
   */
  style?: any;

  /**
   * Margin left of the SVG element
   */
  marginLeft?: number;

  /**
   * Margin right of the SVG element
   */
  marginRight?: number;
}

/**
 * Based on https://github.com/palantir/blueprint/blob/d5d374539f/packages/core/src/components/icon/icon.tsx
 */
const Icon = (props: IconProps) => {
  const themeContext = useContext(ThemeContext);
  const {
    color,
    marginLeft,
    marginRight,
    icon,
    size,
    title,
    ...svgProps
  } = props;

  let { style = { marginLeft, marginRight } } = props;

  const iconSize = size ? size : SIZE_STANDARD;

  // Choose which pixel grid is most appropriate for given icon size
  const pixelGridSize = iconSize >= SIZE_LARGE ? SIZE_LARGE : SIZE_STANDARD;

  const paths = renderSvgPaths(pixelGridSize, icon);

  if (paths === null) {
    return null;
  }

  const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`;

  if (color !== undefined) {
    style = { ...style, fill: themeContext.getIconColor(color) };
  } else {
    style = { ...style, fill: themeContext.colors.palette.neutral.base };
  }

  return (
    <svg
      {...svgProps}
      style={style}
      data-icon={icon}
      width={iconSize}
      height={iconSize}
      viewBox={viewBox}
      data-testid="kenobi-icon">
      {title ? <title>{title}</title> : null}
      {paths}
    </svg>
  );
};

export default Icon;
