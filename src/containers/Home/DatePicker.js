import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { s, vs } from 'react-native-size-matters/extend';
import { PlainText } from '@components';
import theme from '@theme';

const DateRBsheet = ({ onDonePress, onCloseRB, mode, minimumDate }) => {
  const [value, onChangeValue] = useState(new Date());

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCloseRB}>
          <PlainText style={{ color: theme.colors.notification }}>{'Cancel'}</PlainText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDonePress(value)}>
          <PlainText style={{ color: theme.colors.notification }}>{'Done'}</PlainText>
        </TouchableOpacity>
      </View>
      <View style={styles.picker}>
        <DatePicker
          date={value}
          minimumDate={minimumDate ? minimumDate : new Date()}
          mode={mode}
          onDateChange={(date) => onChangeValue(date)}
          androidVariant={"iosClone"}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: s(20),
    justifyContent: 'center',
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: vs(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})
export default DateRBsheet;