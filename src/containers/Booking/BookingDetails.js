import React from "react";
import { View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import IGStoryCircle from "react-native-instagram-story-circle";
import theme from '@theme';
import {
  ScreenHeadingText,
  SecondaryText,
  ButtonText
} from "@components";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";

const BookingDetails = ({ navigation }) => {
  const HotelCard = () => {
    return (
      <View style={{ backgroundColor: 'rgb(239,239,239)', position: 'absolute', top: vs(100), alignSelf: 'center', flexDirection: 'row', marginTop: vs(20), borderRadius: ms(20), marginHorizontal: s(10) }}>
        <Image
          source={{
            uri: 'https://i.imgur.com/UPrs1EWl.jpg'
          }}
          style={{ height: vs(110), margin: ms(10), alignSelf: 'center', width: s(160), borderRadius: ms(20), borderBottomLeftRadius: ms(20) }}
          resizeMode="cover"
        />
        <View style={{ marginHorizontal: s(5), justifyContent: 'space-around', marginVertical: vs(10) }}>
          <ButtonText fontSize={ms(11)} color={'red'} >{'20/05/2021-26/05/2021'}</ButtonText>
          <View style={{ flexDirection: 'row', }}>
            <ButtonText fontSize={ms(14)} color={'black'} >{'Hotel Taj'}</ButtonText>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'} >{' Jaipur'}</ButtonText>
          </View>
          <SecondaryText fontSize={ms(10)}  >{'Guest-3(Adult-02,Kid-01)'}</SecondaryText>
          <SecondaryText fontSize={ms(10)}  >{'No. of Rooms-01'}</SecondaryText>
          <ButtonText fontSize={ms(14)} color={'red'} >{'Price - $180/night'}</ButtonText>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
      <View style={{ alignItems: 'center', backgroundColor: 'red', paddingVertical: vs(5) }}>
        <ButtonText fontSize={ms(25)} color={'white'} >{'Booking Details'}</ButtonText>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: vs(120) }} >

        <View style={{ height: vs(180), borderRadius: ms(5), }}>

          <Image
            source={{
              uri: 'https://i.imgur.com/UPrs1EWl.jpg'
            }}
            style={{ flex: 1, overflow: 'hidden', borderRadius: ms(5) }}
            resizeMode="cover"
          />

        </View>
        <HotelCard></HotelCard>
        <View style={{ flexDirection: 'row', marginTop: vs(100), alignItems: 'center' }}>
          <View style={{ marginLeft: s(25), }}>
            <ButtonText fontSize={ms(14)} color={'red'} >{'Rate & Review'}</ButtonText>
            <View style={{ flexDirection: 'row' }}>
              <IoniconsIcons
                name={'star'}
                color="black"
                size={ms(15)}
              />
              <IoniconsIcons
                name={'star'}
                color="black"
                size={ms(15)}
              />
              <IoniconsIcons
                name={'star'}
                color="black"
                size={ms(15)}
              />
              <IoniconsIcons
                name={'star'}
                color="black"
                size={ms(15)}
              />
              <IoniconsIcons
                name={'star'}
                color="black"
                size={ms(15)}
              />
            </View>

          </View>
          <ButtonText marginLeft={s(40)} fontSize={ms(14)} color={'red'} >{'Submit'}</ButtonText>
          <View>

          </View>

        </View>
        <ButtonText marginLeft={s(25)} marginTop={vs(10)} fontSize={ms(18)} color={'red'} >{'Booking Details'}</ButtonText>
        <ButtonText marginLeft={s(25)} marginTop={vs(5)} fontSize={ms(13)} color={'black'} >{'Booked on - 12/11/2020\nCheck-in - Checkout - 20/11/2020 - 22/11/2020 \nNumber of Guest - 03 (02 Adult, 01 Kid) \nNumber of Rooms - 01 (Super Deluxe room)'}</ButtonText>
        <ButtonText marginLeft={s(25)} marginTop={vs(10)} fontSize={ms(18)} color={'red'} >{'Bill Details'}</ButtonText>
        <View style={{ height: vs(1.5), marginTop: vs(2), backgroundColor: 'rgb(239,238,238)', marginHorizontal: vs(25) }} />
        <View style={{ flexDirection: 'row', marginVertical: vs(15), marginHorizontal: vs(25), justifyContent: 'space-between' }}>
          <ButtonText fontSize={ms(14)} color={'black'} >{'Your Trip'}</ButtonText>
          <ButtonText fontSize={ms(14)} color={'black'} >{'$540'}</ButtonText>
        </View>
        <View style={{ height: vs(1.5), marginTop: vs(2), backgroundColor: 'rgb(239,238,238)', marginHorizontal: vs(25) }} />
        <View style={{ flexDirection: 'row', marginVertical: vs(15), marginHorizontal: vs(25), justifyContent: 'space-between' }}>
          <ButtonText fontSize={ms(14)} color={'black'} >{'Coupon Savings'}</ButtonText>
          <ButtonText fontSize={ms(14)} color={'black'} >{'$540'}</ButtonText>
        </View>
        <View style={{ height: vs(1.5), marginTop: vs(2), backgroundColor: 'rgb(239,238,238)', marginHorizontal: vs(25) }} />
        <View style={{ flexDirection: 'row', marginVertical: vs(15), marginHorizontal: vs(25), justifyContent: 'space-between' }}>
          <ButtonText fontSize={ms(14)} color={'red'} >{'Total Bill'}</ButtonText>
          <ButtonText fontSize={ms(14)} color={'black'} >{'$540'}</ButtonText>
        </View>
        <View style={{ borderWidth: 1, borderStyle: 'dotted', marginTop: vs(2), backgroundColor: 'rgb(239,238,238)', marginHorizontal: vs(25) }} />
      </ScrollView>
    </View>
  );
};

export default BookingDetails;
