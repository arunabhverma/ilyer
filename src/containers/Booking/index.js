import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { s, vs, ms } from 'react-native-size-matters/extend';
import { ScreenHeadingText, SecondaryText, ButtonText } from "@components";
import theme from '@theme';
import Info from './index1'
import Scoring from './index1'

const BookingStack = ({ matchesDetails, tournamentDetails }) => {
  const Tab = createMaterialTopTabNavigator();

  const TabStack = () => {
    return (
      <Tab.Navigator
        swipeEnabled={true}
        tabBarOptions={{
          labelStyle: styles.tabLable,
          pressOpacity: 1,
          pressColor: 1,
          tabStyle: styles.tab,
          activeTintColor: theme.colors.notification,
          inactiveTintColor: theme.colors.card,
          style: styles.tabContainer,
        }}
      >
        <Tab.Screen
          name={'Upcoming'}
          component={Info}
          initialParams={{ matchesDetails }}
        />
        <Tab.Screen
          name={'Previous'}
          component={Scoring}
          initialParams={{ matchesDetails: matchesDetails }}
        />
      </Tab.Navigator>
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
      <View style={{ flexDirection: "row", backgroundColor: "black" }}>
        <TouchableOpacity
          style={{ alignItems: "center", flex: 1, paddingVertical: vs(5) }}
        >
          <ButtonText fontSize={ms(25)} color={"white"}>
            {"Upcoming"}
          </ButtonText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", flex: 1, paddingVertical: vs(5) }}
        >
          <ButtonText fontSize={ms(25)} color={"red"}>
            {"Previous"}
          </ButtonText>
        </TouchableOpacity>
      </View>
      <TabStack />
      {/* <FlatList
        data={[0, 1, 2, 3, 4, 5, 6]}
        renderItem={HotelCard}
        contentContainerStyle={{ paddingBottom: s(120) }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </View>
  );

};



const styles = StyleSheet.create({
  tabLable: {
    fontSize: ms(25),
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: theme.fonts.SFProTextMedium,
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