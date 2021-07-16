import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
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
  backgroundColor,
  padding,
  borders,
  boxShadow,
  borderRadius,
  overflow,
} from 'styled-system';
import styled from 'styled-components/native';

// Follow https://css-tricks.com/snippets/css/a-guide-to-flexbox/ for items

const Box = styled.View`
    ${space}
    ${alignItems}
    ${alignContent}
    ${justifyContent}
    ${flexWrap}
    ${flexBasis}
    ${flexDirection}
    ${flex}
    ${justifySelf}
    ${alignSelf}
    ${order}
    ${display}
    ${maxWidth}
    ${minWidth}
    ${position}
    ${width}
    ${height}
    ${maxHeight}
    ${minHeight}
    ${size}
    ${backgroundColor}
    ${padding}
    ${borders}
    ${boxShadow}
    ${borderRadius}
    ${overflow}
  `;

export default Box;
