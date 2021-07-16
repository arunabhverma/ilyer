import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import IGStoryCircle from "react-native-instagram-story-circle";
import axios from "axios";
import {
  ScreenHeadingText,
  SecondaryText,
  ButtonText,
  AppLoader,
} from "@components";
import { imageUtils } from '../../utils/imageCompressor';
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";

const stories = [
  {
    id: "1",
    source: {
      uri:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    user: "Jaipur",
    avatar: {
      uri:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    id: "2",
    user: "Jaisalmer",
    avatar: {
      uri:
        "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    source: {
      uri:
        "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    id: "3",
    user: "Jodhpur",
    source: {
      uri:
        "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    avatar: {
      uri:
        "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    id: "4",
    user: "Ajmer",
    source: {
      uri:
        "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    avatar: {
      uri:
        "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    id: "4",
    user: "Udaipur",
    source: {
      uri:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    avatar: {
      uri:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
];

const HomeStack = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    offersList: [],
    propertyList: [],
  });

  let header = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, isLoading: true }));
    axios.post("https://iylerooms.com/api/offer-list", header).then((res) => {
      if (res.data && res.status === 200) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          offersList: res.data.data,
        }));
      } else {
        setState((prev) => ({ ...prev, isLoading: false }));
        Alert.alert("Something went wrong");
      }
    }).catch((error) => {
      alert(error)
    });
    axios.post("https://iylerooms.com/api/property-list", header).then((res) => {
      if (res.data && res.status === 200) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          propertyList: res.data.data,
        }));
      } else {
        setState((prev) => ({ ...prev, isLoading: false }));
        Alert.alert("Something went wrong");
      }
    }).catch((error) => {
      alert(error)
    });
  }, []);

  const OfferCard = ({ item, index }) => {
    console.log('itemoffer card', `https://iylerooms.com/public//${item.offer_image}`)
    return (
      <TouchableOpacity
        onPress={() => navigation.push("OfferDetails", { item: item })}
        style={{
          width: s(260),
          marginLeft: s(20),
          height: vs(120),
          marginTop: vs(10),
          borderRadius: ms(15),
          backgroundColor: "rgb(234,233,233)",
        }}
      >
        <View
          style={{
            width: s(260),
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: vs(45),
            position: "absolute",
          }}
        >
          <View
            style={{
              backgroundColor: "rgb(249,249,249)",
              marginLeft: -vs(15),
              width: vs(30),
              height: vs(30),
              borderBottomRightRadius: vs(15),
              borderTopRightRadius: vs(15),
            }}
          ></View>
          <View
            style={{
              backgroundColor: "rgb(249,249,249)",
              marginRight: -vs(15),
              width: vs(30),
              height: vs(30),
              borderBottomLeftRadius: vs(15),
              borderTopLeftRadius: vs(15),
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: vs(5),
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: s(5),
          }}
        >
          <SecondaryText fontSize={ms(11)} color={"red"}>
            {"#Hotel"}
          </SecondaryText>
          <SecondaryText fontSize={ms(11)} color={"red"}>
            {"EXPIRES IN 10d 12h 40m "}
          </SecondaryText>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: vs(5),
            marginLeft: s(20),
            alignItems: "center",
            marginHorizontal: s(5),
            overflow: "hidden",
            shadowColor: "rgba(0,0,0,.60 )",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            elevation: 10,
          }}
        >
          <Image
            source={{
              uri: `https://iylerooms.com/public//${item.offer_image}`,
            }}
            style={{
              height: vs(65),
              width: s(65),
              alignSelf: "center",
              overflow: "hidden",
              borderRadius: ms(15),
            }}
            resizeMode="cover"
          />
          <View style={{ marginHorizontal: s(5), flex: 1 }}>
            <SecondaryText fontSize={ms(14)} numberOfLines={1}>
              {item.promotion_name}
            </SecondaryText>
            <View style={{ flexDirection: "row", marginBottom: vs(5) }}>
              <SecondaryText fontSize={ms(14)} color={"red"}>
                {"Sale : "}
              </SecondaryText>
              <SecondaryText fontSize={ms(14)}>{"Jaipur"}</SecondaryText>
            </View>
            <SecondaryText fontSize={ms(12)} color={"red"}>
              {"View Details"}
            </SecondaryText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const HotelCard = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push("HotelDetails", { item: item })}
        style={{
          backgroundColor: "white",
          marginTop: vs(20),
          marginBottom: vs(10),
          borderRadius: ms(20),
          width: s(150),
          marginLeft: s(20),
          overflow: "hidden",
          shadowColor: "rgba(0,0,0,.60 )",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 12,
          elevation: 10,
        }}
      >
        <Image
          source={{
            uri: `https://iylerooms.com/${item.main_image}`,
          }}
          style={{
            height: vs(140),
            width: s(180),
            borderTopLeftRadius: ms(20),
            borderTopRightRadius: ms(20),
          }}
          resizeMode="cover"
        />
        <View style={{ marginHorizontal: s(10), marginVertical: vs(5), flex: 1, height: vs(80) }}>
          <ButtonText fontSize={ms(14)} color={"black"}>
            {item.hotel_name}
          </ButtonText>
          <ButtonText
            fontSize={ms(12)}
            color={"rgb(193,193,193)"}
            numberOfLines={1}
          >
            {item.address_1}
          </ButtonText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: vs(5),
              marginBottom: vs(20),
            }}
          >
            <ButtonText fontSize={ms(13)} color={"red"}>
              {"$ 180/night"}
            </ButtonText>
            <ButtonText
              fontSize={ms(13)}
              color={"red"}
            >{`${item.star_rating}*`}</ButtonText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // let data = imageUtils().then((res) => console.log('res', res))
  // console.log('img url', 'data')
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: vs(120) }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              margin: 8,

              flexDirection: "row",
            }}
          >
            {stories.map((item) => {
              return (
                <View key={item.id} style={{ marginLeft: s(16) }}>
                  <IGStoryCircle
                    {...item}
                    source={item.source}
                    hasStory={item.hasStory}
                    onPress={() => { }}
                  />
                  <SecondaryText fontSize={14} textAlign={"center"}>
                    {item.user}
                  </SecondaryText>
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              height: vs(180),
              marginTop: vs(10),
              borderRadius: ms(5),
              marginHorizontal: s(20),
              elevation: 1,
              backgroundColor: "black",
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate("FilterStack")}
              style={{
                height: vs(45),
                flexDirection: "row",
                width: s(300),
                borderRadius: ms(5),
                alignSelf: "center",
                position: "absolute",
                top: vs(60),
                zIndex: 2,
                borderRadius: ms(5),
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: "white",
                  alignItems: "center",
                  marginVertical: 1,
                  borderBottomLeftRadius: ms(5),
                  borderTopLeftRadius: ms(5),
                  marginLeft: 1,
                }}
              >
                <IoniconsIcons
                  name={"location-outline"}
                  color="rgb(127,127,127)"
                  size={ms(16)}
                />
                <View>
                  <SecondaryText fontSize={ms(8)} color={"red"}>
                    {"Location"}
                  </SecondaryText>
                  <SecondaryText fontSize={ms(4)} color={"rgb(193,193,193)"}>
                    {"Where are you going ?"}
                  </SecondaryText>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  marginVertical: 1,
                  marginLeft: 1,
                }}
              >
                <IoniconsIcons
                  name={"calendar-outline"}
                  color="rgb(127,127,127)"
                  size={ms(16)}
                />
                <View>
                  <SecondaryText fontSize={ms(8)} color={"red"}>
                    {"From - To"}
                  </SecondaryText>
                  <SecondaryText fontSize={ms(4)} color={"rgb(193,193,193)"}>
                    {"01/01/2021 - 01/02/202"}
                  </SecondaryText>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 1,
                  marginLeft: 1,
                }}
              >
                <IoniconsIcons
                  name={"md-person-outline"}
                  color="rgb(127,127,127)"
                  size={ms(16)}
                />
                <View>
                  <SecondaryText fontSize={ms(8)} color={"red"}>
                    {"Guests"}
                  </SecondaryText>
                  <SecondaryText fontSize={ms(4)} color={"rgb(193,193,193)"}>
                    {"1 Adult - 0 Child"}
                  </SecondaryText>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "red",
                  marginVertical: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: ms(5),
                  borderBottomRightRadius: ms(5),
                  marginHorizontal: 1,
                }}
              >
                <ScreenHeadingText fontSize={ms(14)} color={"white"}>
                  {"Book now"}
                </ScreenHeadingText>
              </View>
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://i.imgur.com/UPrs1EWl.jpg",
              }}
              style={{ flex: 1, overflow: "hidden", borderRadius: ms(5) }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: vs(20),
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: s(20),
            }}
          >
            <ScreenHeadingText fontSize={ms(25)}>{"Offers"}</ScreenHeadingText>
            <TouchableOpacity onPress={() => navigation.jumpTo("OfferStack")}>
              <ButtonText fontSize={ms(16)} color={"  red"}>
                {"View All"}
              </ButtonText>
            </TouchableOpacity>
          </View>
          <FlatList
            data={state.offersList}
            horizontal
            renderItem={OfferCard}
            contentContainerStyle={{ paddingRight: s(20) }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: vs(20),
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: s(20),
            }}
          >
            <ScreenHeadingText fontSize={ms(25)}>
              {"Popular hotels"}
            </ScreenHeadingText>
            <ButtonText fontSize={ms(16)} color={"red"}>
              {"View All"}
            </ButtonText>
          </View>
          <FlatList
            data={state.propertyList}
            horizontal
            renderItem={HotelCard}
            contentContainerStyle={{ paddingRight: s(20) }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={{
              marginHorizontal: s(20),
              padding: vs(15),
              borderRadius: ms(15),
              marginTop: vs(20),
              backgroundColor: "rgb(241,240,240)",
              overflow: "hidden",
              shadowColor: "rgba(0,0,0,.60 )",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              elevation: 10,
            }}
          >
            <View style={{ marginHorizontal: s(5) }}>
              <ButtonText fontSize={ms(16)} color={"red"}>
                {"About us"}
              </ButtonText>

              <ButtonText fontSize={ms(14)} color={"black"}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
                }
              </ButtonText>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: s(20),
              width: "100%",
              padding: vs(15),
              borderRadius: ms(15),
              marginTop: vs(20),
              backgroundColor: "rgb(241,240,240)",
              overflow: "hidden",
              shadowColor: "rgba(0,0,0,.60 )",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 12,
              elevation: 10,
            }}
          >
            <View style={{ alignSelf: "center" }}>
              <ButtonText fontSize={ms(24)} color={"red"}>
                {"Become a Partner"}
              </ButtonText>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <IoniconsIcons
                name={"ios-person-add-sharp"}
                color="red"
                size={ms(60)}
              />
              <ButtonText fontSize={ms(12)} color={"rgb(115,116,118)"}>
                {
                  "Lorem ipsum dolor sit amet sed,\nconsectetur sad ipiscing elit, do"
                }
              </ButtonText>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View></View>
              <TouchableOpacity
                onPress={() => navigation.push("Verification")}
                style={{
                  height: vs(50),
                  marginRight: s(20),
                  backgroundColor: "red",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: vs(5),
                  width: s(160),
                  borderRadius: ms(35),
                }}
              >
                <ButtonText fontSize={ms(16)}>{"Contact Now"}</ButtonText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <AppLoader loading={state.isLoading} />
    </View>
  );
};

export default HomeStack;
