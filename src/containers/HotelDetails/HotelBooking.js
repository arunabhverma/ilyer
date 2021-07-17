import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";
import { AppLoader } from "@components";
import theme from "@theme";
import LinearGradient from "react-native-linear-gradient";

const HotelBooking = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    room: '',
    main: '',
    value: '',
  });

  const Header = () => {
    return (
      <View style={styles.mainHeader}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <IoniconsIcons
              name={"arrow-back"}
              color={theme.colors.genderBorder}
              size={ms(25)}
            />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <View>
              <Text style={{ color: theme.colors.text, fontSize: ms(25) }}>
                Select Room
              </Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: theme.colors.genderBorder }}>
                    {"Apr 26 - Apr 27 "}
                  </Text>
                  <IoniconsIcons
                    name={"radio-button-on"}
                    color={theme.colors.genderBorder}
                    size={ms(10)}
                  />
                  <Text style={{ color: theme.colors.genderBorder }}>{"1 Room "}</Text>
                  <IoniconsIcons
                    name={"radio-button-on"}
                    color={theme.colors.genderBorder}
                    size={ms(10)}
                  />
                  <Text style={{ color: theme.colors.genderBorder }}>
                    {"2 Guests "}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => { }}>
                  <Text
                    style={{
                      color: "rgb(17,114,153)",
                      fontSize: ms(15),
                      fontWeight: "bold",
                    }}
                  >
                    Modify
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.anotherHeader}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Breakfast Included</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={{ marginHorizontal: ms(10) }}>
          <Text style={{ color: theme.colors.card, fontSize: ms(20) }}>
            {"\u20B9"} {state.value}
          </Text>
          <Text style={{ color: theme.colors.card, fontSize: ms(12) }}>
            + {"\u20B9"} 51 taxes & fees
          </Text>
          <Text style={{ color: theme.colors.card, fontSize: ms(12) }}>
            Per Night (2 Adults)
          </Text>
        </View>
        <TouchableOpacity style={{ margin: ms(10) }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["rgb(0,157,247)", "rgb(0,85,230)"]}
            style={{
              paddingVertical: ms(10),
              borderRadius: ms(50),
              paddingHorizontal: s(55),
            }}
          >
            <Text
              style={{
                color: theme.colors.card,
                fontSize: ms(19),
                fontWeight: "bold",
              }}
            >
              CONTINUE
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  const Rooms = ({ item, index, mainItemIndex }) => {
    const value = index % 2 == 0 ? '782' : '1,059'
    const roomOnly = index % 2 == 0 ? 'Room Only' : 'Room with Breakfast'
    const breakfast = index % 2 == 0 ? 'No meals included' : 'Free Breakfast'
    return (
      <TouchableOpacity
        onPress={() => setState((prev) => ({ ...prev, rooms: index, main: mainItemIndex, value: value }))}
        style={{
          backgroundColor: (state.rooms == index && state.main == mainItemIndex) ? '#96baff40' : theme.colors.card,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: ms(15)
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <IoniconsIcons
            name={(state.rooms == index && state.main == mainItemIndex) ? "radio-button-on" : "radio-button-off"}
            color={(state.rooms == index && state.main == mainItemIndex) ? 'rgb(0,131,233)' : theme.colors.genderBorder}
            size={ms(25)}
          />
          <View style={{ marginHorizontal: s(10), justifyContent: 'space-between', height: vs(100) }}>
            <View>
              <Text style={{ fontSize: ms(17), fontWeight: "bold", color: theme.colors.gray51 }}>
                {roomOnly}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginVertical: vs(3) }}>
                <Text style={{ fontSize: ms(5) }}>{"\u2b24"}</Text>
                <Text style={{ paddingLeft: 5, color: theme.colors.gray51 }}>{"Non meals included"}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginVertical: vs(3) }}>
                <Text style={{ fontSize: ms(5) }}>{"\u2b24"}</Text>
                <Text style={{ paddingLeft: 5, color: "#8D2828" }}>
                  {"Non-Refundable"}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={{ color: "rgb(17,114,153)", fontWeight: "bold" }}>
                More Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.genderBorder,
              textDecorationLine: "line-through",
              textDecorationColor: "#8D2828", textAlign: 'right'
            }}
          >
            {"\u20B9"} 950
          </Text>
          <Text
            style={{
              color: theme.colors.text,
              fontWeight: "bold",
              fontSize: ms(18), textAlign: 'right'
            }}
          >
            {"\u20B9"} {value}
          </Text>
          <Text style={{ color: theme.colors.genderBorder, textAlign: 'right' }}>
            + {"\u20B9"} 51 taxes &
          </Text>
          <Text style={{ color: theme.colors.genderBorder, textAlign: 'right' }}>fees Per Night</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => {
    const mainItemIndex = index;
    const data = [0, 1, 2, 3]
    getInsideData = () => {

      let data = [0, 1, 2, 3]
      data.map((props) => {
        return <Rooms />
      })

    }

    const Seperator = () => {
      return (
        <View style={{ height: 1, backgroundColor: 'rgb(193,193,193)' }} />
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemHeaderText}>Super Deluxe Room Twin Bed</Text>
          <Text style={{ fontSize: ms(25), fontWeight: "bold" }}>
            {" \u2022 "}
          </Text>
          <Text>2 Adults</Text>
        </View>
        <View style={styles.itemMain}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'red',
              paddingHorizontal: s(15),
              paddingVertical: vs(15),
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "https://i.imgur.com/UPrs1EWl.jpg",
              }}
              style={{ width: 120, height: 120, borderRadius: ms(5) }}
              resizeMode="cover"
            />
            <View
              style={{
                justifyContent: "space-between",
                marginHorizontal: s(15),
              }}
            >
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <IoniconsIcons
                    name={"cube-outline"}
                    color={theme.colors.genderBorder}
                    size={ms(25)}
                  />
                  <Text
                    style={{
                      color: theme.colors.genderBorder,
                      marginLeft: s(10),
                      fontWeight: "bold",
                    }}
                  >
                    240 sq.ft
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <IoniconsIcons
                    name={"bed-outline"}
                    color={theme.colors.genderBorder}
                    size={ms(25)}
                  />
                  <Text
                    style={{
                      color: theme.colors.genderBorder,
                      marginLeft: s(10),
                      fontWeight: "bold",
                    }}
                  >
                    Twin Bed
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={{ color: "rgb(17,114,153)", fontWeight: "bold" }}>
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            {/* {data.map((props) => {
              return <Rooms />
            })} */}
            <FlatList
              data={[0, 1]}
              ItemSeparatorComponent={Seperator}
              renderItem={({ item, index }) => Rooms({ index, item, mainItemIndex: mainItemIndex })}
              style={{
                marginHorizontal: ms(15),
                backgroundColor: theme.colors.card,
                shadowColor: "rgba(0,0,0,.60 )",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 2,
                elevation: 5,
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    );
  };

  const BookingDetails = () => {
    return (
      <View style={styles.bodyContainer}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <BookingDetails />
        {state.value ? <Footer /> : null}
      </SafeAreaView>
      <AppLoader loading={state.isLoading} style={{ position: "absolute" }} />
    </>
  );
};

