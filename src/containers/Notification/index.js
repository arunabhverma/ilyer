import React from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import IGStoryCircle from "react-native-instagram-story-circle";
import theme from '@theme';
import {
  ScreenHeadingText,
  SecondaryText,
  ButtonText
} from "@components";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";

const NotiStack = ({ navigation }) => {

  const stories = [
    {
      icon: "ios-logo-dropbox",
      color: '#20fab1',
      msg: 'Smiley’s Hotel marked your order #1982984 as booked',
      date: '9:20',
      source: {
        uri:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
    },
    {
      icon: "location-outline",
      color: '#eb3434',
      msg: 'Booking from your order #1982345 has been accepted.',
      storyRingColor: ["#20fab1", "#20fab1"],
      date: '14 feb',
      source: {
        uri:
          "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      },
    },
    {
      icon: "pricetags-outline",
      color: '#e22ae8',
      msg: '50% OFF of everything at Jaipur Hotel!!',
      storyRingColor: ["#eb3434", "#eb3434"],
      date: '15 jan',
      isStoryRead: true,
      source: {
        uri:
          "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
    },
    {
      icon: "receipt-sharp",
      color: '#e12ee4',
      storyRingColor: ["#e22ae8", "#e22ae8"],
      date: '1 jan',
      msg: 'ITC Sale starting tomorrow. Don’t forget to check it out for great offers',
      source: {
        uri:
          "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
    }
  ];
  const NotiCard = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: ms(60), width: ms(60), borderRadius: ms(30), justifyContent: 'center', alignItems: 'center', margin: ms(10), backgroundColor: item.color }}>
          <IoniconsIcons
            name={item.icon}
            color="#fff"
            size={26}
          />
        </View>
        <Text style={{ textAlign: 'right' }}></Text>
        <View style={{ width: s(220), justifyContent: 'center' }}>
          <ButtonText fontSize={ms(14)} color={'black'} >{item.msg}</ButtonText>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <ButtonText fontSize={ms(14)} textAlign={'right'} color={'rgb(193,193,193)'} >{item.date}</ButtonText>
        </View>

      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
      <View style={{ alignItems: 'center', backgroundColor: 'red', paddingVertical: vs(5) }}>
        <ButtonText fontSize={ms(25)} color={'white'} >{'Notification'}</ButtonText>
      </View>
      <FlatList
        data={stories}
        renderItem={NotiCard}
        contentContainerStyle={{ paddingBottom: s(120) }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{
          marginVertical: 0, marginLeft: s(80),
          backgroundColor: theme.colors.infoBorder,
          height: 2,
          marginVertical: vs(24),
        }} />}
        ListFooterComponent={() => <View style={{
          marginVertical: 0, marginLeft: s(80),
          backgroundColor: theme.colors.infoBorder,
          height: 2,
          marginVertical: vs(24),
        }} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
export default NotiStack