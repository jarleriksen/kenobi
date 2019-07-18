import React from 'react';
import styled from 'styled-components';

/**
 * Completely taken from https://github.com/reach/reach-ui/blob/master/packages/visually-hidden/src/index.js
 */

const Wrapper = styled.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
`;

const VisuallyHidden = (props) => {
  return <Wrapper {...props} />;
};

export default VisuallyHidden;
