import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
import ProgressLoader from 'rn-progress-loader';
import theme from '@theme';

const AppLoader = ({ loading, style }) => {
  return (
    <View style={[styles.containerView, style]}>
      <ProgressLoader
        visible={loading}
        isModal={true} isHUD={true}
        hudColor={theme.colors.background}
        color={theme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
});

export default AppLoader;