import React from 'react';
import { Popper as ReactPopper } from 'react-popper';

export { Manager, Reference } from 'react-popper';

export type Placement =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';

export interface PopperProps {
  /**
   * The element to be positioned
   */
  children: (props: any) => React.ReactNode;

  /**
   * Placement of the Popper element
   */
  placement?: Placement;

  /**
   * Offset from the reference element the Popper
   */
  offset?: number | string;

  /**
   * Element to position popper element relative to
   */
  referenceElement?: HTMLElement;
}

const Popper = ({
  offset = '0, 8px',
  placement = 'bottom',
  ...props
}: PopperProps) => {
  const { children, referenceElement } = props;

  const modifiers = {
    offset: {
      enabled: true,
      offset: offset,
    },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
    },
  };

  return (
    <ReactPopper
      positionFixed
      modifiers={modifiers}
      placement={placement}
      {...(referenceElement ? { referenceElement } : {})}>
      {children}
    </ReactPopper>
  );
};

export default Popper;
