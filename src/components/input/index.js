import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  View
} from "react-native";
import Box from '../box';
import Text from '../text';
import { s, ms } from "react-native-size-matters";

import theme from "@theme";

const InputBox = ({ 
    title, 
    textContentType, 
    autoFocus, 
    placeholder, 
    returnKeyType,
    keyboardType,
    value,
    name,
    onChangeText,
    required,
    editable
 }) => {
   
  return (
    <Box style={{ marginVertical: ms(15), }}>
    <Box style={styles.formBox}>
      <Box
        style={{
          marginTop: ms(-12),
          marginLeft: ms(20),
          borderBottomWidth: 0,
          borderBottomColor: "rgba(0, 0, 0,0.1)",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          backgroundColor: theme.colors.card,
        }}
      >
        <Text style={{ textAlign: "left" }}>{ title }</Text>
      </Box>
      <TextInput
        placeholder={ placeholder || "Enter"}
        value={ value }
        defaultValue={value}
        placeholderTextColor={theme.colors.text}
        textContentType={ textContentType || "none"}
        allowFontScaling={false}
        autoCapitalize={"none"}
        editable={ editable || true }
        returnKeyType={ returnKeyType || "done"}
        keyboardType={ keyboardType || "default"}
        onChangeText={(text) => onChangeText({
          name, 
          text
        })}
        style={{
          paddingHorizontal: ms(20),
          paddingVertical: ms(15),
          fontSize: s(13),
          fontFamily: theme.fontFamily
        }}
      />
    </Box>
      { !value && required ? <Text style={{ fontSize: 14, color: "red", marginTop: ms(8), marginLeft: ms(20)}}>Required</Text>: <View />}
    </Box>
  );
};

InputBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const styles = StyleSheet.create({
  formContainer: {
    // margin: 29,
    width: "100%",
    backgroundColor: theme.colors.card,
  },
  formBox: {
    
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0,0.3)",
    borderRadius: 5,
  },
});

export default InputBox;
