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



const OfferStack = ({ navigation }) => {


  const HotelCard = () => {

    return (
      <TouchableOpacity
        onPress={() => navigation.push("OfferDetails")}
        style={{ backgroundColor: 'rgb(239,239,239)', marginTop: vs(20), borderRadius: ms(20), marginHorizontal: s(10) }}>
        <Image
          source={{
            uri: 'https://i.imgur.com/UPrs1EWl.jpg'
          }}
          style={{ height: vs(190), borderTopLeftRadius: ms(20), borderTopRightRadius: ms(20) }}
          resizeMode="cover"
        />
        <View style={{ marginHorizontal: s(5) }}>
          <ButtonText fontSize={ms(16)} color={'black'}>{'Queen hotel'}</ButtonText>
          <ButtonText fontSize={ms(14)} color={'rgb(193,193,193)'} >{'Tokyo square, japan'}</ButtonText>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: vs(5), marginBottom: vs(20) }}>
            <ButtonText fontSize={ms(14)} color={'red'} >{'$ 180/night'}</ButtonText>
            <ButtonText fontSize={ms(14)} color={'red'} >{'4.5*'}</ButtonText>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
      <View style={{ alignItems: 'center', backgroundColor: 'red', paddingVertical: vs(5) }}>
        <ButtonText fontSize={ms(25)} color={'white'} >{'Available Offer'}</ButtonText>

      </View>
      <FlatList
        data={[0, 1, 2, 3, 4, 5]}
        numColumns={2}
        renderItem={HotelCard}
        contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'center', paddingBottom: vs(120) }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default OfferStack;
