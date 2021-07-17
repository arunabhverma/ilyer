import React from 'react';
import { s, vs, ms } from 'react-native-size-matters/extend';
import {
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  fontSize,
  letterSpacing,
  color,
  space,
  fontStyle,
  marginTop,
  paddingTop,
  paddingBottom,
  flexWrap,
  width,
  marginRight,
  marginLeft,
} from 'styled-system';
import styled from 'styled-components/native';
import theme from '@theme';

const Text = styled.Text`
  ${fontSize}
  ${fontFamily}
    ${textAlign}
    ${lineHeight}
    ${fontWeight}
    ${letterSpacing}
    ${color}
    ${space}
    ${fontStyle}
    ${marginRight}
    ${marginLeft}
    ${marginTop}
    ${paddingTop}
    ${paddingBottom}
    ${flexWrap}
    ${width}
`;

Text.defaultProps = {
  fontSize: ms(16),
  color: theme.colors.card,
  fontFamily: theme.fonts.SFProTextRegular,
};

const ScreenHeadingText = (props) => (
  <Text
    color={theme.colors.text}
    fontSize={ms(32)}
    fontFamily={theme.fonts.SFProDisplayBold}
    letterSpacing={0.29}
    {...props}
  />
);

const SectionHeadingText = (props) => (
  <Text
    fontSize={ms(19)}
    color={theme.colors.card}
    fontFamily={theme.fonts.SFProTextRegular}
    letterSpacing={0.29}
    {...props}
  />
);

const PlainText = (props) => (
  <Text
    color={theme.colors.lightGray}
    fontSize={ms(16)}
    textAlign={"center"}
    fontFamily={theme.fonts.SFProTextRegular}
    {...props}
  />
);

const SecondaryText = (props) => (
  <Text
    color={theme.colors.text}
    fontSize={12}
    letterSpacing={0.14}
    fontFamily={theme.fonts.SFProTextRegular}
    {...props}
  />
);
const ButtonText = (props) => (
  <Text
    color={theme.colors.card}
    fontSize={ms(18)}
    letterSpacing={0.08}
    fontFamily={theme.fonts.SFProTextMedium}
    {...props}
  />
);

const ErrorText = (props) => (
  <Text
    color={theme.colors.text}
    fontSize={ms(15)}
    fontFamily={theme.fonts.SFProTextMedium}
    {...props}
  />
);

export {
  ScreenHeadingText,
  SectionHeadingText,
  SecondaryText,
  PlainText,
  ErrorText,
  ButtonText
};

export default Text;

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
