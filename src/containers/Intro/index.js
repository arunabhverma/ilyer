import React, { useRef, useState, useEffect } from "react";
import { Image, TouchableOpacity, View, StyleSheet, TextInput, Text, Alert } from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { imageUtils } from '../../utils/imageCompressor';
import { connect } from 'react-redux';
import axios from 'axios';
import theme from '@theme';
import {
  ScreenHeadingText,
  PlainText,
  AppLoader,
} from "@components";
import { ENTRIES1 } from '../../mock/intro';
import { ms, vs, s } from "react-native-size-matters/extend";

const IntroMain = ({ navigation, userToken }) => {
  const SLIDER_1_FIRST_ITEM = 0;
  const slider1Ref = useRef()
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef();
  const [state, setState] = useState({
    isLoading: false,
    bannerData: [],
  })

  let header = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };

  useEffect(() => {
    // useEffect(() => {
    // consoelimageUtils('https://iylerooms.com/public/uploads/hotels_main/MainImage1624191429.jpg')
    // }, [])
    navigation.replace('TabBar')
    console.log('token', userToken)
    if (!userToken) {
      setState((prev) => ({ ...prev, isLoading: true }))
      axios.post('https://iylerooms.com/api/banner').then((res) => {
        if (res.data && res.status === 200) {
          setState(prev => ({ ...prev, isLoading: false, bannerData: res.data.data }))
        } else {
          setState(prev => ({ ...prev, isLoading: false }))
          Alert.alert('Something went wrong')
        }
      }).catch((error) => {
        setState(prev => ({ ...prev, isLoading: false }))
        Alert.alert(`Something went wrong ${error}`)
      });
    }
    else {
      navigation.replace('TabBar')
    }
  }, [])

  const verification = () => {
    if (value.length === 10) {
      setState((prev) => ({ ...prev, isLoading: true }))
      let data = {
        "mobile_no": `${value}`
      }
      axios.post('https://iylerooms.com/api/register-phone', data).then((res) => {
        if (res.data && res.status === 200 && res.data.status) {
          setState(prev => ({ ...prev, isLoading: false }))
          navigation.navigate('Verification', { mobileNumber: value })
        } else {
          setState(prev => ({ ...prev, isLoading: false }))
          Alert.alert('Login', `${res.data.message}`)
        }
      }).catch((error) => {
        setState(prev => ({ ...prev, isLoading: false }))
        Alert.alert(`Something went wrong ${error}`)
      });
    }
    else {
      Alert.alert('Login', 'Enter a valid mobile number')
    }
  }

  const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <Image
        style={{ height: vs(450), borderBottomRightRadius: s(55), overflow: 'hidden' }}
        source={{
          uri: `https://iylerooms.com/public/${item.banner}`
        }}
        // onLoadStart={() => setState(prev => ({ ...prev, isLoading: true }))}
        // onLoadEnd={() => setState(prev => ({ ...prev, isLoading: false }))}
        resizeMode={'cover'}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.card, }}>
      <View style={{ height: vs(450), width: s(375), borderBottomRightRadius: s(55) }} >
        <Carousel
          ref={slider1Ref}
          data={state.bannerData}
          renderItem={_renderItemWithParallax}
          sliderWidth={s(375)}
          itemWidth={s(375)}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={1}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={{ flex: 1, overflow: 'hidden', borderBottomRightRadius: s(55) }}
          // contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => setSlider1ActiveSlide(index)}
        />

        <Pagination
          dotsLength={state.bannerData.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={{ paddingVertical: 8, bottom: 10, alignSelf: 'center', position: 'absolute' }}
          dotColor={'red'}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,

          }}
          inactiveDotColor={"rgba(0,0,0,1)"}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
        />
      </View>
      <View style={{ marginTop: vs(50), alignItems: 'center', marginHorizontal: s(40) }}>
        <ScreenHeadingText>{'Welcome'}</ScreenHeadingText>
        <View style={{ marginTop: vs(10) }}></View>
        <PlainText>{'Sign up to get started and experience great shopping deals'}</PlainText>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'rgb(193,193,193)', marginTop: vs(20), paddingHorizontal: s(10), alignItems: 'center', justifyContent: 'space-evenly', borderRadius: ms(10), marginHorizontal: s(10), }}>
          <Text style={{ letterSpacing: 4.70, fontSize: ms(20) }}>{'+91-'}</Text>
          <TextInput
            value={value}
            onChangeText={(text) => {
              setValue(text);
            }}
            style={{ flex: 1, letterSpacing: 2.70, fontSize: ms(20) }}
            placeholder={'Mobile Number'}
            keyboardType={'phone-pad'}
            maxLength={10}
          >
          </TextInput>

          <TouchableOpacity
            // onPress={() => navigation.navigate('Verification')}
            onPress={() => verification()}
            style={{ width: s(55), height: vs(35), backgroundColor: 'red', marginVertical: vs(5), justifyContent: 'center', alignItems: 'center', borderRadius: ms(5) }}>
            <IoniconsIcons
              name={"arrow-forward-sharp"}
              color="white"
              size={ms(25)}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine}></View>
          <PlainText style={{ paddingHorizontal: ms(10) }}>{"OR"}</PlainText>
          <View style={styles.dividerLine}></View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.replace('TabBar')}
          style={{ marginBottom: vs(30), marginTop: vs(10), width: '100%', justifyContent: 'center' }}>
          <PlainText>{'I\'ll Signup Later'}</PlainText>
        </TouchableOpacity>
      </View>
      <AppLoader loading={state.isLoading} style={{ position: 'absolute' }} />
    </View>
  )
}


const styles = StyleSheet.create({
  boxStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.card,
  },
  logo: {
    marginTop: vs(70),
    marginBottom: vs(63),
    height: vs(118),
    width: s(155),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInputBox: {
    flexDirection: 'row',
    borderRadius: vs(0.6),
    marginTop: vs(3.44),
    height: vs(6.77),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: s(11.2)
  },
  countryCode: {
    fontSize: ms(19),

    textAlign: 'center',
    color: "rgb(0,0,0)",
    letterSpacing: 2
  },
  inputStyle: {
    width: vs(50),
    paddingLeft: s(1),
    letterSpacing: 2,
    color: '#000',
    height: vs(6.65),
  },
  textStyle: {
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(20),
    alignItems: 'center',
  },
  dividerLine: {
    height: 1.5,
    flex: 1,
    backgroundColor: 'rgb(193,193,193)',
  },
});

const mapStateToProps = (state) => {
  return {
    userToken: state.user.token
  }
}

export default connect(mapStateToProps, null)(IntroMain)