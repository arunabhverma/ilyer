/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from 'react-native-splash-screen'
import theme from "@theme";
import HomeStack from "../Home";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import ProfileStack from "../Profile";
import { ms, s, vs } from "react-native-size-matters";
import BookingStack from "../Booking";
import OfferStack from "../Offers";
import SupportStack from "../Support";
import NotiStack from "../Notification";
import {
  ButtonText,
  SecondaryText,
} from "@components";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

console.disableYellowBox = true;

const TabBar = ({ navigation }) => {

  useEffect(() => {
    SplashScreen.hide()
  });

  const TabBarIconActive = ({ image, title }) => {
    return (
      <View style={{
        width: ms(64), top: vs(2), marginBottom: vs(10), shadowColor: "rgba(0,0,0,.60 )",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 10, height: ms(64), borderRadius: ms(32), backgroundColor: 'rgb(239,238,238)', alignItems: 'center'
      }}>
        <IoniconsIcons
          name={image}
          style={{ marginTop: vs(6) }}
          color="red"
          size={ms(20)}
        />
        <SecondaryText color="red" fontSize={ms(10)} marginTop={vs(5)} textAlign={'center'}>{title}</SecondaryText>
      </View>
    );
  };
  const TabBarIconInactive = ({ image, title }) => {
    return (
      <View style={{ top: vs(2), marginBottom: vs(10), backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center' }}>
        <IoniconsIcons
          name={image}
          style={{ marginTop: vs(6) }}
          color="rgb(193,193,193)"
          size={ms(20)}
        />
        <SecondaryText color="rgb(193,193,193)" fontSize={ms(10)} marginTop={vs(5)} textAlign={'center'}>{title}</SecondaryText>
      </View>
    );
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        allowFontScaling: false,

        keyboardHidesTabBar: true,
        tabStyle: {
          backgroundColor: 'rgba(0,0,0,0)'
        },
        style: {
          borderTopLeftRadius: 21,
          borderTopRightRadius: 21,
          backgroundColor: "rgb(239,238,238)",
          position: 'absolute',
          bottom: 0,
          padding: 10,
          height: vs(78),
          paddingHorizontal: s(5),
          zIndex: 8
        },

        labelStyle: {
          height: 0,
          letterSpacing: 0.12,
          shadowColor: theme.colors.card,
        },
      }}
    >
      <Tab.Screen
        name={"home"}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            (focused) ? <TabBarIconActive
              image={"home"}
              title={"Home"}
            /> : <TabBarIconInactive
              image={"home"}
              title={"Home"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Booking"}
        component={BookingStack}
        options={{
          tabBarIcon: ({ focused }) => (
            (focused) ? <TabBarIconActive
              image={"calendar-outline"}
              title={"Booking"}
            /> : <TabBarIconInactive
              image={"calendar-outline"}
              title={"Booking"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"OfferStack"}
        component={OfferStack}
        options={{
          tabBarIcon: ({ focused }) => (
            (focused) ? <TabBarIconActive
              image={"pricetag-outline"}
              title={"Offers"}
            /> : <TabBarIconInactive
              image={"pricetag-outline"}
              title={"Offers"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Support"}
        component={SupportStack}
        options={{
          tabBarIcon: ({ focused }) => (
            (focused) ? <TabBarIconActive
              image={"help-circle-outline"}
              title={"Support"}
            /> : <TabBarIconInactive
              image={"help-circle-outline"}
              title={"Support"}
            />

          ),
        }}
      />
      <Tab.Screen
        name={"profile"}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            (focused) ? <TabBarIconActive
              image={"md-person-outline"}
              title={"Profile"}
            /> : <TabBarIconInactive
              image={"md-person-outline"}
              title={"Profile"}
            />

          ),
        }}
      />
      <Tab.Screen
        name={"Noti"}
        component={NotiStack}

        options={{

          tabBarIcon: ({ focused }) => (
            (focused) ? <TabBarIconActive
              image={"notifications-outline"}
              title={"Notification"}
            /> : <TabBarIconInactive
              image={"notifications-outline"}
              title={"Notification"}
            />

          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
