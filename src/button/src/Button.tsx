import React, { useContext, ButtonHTMLAttributes } from 'react';
import { Spinner } from '../../spinner';
import { ThemeContext } from '../../theme';
import { Icon } from '../../icon';
import ButtonWrapper from './ButtonWrapper';
import ButtonContent from './ButtonContent';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button text
   */
  children: React.ReactNode;

  /**
   * Intent of the button.
   */
  intent?: 'none' | 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * Size of the button
   */
  height?: number;

  /**
   * Icon before the button text
   */
  iconBefore?: string;

  /**
   * Icon after the button text
   */
  iconAfter?: string;

  /**
   * Margin left
   */
  marginLeft?: number;

  /**
   * Margin right
   */
  marginRight?: number;

  /**
   * Should this button be an anchor element
   */
  isLink?: boolean;

  /**
   * If link, this will be the href
   */
  href?: string;

  /**
   * If the button should show a Spinner
   */
  isLoading?: boolean;

  /**
   * If the button is disabled
   */
  disabled?: boolean;

  /**
   * OnClick Handler
   */
  onClick?: () => void;

  /**
   * Tab index for the button
   */
  tabIndex?: number;
}

const Button = ({
  isLink = false,
  height = 36,
  intent = 'default',
  isLoading = false,
  ...props
}: ButtonProps) => {
  const themeContext = useContext(ThemeContext);

  const { children, disabled, iconBefore, iconAfter, ...rest } = props;

  const buttonStyles = themeContext.getButtonAppearanceByIntent(intent);
  const iconSize = themeContext.getIconSizeForButton(height);

  return (
    <ButtonWrapper
      as={isLink ? 'a' : undefined}
      theme={themeContext}
      disabled={isLoading || disabled}
      buttonHeight={height}
      intent={intent}
      data-testid="kenobi-button"
      {...rest}>
      {isLoading && <Spinner size={Math.round(height / 2)} />}
      <ButtonContent isLoading={isLoading}>
        {iconBefore && (
          <Icon
            icon={iconBefore}
            size={iconSize}
            color={buttonStyles.color}
            marginLeft={-Math.round((height / 2) * 0.2)}
            marginRight={Math.round(iconSize * 0.7)}
          />
        )}
        {children}
        {iconAfter && (
          <Icon
            icon={iconAfter}
            size={iconSize}
            color={buttonStyles.color}
            marginRight={-Math.round((height / 2) * 0.2)}
            marginLeft={Math.round(iconSize * 0.7)}
          />
        )}
      </ButtonContent>
    </ButtonWrapper>
  );
};

export default Button;
