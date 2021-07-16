import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { vs, ms } from 'react-native-size-matters/extend';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import theme from '@theme';

class TextInputField extends Component {
  constructor(props) {
    super(props);
    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
    this.state = {
      isPassword: this.props.isPassword,
    };
  }

  _onChangeText = (updatedValue) => {
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText(updatedValue);
    }
  };

  renderPasswordAccessory() {
    let { isPassword } = this.state;
    let name = isPassword ? 'eye' : 'eye-off';
    let color =
      this.props.value.trim().length == 0
        ? theme.colors.gray216
        : 'red';
    return (
      <IoniconsIcons
        onPress={() => {
          this.setState({ isPassword: !this.state.isPassword });
        }}
        name={name}
        color={color}
        size={ms(20)}
        style={{ marginHorizontal: ms(8) }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextField
          label={this.props.title}
          value={this.props.value}
          activ
          textColor={theme.colors.gray51}
          multiline={this.props.multiline}
          style={[styles.textInput, this.props.textInputStyles]}
          underlineColorAndroid='rgba(0,0,0,0)'
          maxLength={this.props.multiline ? 200 : 25}
          onChangeText={this._onChangeText}
          secureTextEntry={this.state.isPassword}
          keyboardType={this.props.keyboardType}
          lineWidth={1}
          renderRightAccessory={
            this.props.isPassword ? this.renderPasswordAccessory : null
          }
          labelOffset={{
            x0: 0,
            y0: 0,
            x1: 0,
            y1: -10,
          }}
          baseColor={theme.colors.lightGray}
          tintColor={theme.colors.lightGray}
          {...this.props.otherTextInputProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    fontSize: ms(16),
    flex: 1,
    fontFamily: theme.fonts.SFProTextRegular,
  },
  titleStyles: {
    color: theme.colors.textInputFieldTitle,
    fontFamily: theme.fonts.SFProTextRegular,
  },
});

export default TextInputField;
