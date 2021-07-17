import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { s, vs, ms } from 'react-native-size-matters/extend';
import { ScreenHeadingText, SecondaryText, ButtonText } from "@components";
import theme from '@theme';
import Upcoming from './Upcoming'
import Previous from './Previous'

const BookingStack = ({ matchesDetails, tournamentDetails }) => {
  const Tab = createMaterialTopTabNavigator();

  const TabStack = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.tabLable,
          pressOpacity: 1,
          pressColor: 1,
          activeTintColor: theme.colors.notification,
          inactiveTintColor: theme.colors.card,
          indicatorStyle: { backgroundColor: 'rgba(0, 0, 0, 0)' },
          style: styles.tabContainer,
        }}
      >
        <Tab.Screen
          name={'Upcoming'}
          component={Upcoming}
          initialParams={{ matchesDetails }}
        />
        <Tab.Screen
          name={'Previous'}
          component={Previous}
          initialParams={{ matchesDetails: matchesDetails }}
        />
      </Tab.Navigator >
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(250,250,250)" }}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: theme.colors.notification,
          paddingVertical: vs(5),
        }}
      >
        <ButtonText fontSize={ms(25)} color={"white"}>
          {"My Trips"}
        </ButtonText>
      </View>
      <TabStack />
    </View>
  );
};

const styles = StyleSheet.create({
  tabLable: {
    fontSize: ms(25),
    fontFamily: theme.fonts.SFProTextMedium,
    textTransform: 'capitalize'
  },
  tab: {
    width: '100%',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  tabContainer: {
    backgroundColor: 'black',
    shadowColor: theme.colors.card,
  },

});

export default BookingStack;