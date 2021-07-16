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

const OffersDetails = ({ navigation, route }) => {
  const { item } = route.params;
  const HotelCard = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ width: s(260), marginLeft: s(20), height: vs(120), position: 'absolute', marginTop: vs(140), alignSelf: 'center', borderRadius: ms(15), backgroundColor: 'rgb(234,233,233)' }}>
        <View style={{ width: s(260), justifyContent: 'space-between', flexDirection: 'row', marginTop: vs(45), position: 'absolute' }}>
          <View style={{ backgroundColor: 'rgb(249,249,249)', marginLeft: -vs(15), width: vs(30), height: vs(30), borderBottomRightRadius: vs(15), borderTopRightRadius: vs(15) }}></View>
          <View style={{ backgroundColor: 'rgb(249,249,249)', marginRight: -vs(15), width: vs(30), height: vs(30), borderBottomLeftRadius: vs(15), borderTopLeftRadius: vs(15) }}></View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: vs(5), justifyContent: 'space-between', alignItems: 'center', marginHorizontal: s(5) }}>
          <SecondaryText fontSize={ms(11)} color={'red'} >{'#Hotel'}</SecondaryText>
          <SecondaryText fontSize={ms(11)} color={'red'} >{'EXPIRES IN 10d 12h 40m '}</SecondaryText>
        </View>
        <View style={{ flexDirection: 'row', marginTop: vs(5), marginLeft: s(20), alignItems: 'center', marginHorizontal: s(5) }}>
          <Image
            source={{
              uri: `https://iylerooms.com/public//${item.offer_image}`,
            }}
            style={{ height: vs(65), width: s(65), alignSelf: 'center', overflow: 'hidden', borderRadius: ms(15) }}
            resizeMode="cover"
          />
          <View style={{ marginHorizontal: s(5), flex: 1 }}>
            <SecondaryText fontSize={ms(14)} numberOfLines={1}>{item.promotion_name}</SecondaryText>
            <View style={{ flexDirection: 'row', marginBottom: vs(5) }}>
              <SecondaryText fontSize={ms(14)} color={'red'} >{'Sale : '}</SecondaryText>
              <SecondaryText fontSize={ms(14)}  >{'Jaipur'}</SecondaryText>
            </View>
            <SecondaryText fontSize={ms(12)} color={'red'} >{'View Details'}</SecondaryText>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
      <View style={{ alignItems: 'center', backgroundColor: 'red', paddingVertical: vs(5) }}>
        <ButtonText fontSize={ms(25)} color={'white'} >{'Offer Details'}</ButtonText>
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
        <View style={{ flexDirection: 'row', marginTop: vs(100), alignItems: 'center', marginHorizontal: s(20) }}>
          <SecondaryText fontSize={ms(13)} color={'black'} >{'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'}</SecondaryText>
        </View>
        <View style={{ flexDirection: 'row', borderWidth: vs(1), borderColor: 'red', alignItems: 'center', height: vs(50), alignSelf: 'center', justifyContent: 'space-around', paddingHorizontal: s(20), marginTop: vs(20) }}>
          <SecondaryText fontSize={ms(28)} color={'red'} >{'HJJ21HK'}</SecondaryText>
          <IoniconsIcons
            name={'md-copy-outline'}
            color="red"
            style={{ marginLeft: s(10) }}
            size={ms(28)}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: vs(20), alignItems: 'center', marginHorizontal: s(20) }}>
          <SecondaryText fontSize={ms(13)} color={'black'} >{'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, '}</SecondaryText>
        </View>
        <View style={{ marginTop: vs(15), marginHorizontal: s(20) }}>
          <SecondaryText fontSize={ms(18)} color={'red'} >{'What do you get ?'}</SecondaryText>
          <View style={{ marginTop: vs(10), marginHorizontal: s(10), flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: ms(6), borderRadius: ms(3), backgroundColor: 'rgb(193,193,193)', marginRight: s(10), width: ms(6) }} />
            <SecondaryText fontSize={ms(12)} color={'black'} >{'Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'}</SecondaryText>
          </View>
          <View style={{ marginTop: vs(10), marginHorizontal: s(10), flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: ms(6), borderRadius: ms(3), backgroundColor: 'rgb(193,193,193)', marginRight: s(10), width: ms(6) }} />
            <SecondaryText fontSize={ms(12)} color={'black'} >{'Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'}</SecondaryText>
          </View>
        </View>
        <View style={{ marginTop: vs(15), marginHorizontal: s(20) }}>
          <SecondaryText fontSize={ms(18)} color={'red'} >{'What do you get ?'}</SecondaryText>
          <View style={{ marginTop: vs(10), marginHorizontal: s(10), flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: ms(6), borderRadius: ms(3), backgroundColor: 'rgb(193,193,193)', marginRight: s(10), width: ms(6) }} />
            <SecondaryText fontSize={ms(12)} color={'black'} >{'Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'}</SecondaryText>
          </View>
          <View style={{ marginTop: vs(10), marginHorizontal: s(10), flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: ms(6), borderRadius: ms(3), backgroundColor: 'rgb(193,193,193)', marginRight: s(10), width: ms(6) }} />
            <SecondaryText fontSize={ms(12)} color={'black'} >{'Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'}</SecondaryText>
          </View>
        </View>
        <View style={{ marginTop: vs(15), marginHorizontal: s(20) }}>
          <SecondaryText fontSize={ms(18)} color={'red'} >{'What do you get ?'}</SecondaryText>
          <View style={{ marginTop: vs(10), marginHorizontal: s(10), flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: ms(6), borderRadius: ms(3), backgroundColor: 'rgb(193,193,193)', marginRight: s(10), width: ms(6) }} />
            <SecondaryText fontSize={ms(12)} color={'black'} >{'Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'}</SecondaryText>
          </View>
          <View style={{ marginTop: vs(10), marginHorizontal: s(10), flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: ms(6), borderRadius: ms(3), backgroundColor: 'rgb(193,193,193)', marginRight: s(10), width: ms(6) }} />
            <SecondaryText fontSize={ms(12)} color={'black'} >{'Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'}</SecondaryText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OffersDetails;
