import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet} from 'react-native';
import theme from "@theme"

const Button = ({
  primary,
  secondary,
  outline,
  full,
  transparent,
  buttonStyle,
  titleStyle,
  ...props
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        base: {
          height: 62,
          borderRadius: 31,
          width: '100%'
        },
        primary: {
          backgroundColor: theme.colors.primary[0],
          height: 60,
          borderRadius: 30,
          width: '100%'
        },
        full: {
          backgroundColor: theme.colors.primary[0],
          height: 60,
          borderRadius: -50,
          width: '100%'
        },
        secondary: {
          backgroundColor: theme.colors.primary[0],
          borderWidth: 1,
          
        },
        outline: {
          backgroundColor: theme.colors.primary[0],
          borderWidth: 2,
        },
        transparent: {
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
        primaryTitle: {
          color: 'white',
          fontSize: 19,
          letterSpacing: 1,
          fontFamily: theme.fontFamily
        },
        fullTitile: {
          color: 'white',
          fontSize: 19,
          letterSpacing: 1,
          fontWeight: '500',
          fontFamily: theme.fontFamily
        },
        secondaryTitle: {
          color: theme.colors.primary[0],
          fontSize: 19,
          letterSpacing: 1,
          fontFamily: theme.fontFamily
        },
        outlineTitle: {
          color: theme.colors.primary[0],
          fontSize: 19,
          letterSpacing: 1,
          fontFamily: theme.fontFamily
        },
      }),
    [theme],
  );

  return (
    <NativeButton
      accessibilityLabel={props.title}
      buttonStyle={{
        ...styles.base,
        ...(primary ? styles.primary : {}),
        ...(full ? styles.full : {}),
        ...(secondary ? styles.secondary : {}),
        ...(outline ? styles.outline : {}),
        ...(transparent ? styles.transparent : {}),
        ...(buttonStyle || {}),
      }}
      titleStyle={{
        ...(primary ? styles.primaryTitle : {}),
        ...(full ? styles.fullTitile : {}),
        ...(secondary ? styles.secondaryTitle : {}),
        ...(outline ? styles.outlineTitle : {}),
        ...(titleStyle || {}),
      }}
      {...props}
    />
  );
};

Button.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  buttonStyle: PropTypes.shape({}),
  titleStyle: PropTypes.shape({}),
};

export default Button;
