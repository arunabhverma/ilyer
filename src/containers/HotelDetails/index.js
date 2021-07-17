import React, { useRef, useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CountryPicker, {
  getCallingCode,
} from "react-native-country-picker-modal";
import axios from "axios";
import theme from "@theme";
import {
  ScreenHeadingText,
  PlainText,
  Text,
  ButtonText,
  AppLoader,
} from "@components";
import { ENTRIES1 } from "../../mock/intro";
import { ms, vs, s } from "react-native-size-matters/extend";
import { ScrollView } from "react-native-gesture-handler";
import { marginTop } from "styled-system";

const HotelDetails = ({ navigation, route }) => {
  const itemId = route.params.item.id;
  console.log("HotelDetails", itemId);
  const SLIDER_1_FIRST_ITEM = 0;
  const slider1Ref = useRef();
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);
  const [stateData, setStateData] = useState({
    isLoading: false,
    propertyDetails: [],
    dataLength: '',
  });

  useEffect(() => {
    setStateData((prev) => ({ ...prev, isLoading: true }));
    let data = {
      property_id: `${itemId}`,
    };
    axios
      .post("https://iylerooms.com/api/property-details", data)
      .then((res) => {
        if (res.data && res.status === 200) {
          setStateData((prev) => ({
            ...prev,
            isLoading: false,
            propertyDetails: res.data.data,
            dataLength: res.data.data.reception_pictures.length
          }));
          console.log("data", res.data.data);
        } else {
          setStateData((prev) => ({ ...prev, isLoading: false }));
          Alert.alert("Something went wrong");
        }
      });
  }, []);

  const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <Image
        style={{
          height: vs(500),
          borderBottomRightRadius: s(55),
          overflow: "hidden",
        }}
        source={{
          uri: `https://iylerooms.com/${item.reception}`,
        }}
        resizeMode={"cover"}
      />
    );
  };

  const HotelCard = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "rgb(239,239,239)",
          borderRadius: ms(20),
          width: s(120),
          height: vs(120),
          marginLeft: s(20),
          shadowColor: "rgba(0,0,0,.60 )",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 12,
          elevation: 10,
        }}
      >
        <Image
          source={{
            uri: `https://iylerooms.com/${item.images}`,
          }}
          style={{ height: vs(120), width: s(120), borderRadius: ms(10) }}
          resizeMode="cover"
        />
      </View>
    );
  };
  const Card = ({ image, onPress, item }) => {
    return (
      <View style={{ alignItems: "center", marginLeft: s(20) }}>
        <TouchableOpacity
          style={{
            width: ms(35),
            marginTop: vs(35),
            marginBottom: vs(6),
            justifyContent: "center",
            borderWidth: vs(1),
            borderColor: "rgb(245,245,245)",
            alignItems: "center",
            height: ms(35),
            backgroundColor: "rgb(239,238,238)",
            borderRadius: ms(5),
            shadowColor: "rgba(0,0,0,.60 )",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            alignItems: "center",
            elevation: 10,
          }}
        >
          <IoniconsIcons name={image} color="red" size={ms(25)} />
        </TouchableOpacity>
        <ButtonText fontSize={ms(14)} textAlign={"center"} color={"black"}>
          {item}
        </ButtonText>
      </View>
    );
  };
  const propertyDetails = stateData.propertyDetails;
  Object.size = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  var size = Object.size(propertyDetails.reception_pictures);
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.card }}>
      <ScrollView contentContainerStyle={{ paddingBottom: vs(100) }}>
        <View style={{ height: vs(300), width: s(375), position: "absolute" }}>
          <Carousel
            ref={slider1Ref}
            data={propertyDetails.reception_pictures}
            renderItem={_renderItemWithParallax}
            sliderWidth={s(375)}
            itemWidth={s(375)}
            hasParallaxImages={true}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={1}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={{ flex: 1, overflow: "hidden" }}
            loop={true}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setSlider1ActiveSlide(index)}
          />

          <Pagination
            dotsLength={size}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={{
              paddingVertical: 8,
              bottom: 10,
              alignSelf: "center",
              position: "absolute",
            }}
            dotColor={"white"}
            dotStyle={{
              width: 20,
              height: 8,
              borderRadius: 4,
              marginHorizontal: -s(5)
            }}
            inactiveDotColor={"rgba(255,255,255,1)"}
            inactiveDotOpacity={0.4}
            inactiveDotScale={.8}
            carouselRef={slider1Ref}
            tappableDots={!!slider1Ref}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            width: ms(30),
            marginTop: vs(35),
            marginLeft: s(15),
            height: ms(30),
            backgroundColor: "white",
            borderRadius: ms(5),
            shadowColor: "rgba(0,0,0,.60 )",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            alignItems: "center",
            elevation: 10,
          }}
        >
          <IoniconsIcons name={"arrow-back"} color="red" size={ms(25)} />
        </TouchableOpacity>
        <View style={{ height: vs(140), marginTop: vs(270) }}>
          <FlatList
            data={propertyDetails.room_images}
            horizontal
            renderItem={HotelCard}
            contentContainerStyle={{ paddingRight: s(20) }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ paddingHorizontal: vs(20) }}>
          <ButtonText fontSize={ms(18)} color={"black"}>
            {propertyDetails.hotel_name}
          </ButtonText>
          <View style={{ marginVertical: vs(10), flexDirection: "row" }}>
            <ButtonText fontSize={ms(14)} color={"black"}>
              {propertyDetails.city_name}
            </ButtonText>
            <ButtonText fontSize={ms(14)} color={"rgb(193,193,193)"}>
              {" - Show in map"}
            </ButtonText>
          </View>
          <ButtonText fontSize={ms(14)} color={"rgb(193,193,193)"}>
            {propertyDetails.description}
          </ButtonText>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={{ marginVertical: vs(10) }}>
              <ButtonText fontSize={ms(14)} color={"rgb(193,193,193)"}>
                {"Price"}
              </ButtonText>
              <View style={{ height: vs(10) }} />
              <ButtonText fontSize={ms(14)} color={"black"}>
                {"$120"}
              </ButtonText>
            </View>
            <View style={{ marginVertical: vs(10) }}>
              <ButtonText fontSize={ms(14)} color={"rgb(193,193,193)"}>
                {"Reviews"}
              </ButtonText>
              <View style={{ height: vs(10) }} />
              <ButtonText fontSize={ms(14)} textAlign="center" color={"red"}>
                {propertyDetails.star_rating}
              </ButtonText>
            </View>
            <View style={{ marginVertical: vs(10) }}>
              <ButtonText fontSize={ms(14)} color={"rgb(193,193,193)"}>
                {"Recently booked"}
              </ButtonText>
              <View style={{ height: vs(10) }} />
              <ButtonText fontSize={ms(14)} textAlign="center" color={"black"}>
                {"$120"}
              </ButtonText>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: s(15), marginTop: vs(20) }}>
          <ButtonText fontSize={ms(22)} color={"black"}>
            {"Aminities"}
          </ButtonText>
        </View>
        <ScrollView horizontal>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Card image={"business"} item={"Parking"} />
            <Card image={"business"} item={"Bath"} />
            <Card image={"business"} item={"Bar"} />
            <Card image={"business"} item={"Wifi"} />
            <Card image={"business"} item={"Gym"} />
            <Card image={"business"} item={"More"} />
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: ms(55),
              margin: vs(20),
              marginBottom: vs(6),
              justifyContent: "center",
              borderWidth: vs(1),
              borderColor: "rgb(245,245,245)",
              alignItems: "center",
              height: ms(55),
              backgroundColor: "rgb(239,238,238)",
              borderRadius: ms(8),
              shadowColor: "rgba(0,0,0,.60 )",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              alignItems: "center",
              elevation: 10,
            }}
          >
            <IoniconsIcons name={"heart-outline"} color="red" size={ms(35)} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('HotelBooking')}
            style={{
              width: "70%",
              marginTop: vs(20),
              marginBottom: vs(6),
              justifyContent: "center",
              borderWidth: vs(1),
              borderColor: "rgb(245,245,245)",
              alignItems: "center",
              height: ms(55),
              backgroundColor: "red",
              borderRadius: ms(8),
              shadowColor: "rgba(0,0,0,.60 )",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              alignItems: "center",
              elevation: 10,
            }}
          >
            <ButtonText fontSize={ms(18)} textAlign={"center"}>
              {"Book Now"}
            </ButtonText>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: vs(30), marginLeft: s(30) }}>
          <ButtonText fontSize={ms(18)} color={"black"}>
            {"Reviews & Comments"}
          </ButtonText>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <IoniconsIcons name={"star"} color="red" size={ms(30)} />
              <IoniconsIcons name={"star"} color="red" size={ms(30)} />
              <IoniconsIcons name={"star"} color="red" size={ms(30)} />
              <IoniconsIcons name={"star"} color="red" size={ms(30)} />
              <IoniconsIcons name={"star"} color="red" size={ms(30)} />
            </View>
            <ButtonText fontSize={ms(16)} color={"black"}>
              {"3.0 of 5 (250 review )"}
            </ButtonText>
          </View>
          <View
            style={{
              height: vs(130),
              width: s(180),
              padding: ms(10),
              marginVertical: vs(10),
              backgroundColor: "rgb(239,238,238)",
              borderRadius: ms(20),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: vs(5),
                marginBottom: vs(5),
                justifyContent: "space-around",
              }}
            >
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"5 Stars"}
              </ButtonText>
              <View
                style={{
                  height: vs(15),
                  width: s(90),
                  borderRadius: vs(7.5),
                  backgroundColor: "rgb(192,195,200)",
                }}
              >
                <View
                  style={{
                    height: vs(15),
                    width: s(90),
                    borderRadius: vs(7.5),
                    backgroundColor: "red",
                  }}
                ></View>
              </View>
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"72"}
              </ButtonText>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: vs(5),
                marginBottom: vs(5),
                justifyContent: "space-around",
              }}
            >
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"4 Stars"}
              </ButtonText>
              <View
                style={{
                  height: vs(15),
                  width: s(90),
                  borderRadius: vs(7.5),
                  backgroundColor: "rgb(192,195,200)",
                }}
              >
                <View
                  style={{
                    height: vs(15),
                    width: s(50),
                    borderRadius: vs(7.5),
                    backgroundColor: "red",
                  }}
                ></View>
              </View>
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"72"}
              </ButtonText>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: vs(5),
                marginBottom: vs(5),
                justifyContent: "space-around",
              }}
            >
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"3 Stars"}
              </ButtonText>
              <View
                style={{
                  height: vs(15),
                  width: s(90),
                  borderRadius: vs(7.5),
                  backgroundColor: "rgb(192,195,200)",
                }}
              >
                <View
                  style={{
                    height: vs(15),
                    width: s(40),
                    borderRadius: vs(7.5),
                    backgroundColor: "red",
                  }}
                ></View>
              </View>
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"72"}
              </ButtonText>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: vs(5),
                marginBottom: vs(5),
                justifyContent: "space-around",
              }}
            >
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"2 Stars"}
              </ButtonText>
              <View
                style={{
                  height: vs(15),
                  width: s(90),
                  borderRadius: vs(7.5),
                  backgroundColor: "rgb(192,195,200)",
                }}
              >
                <View
                  style={{
                    height: vs(15),
                    width: s(20),
                    borderRadius: vs(7.5),
                    backgroundColor: "red",
                  }}
                ></View>
              </View>
              <ButtonText fontSize={ms(12)} color={"black"}>
                {"72"}
              </ButtonText>
            </View>
          </View>
        </View>
        <View
          style={{
            height: vs(1),
            backgroundColor: "rgb(239,238,238)",
            marginHorizontal: vs(20),
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: vs(20),
            marginBottom: vs(6),
            justifyContent: "center",
            backgroundColor: "rgb(223,223,223",
            borderWidth: vs(1),
            borderColor: "red",
            alignItems: "center",
            height: ms(55),
            marginHorizontal: s(20),
            borderRadius: ms(26),
            // shadowColor: "rgba(0,0,0,.60 )",
            // shadowOffset: { width: 0, height: 1 },
            // shadowOpacity: 0.4,
            // shadowRadius: 12,
            alignItems: "center",
            // elevation: 10
          }}
        >
          <ButtonText fontSize={ms(18)} textAlign={"center"} color="red">
            {"WRITE A REVIEW NOW"}
          </ButtonText>
        </TouchableOpacity>
        <View
          style={{
            height: vs(1),
            marginTop: vs(15),
            backgroundColor: "rgb(239,238,238)",
            marginHorizontal: vs(20),
          }}
        />
        <View style={{ marginTop: vs(15) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: ms(25),
            }}
          >
            <ButtonText fontSize={ms(18)} color={"black"}>
              {"Best Hotel, good services !"}
            </ButtonText>
            <ButtonText
              fontSize={ms(14)}
              textAlign="center"
              color={"rgb(193,193,193)"}
            >
              {"15 mins ago"}
            </ButtonText>
          </View>
          <View style={{ marginLeft: s(25), flexDirection: "row" }}>
            <IoniconsIcons name={"star"} color="red" size={ms(15)} />
            <IoniconsIcons name={"star"} color="red" size={ms(15)} />
            <IoniconsIcons name={"star"} color="red" size={ms(15)} />
            <IoniconsIcons name={"star"} color="red" size={ms(15)} />
            <IoniconsIcons name={"star"} color="red" size={ms(15)} />
          </View>
          <ButtonText
            fontSize={ms(14)}
            marginTop={vs(5)}
            marginLeft={s(25)}
            color={"black"}
          >
            {"By Sunny Vo"}
          </ButtonText>
          <ButtonText
            fontSize={ms(14)}
            marginTop={vs(5)}
            marginLeft={s(25)}
            color={"rgb(193,193,193)"}
          >
            {
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
            }
          </ButtonText>
        </View>
        <View
          style={{
            height: vs(1),
            marginTop: vs(15),
            backgroundColor: "rgb(239,238,238)",
            marginHorizontal: vs(20),
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: vs(20),
            marginBottom: vs(6),
            justifyContent: "center",
            borderWidth: vs(1),
            borderColor: "red",
            backgroundColor: "red",
            alignItems: "center",
            height: ms(55),
            marginHorizontal: s(20),
            borderRadius: ms(26),
            shadowColor: "rgba(0,0,0,.60 )",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            alignItems: "center",
            elevation: 10,
          }}
        >
          <ButtonText fontSize={ms(18)} textAlign={"center"} color="white">
            {"SEE ALL REVIEWS"}
          </ButtonText>
        </TouchableOpacity>
      </ScrollView>
      <AppLoader loading={stateData.isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.card,
  },
  logo: {
    marginTop: vs(70),
    marginBottom: vs(63),
    height: vs(118),
    width: s(155),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  numberInputBox: {
    flexDirection: "row",
    borderRadius: vs(0.6),
    marginTop: vs(3.44),
    height: vs(6.77),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: s(11.2),
  },
  countryCode: {
    fontSize: ms(19),

    textAlign: "center",
    color: "rgb(0,0,0)",
    letterSpacing: 2,
  },
  inputStyle: {
    width: vs(50),
    paddingLeft: s(1),
    letterSpacing: 2,
    color: "#000",
    height: vs(6.65),
  },
  textStyle: {
    textAlign: "center",
  },
  divider: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: s(20),
    alignItems: "center",
  },
  dividerLine: {
    height: 1.5,
    flex: 1,
    backgroundColor: "rgb(193,193,193)",
  },
});

export default HotelDetails;
