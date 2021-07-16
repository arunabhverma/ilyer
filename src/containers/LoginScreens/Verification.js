import React, { useState, useMemo, useEffect } from "react";
import { Image, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import theme from '@theme';
import {
  AppLoader,
  ButtonText,
  SecondaryText,
  ScreenHeadingText,
} from "@components";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { connect } from 'react-redux';
import axios from 'axios';
import { ms, vs, s } from "react-native-size-matters/extend";
import * as action from '../../store/user/actions';

const Verification = ({ navigation, route, registerUser }) => {
  const mobileNumber = route.params.mobileNumber;
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verification = () => {
    setLoading(true)
    if (value) {
      let data = {
        "mobile_no": `${mobileNumber}`,
        "otp": `${value}`,
      }
      registerUser(data).then((res) => {
        console.log('otp res', res.payload.data)
        if (res.payload.data && res.payload.status === 200) {
          setLoading(false)
          navigation.replace('TabBar')
        } else {
          setLoading(false)
          Alert.alert('Login', `${res.payload.data.message}`)
        }
      })
    }
    else {
      setLoading(false);
      Alert.alert('Verification', 'Enter your one time password');
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.card, }}>
      <Image
        style={{ height: vs(150), width: s(260), alignSelf: 'center' }}
        source={require('@images/logo.png')}
        resizeMode={"contain"}
      />
      <View style={{
        width: '100%', backgroundColor: theme.colors.card, borderRadius: s(55)
      }} >
        <Image
          style={{ height: vs(150), width: s(260), alignSelf: 'center' }}
          source={require('@images/signupPic.png')}
          resizeMode={"contain"}
        />
        <View style={{ marginTop: vs(35), alignItems: 'center', marginHorizontal: s(60) }}>
          <SecondaryText fontSize={24}>{'Verification'}</SecondaryText>
          <View style={{ marginTop: vs(20) }}></View>
          <SecondaryText fontSize={14} textAlign={'center'}>{'A 5-Digit PIN has been sent to your email. Enter it below to continue'}</SecondaryText>
        </View>
      </View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <ScreenHeadingText
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </ScreenHeadingText>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        // onPress={() => navigation.replace('TabBar')}
        onPress={() => verification()}
        style={{ height: vs(40), backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginTop: vs(40), marginHorizontal: s(25), borderRadius: ms(35), }}>
        <ButtonText>{'CONTINUE'}</ButtonText>
      </TouchableOpacity>
      <AppLoader loading={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  boxStyle: {
    flex: 1,
    backgroundColor: theme.colors.card,
    alignItems: 'center',
    paddingHorizontal: s(33),
  },
  textStyle: {
    fontSize: ms(13),
    color: theme.colors.loginBlack,
    textAlign: 'center',
    fontFamily: theme.fonts.SFProTextMedium,
  },
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerTitle: {
    height: vs(100),
    width: s(160),
    marginTop: vs(20),
    justifyContent: 'flex-end',
  },
  root: {
    flex: 1,
    alignSelf: 'center',
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  codeFieldRoot: {
    marginTop: vs(30),
    marginBottom: vs(60),
    marginHorizontal: s(20)
  },
  cell: {
    width: ms(40),
    height: ms(40),
    marginHorizontal: s(10),
    lineHeight: ms(38),
    fontSize: ms(20),
    borderWidth: 2,
    borderRadius: ms(5),
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: 'red',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: data => dispatch(action.registerUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(Verification)