import React from 'react';

// import { Image } from 'react-native';

import {
  
  flex,
  justifySelf,
  alignSelf,
  order,
  display,
  maxWidth,
  minWidth,
  width,
  height,
  maxHeight,
  minHeight,
  position,
  size,
  space,
  resizeMode,
  accessibilityLabel

} from 'styled-system';

import styled from 'styled-components/native';


const BaseImage = styled.Image`
  ${space}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${display}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${position}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${order}
  ${resizeMode}
  ${accessibilityLabel}
`;

const Image = React.forwardRef(({ source, ...props }, ref) => {
  return <BaseImage ref={ref} source={source} {...props} />;
});

export default Image;
