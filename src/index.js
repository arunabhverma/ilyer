/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import {
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import theme from '@theme';
import SplashScreen from 'react-native-splash-screen'
import OriginalApp from '@containers/app';
import IntroMain from '@containers/Intro';
import LoginScreens from '@containers/LoginScreens';
import Verification from '@containers/LoginScreens/Verification';
import OfferDetails from '../src/containers/Offers/OffersDetails';
import HotelDetails from '@containers/HotelDetails';
import BookingDetails from './containers/Booking/BookingDetails'
import FilterStack from './containers/Home/FilterStack'
import Booking from './containers/Home/Booking'
import HotelBooking from './containers/HotelDetails/HotelBooking'
import TabBar from "./containers/TabBar";

console.disableYellowBox = true
const Stack = createStackNavigator();
const AppNavigator = ({ token, userId }) => {
  useEffect(() => {
    SplashScreen.hide()
  });
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroMain"
          options={({ navigation }) => ({
            headerShown: false
          })}
          component={IntroMain}
        />
        <Stack.Screen
          name="LoginScreens"
          options={({ navigation }) => ({
            headerShown: false
          })}
          component={LoginScreens}
        />
        <Stack.Screen
          name="TabBar"
          options={({ navigation }) => ({
            headerShown: false
          })}
          component={TabBar}
        />
        <Stack.Screen
          name="OfferDetails"
          options={({ navigation }) => ({
            headerShown: false
          })}
          component={OfferDetails}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={({ navigation }) => ({
            headerTitle: (props) => null
          })}
        />
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <Stack.Screen
          name="BookingDetails"
          component={BookingDetails}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <Stack.Screen
          name="FilterStack"
          component={FilterStack}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <Stack.Screen
          name="BookingData"
          component={Booking}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <Stack.Screen
          name="HotelBooking"
          component={HotelBooking}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ConnectedAppNavigator = connect((state) => {
  const { token, userId } = state.user;
  return { token, userId };
}, {})(AppNavigator);

const AppWrapper = () => {
  return (
    <OriginalApp>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.card} />
      <ConnectedAppNavigator />
    </OriginalApp>
  );
};

export default AppWrapper;
