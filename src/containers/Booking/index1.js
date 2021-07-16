import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Text,
  FlatList,
} from "react-native";
import IGStoryCircle from "react-native-instagram-story-circle";
import theme from "@theme";
import { ScreenHeadingText, SecondaryText, ButtonText } from "@components";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";

const BookingStack = ({ navigation }) => {
  const HotelCard = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push("BookingDetails")}
        style={{
          backgroundColor: "rgb(250,250,250)",
          flexDirection: "row",
          marginTop: vs(20),
          borderRadius: ms(10),
          marginHorizontal: s(10),
          shadowColor: "rgba(0,0,0,.60 )",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 12,
          elevation: 10,
        }}
      >
        <Image
          source={{
            uri: "https://i.imgur.com/UPrs1EWl.jpg",
          }}
          style={{
            height: vs(110),
            margin: ms(10),
            alignSelf: "center",
            width: s(180),
            borderRadius: ms(5),
            shadowColor: "rgba(0,0,0,.60 )",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            elevation: 10,
          }}
          resizeMode="cover"
        />
        <View style={{
          // marginHorizontal: s(5), marginVertical: vs(10)
          marginVertical: vs(5),
          // backgroundColor: "gray",
          flex: 1,
        }}>
          <ButtonText fontSize={ms(13)} color={theme.colors.notification} style={{ marginVertical: vs(2) }}>
            {"20/05/2021-26/05/2021"}
          </ButtonText>
          <View style={{ flexDirection: "row" }}>
            <ButtonText fontSize={ms(14)} color={"black"} style={{ fontWeight: "100" }}>
              {"Hotel Taj"}
            </ButtonText>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: ms(10), color: 'rgb(193,193,193)' }}>{' Jaipur'}</Text>
            </View>
          </View>
          <SecondaryText style={{ marginVertical: vs(1) }} fontSize={ms(10)}>
            {"Guest-3(Adult - 02, Kid - 01)"}
          </SecondaryText>
          <SecondaryText style={{ marginVertical: vs(1) }} fontSize={ms(10)}>{"No. of Rooms - 01"}</SecondaryText>
          <ButtonText style={{ marginVertical: vs(1) }} fontSize={ms(12)} color={theme.colors.notification}>
            {"Price - $180/night"}
          </ButtonText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: s(10),
              marginVertical: vs(10)
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.push("Verification")}
              style={{
                // height: vs(30),
                padding: s(5),
                backgroundColor: "red",
                alignSelf: "flex-start",
                alignItems: "center",
                justifyContent: "center",
                // marginBottom: vs(5),
                // width: s(60),
                borderRadius: ms(35),
              }}
            >
              <ButtonText fontSize={ms(10)}>{"Book again"}</ButtonText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push("Verification")}
              style={{
                // height: vs(30),
                padding: s(5),
                backgroundColor: "red",
                alignSelf: "flex-start",
                alignItems: "center",
                justifyContent: "center",
                // marginBottom: vs(5),
                width: s(60),
                borderRadius: ms(15),
              }}
            >
              <ButtonText fontSize={ms(10)}>{"Rate"}</ButtonText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity >
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "rgb(250,250,250)" }}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: theme.colors.notification,
          paddingVertical: vs(5),
        }}
      >
        <ButtonText fontSize={ms(25)} color={"white"}>
          {"My Trips"}
        </ButtonText>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "black" }}>
        <TouchableOpacity
          style={{ alignItems: "center", flex: 1, paddingVertical: vs(5) }}
        >
          <ButtonText fontSize={ms(25)} color={"white"}>
            {"Upcoming"}
          </ButtonText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", flex: 1, paddingVertical: vs(5) }}
        >
          <ButtonText fontSize={ms(25)} color={"red"}>
            {"Previous"}
          </ButtonText>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6]}
        renderItem={HotelCard}
        contentContainerStyle={{ paddingBottom: s(120) }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default BookingStack;