export default HotelBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  headerTitle: {
    flex: 1,
    justifyContent: "flex-start",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: s(5),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.card,
    paddingVertical: ms(7),
    paddingHorizontal: ms(10),
  },
  backButton: {
    margin: ms(5),
    marginLeft: 0,
  },
  footer: {
    backgroundColor: "rgb(18, 26, 35)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  anotherHeader: {
    paddingHorizontal: s(10),
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(151,151,151,0.3)",
  },
  mainHeader: {
    margin: ms(5),
    paddingVertical: ms(5),
    // borderBottomWidth: 1,
    // borderBottomColor: "rgba(151,151,151,0.5)",
  },
  addButton: {
    margin: ms(10),
    backgroundColor: theme.colors.card,
    borderRadius: ms(5),
    padding: ms(10),
    shadowColor: "rgba(0,0,0,.60 )",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: ms(15),
  },
  itemHeaderText: {
    fontSize: ms(16),
    fontWeight: "bold",
  },
  itemHeader: {
    // backgroundColor: 'blue',
    borderTopColor: "rgba(151,151,151,0.3)",
    borderTopWidth: 1,
    paddingVertical: ms(5),
    paddingHorizontal: ms(15),
    flexDirection: "row",
    alignItems: "center",
  },
  itemMain: {
    // backgroundColor: 'red',
    overflow: "hidden",
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "rgba(151,151,151,0.5)",
    // borderBottomColor: "rgba(151,151,151,0.3)",
  },
});
