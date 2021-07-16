import React from "react";
import { View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import IGStoryCircle from "react-native-instagram-story-circle";
import theme from '@theme';
import {
  ScreenHeadingText,
  SecondaryText,
  ButtonText
} from "@components";
import { connect } from "react-redux";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";

const ProfileStack = ({ navigation, userImg, userNumber }) => {

  return (
    <View style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
      <View style={{ alignItems: 'center', backgroundColor: 'red', paddingVertical: vs(5) }}>
        <ButtonText fontSize={ms(25)} color={'white'} >{'Available Offer'}</ButtonText>
      </View>
      <ScrollView>
        <Image
          source={{
            uri: `https://iylerooms.com/public/${userImg}`
          }}
          style={{ height: ms(120), width: ms(120), alignSelf: 'center', marginTop: vs(50), overflow: 'hidden', borderRadius: ms(60) }}
          resizeMode="cover"
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: vs(15), alignItems: 'center' }}>
          <IoniconsIcons
            name={"pencil-sharp"}
            color="red"

            size={ms(16)}
          />
          <ButtonText fontSize={ms(14)} color={'red'}>{'Edit Profile'}</ButtonText>
        </View>
        <ButtonText textAlign={'center'} fontSize={ms(18)} color={'black'}>{'Hi there Veer!'}</ButtonText>
        <View style={{ height: vs(10) }}></View>
        <ButtonText onPress={() => alert('heelo')} textAlign={'center'} fontSize={ms(14)} color={'rgb(193,193,193)'}>{'Sign Out'}</ButtonText>
        <View style={{ flexDirection: 'row', height: vs(70), marginTop: vs(30) }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingVertical: ms(5), paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(20), marginRight: s(10), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'Full Name'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{'Veer Sharma'}</ButtonText>
          </View>
          <View style={{ flex: 1, paddingVertical: ms(5), justifyContent: 'center', paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(10), marginRight: s(20), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'Email'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{'ve@email.com'}</ButtonText>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: vs(70), marginTop: vs(15) }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingVertical: ms(5), paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(20), marginRight: s(10), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'Mobile No'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{`91-${userNumber}`}</ButtonText>
          </View>
          <View style={{ flex: 1, paddingVertical: ms(5), justifyContent: 'center', paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(10), marginRight: s(20), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'City'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{'Jaipur'}</ButtonText>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: vs(70), marginTop: vs(15) }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingVertical: ms(5), paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(20), marginRight: s(10), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'state'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{'Rajasthan'}</ButtonText>
          </View>
          <View style={{ flex: 1, paddingVertical: ms(5), justifyContent: 'center', paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(10), marginRight: s(20), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'Contrty'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{'India'}</ButtonText>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: vs(70), marginTop: vs(15) }}>
          <View style={{ flex: 1, justifyContent: 'center', paddingVertical: ms(5), paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(20), marginRight: s(10), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'Password'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{'*********'}</ButtonText>
          </View>
          <View style={{ flex: 1, paddingVertical: ms(5), justifyContent: 'center', paddingLeft: s(20), backgroundColor: 'rgb(236,236,236)', marginLeft: s(10), marginRight: s(20), borderRadius: ms(15) }}>
            <ButtonText fontSize={ms(12)} color={'rgb(193,193,193)'}>{'Card Details'}</ButtonText>
            <ButtonText marginTop={vs(5)} fontSize={ms(14)} color={'black'}>{'43********435'}</ButtonText>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

const mapStateToProps = (state) => {
  return {
    userImg: state.user.profile_image,
    userNumber: state.user.mobile_no,
  }
}
export default connect(mapStateToProps, null)(ProfileStack)