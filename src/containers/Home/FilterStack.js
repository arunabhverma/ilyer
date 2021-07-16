import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image, SafeAreaView } from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";
import axios from 'axios';
import { AppLoader } from "@components";
import theme from "@theme";

const FilterStack = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    propertyList: [],
  })
  useEffect(() => {
    setState((prev) => ({ ...prev, isLoading: true }));
    axios.post("https://iylerooms.com/api/property-list").then((res) => {
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
  const Header = () => {
    return (
      // <View style={{ backgroundColor: "red" }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: s(18),
          paddingVertical: vs(15),
          justifyContent: "space-between",
          borderBottomWidth: s(3),
          borderColor: theme.colors.genderBorder,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(242,242,242)",
            flexDirection: "row",
            borderRadius: ms(5),
            borderWidth: 1,
            borderColor: theme.colors.genderBorder,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: ms(10),
            }}
          >
            <IoniconsIcons
              name={"arrow-back-outline"}
              color="rgb(18,26,35)"
              size={ms(30)}
            />
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <View>
              <Text style={{ fontSize: ms(18), fontWeight: "600" }}>
                Jaipur
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: ms(10), color: "rgb(127,127,127)" }}>
                26 Apr - 27 Apr, 1 Rooms, 2 Guests{" "}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: ms(10),
              paddingVertical: ms(5),
            }}
          >
            <IoniconsIcons
              name={"pencil-sharp"}
              color={"rgb(0,122,230)"}
              size={ms(20)}
            />
            <Text
              style={{
                color: "rgb(0,122,230)",
                fontWeight: "bold",
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(0,122,230)",
            borderRadius: ms(5),
            borderWidth: 1,
            borderColor: theme.colors.genderBorder,
            paddingHorizontal: ms(20),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoniconsIcons name={"map-outline"} color="white" size={ms(16)} />
          <Text style={{ color: "white" }}>Map</Text>
        </TouchableOpacity>
      </View>
      // </View>
    );
  };

  const Footer = () => {
    return (
      <View style={{ backgroundColor: 'rgb(18, 26, 35)', flexDirection: 'row', borderRadius: ms(5), marginHorizontal: s(5), overflow: 'hidden' }}>
        <TouchableOpacity
          style={styles.footerButton}
        >
          <IoniconsIcons name={"logo-euro"} color="white" size={ms(25)} />
          <Text style={{ color: "white", fontSize: ms(10), marginTop: vs(5) }}>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
        >
          <IoniconsIcons name={"location-sharp"} color="white" size={ms(25)} />
          <Text style={{ color: "white", fontSize: ms(10), marginTop: vs(5) }}>Locality</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
        >
          <IoniconsIcons name={"home-sharp"} color="white" size={ms(25)} />
          <Text style={{ color: "white", fontSize: ms(10), marginTop: vs(5) }}>Property</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
        >
          <IoniconsIcons name={"flame-sharp"} color="white" size={ms(25)} />
          <Text style={{ color: "white", fontSize: ms(10), marginTop: vs(5) }}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerSortButton}
        >
          <IoniconsIcons name={"options"} color="white" size={ms(25)} />
          <Text style={{ color: "white", fontSize: ms(10), marginTop: vs(5) }}>Sort & Filters</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const HotelList = () => {
    const RenderItem = ({ item, index }) => {
      console.log(`https://iylerooms.com${item.main_image}`)
      return (
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            margin: s(15),
            borderRadius: ms(15),
            overflow: "hidden",
            shadowColor: "rgba(0,0,0,.60 )",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            elevation: 10,
          }}
        >
          <Image
            source={{ uri: `https://iylerooms.com${item.main_image}` }}
            style={styles.image}
            resizeMode={"cover"}
          />
          <View style={{ flex: 1, margin: vs(10), justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontSize: ms(16) }}>{item.hotel_name}</Text>
              <View style={{ flexDirection: "row", alignItems: 'center', marginVertical: vs(5) }}>
                <IoniconsIcons
                  name={"location-sharp"}
                  color="rgb(127,127,127)"
                  size={ms(15)}
                />
                <Text style={{ fontSize: ms(12), color: 'rgb(127,127,127)' }}>{item.address_1}</Text>
              </View>
              <View>
                <Text style={{ color: theme.colors.notification, fontWeight: 'bold' }}>$180/night</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
              <IoniconsIcons
                name={"car-sport-sharp"}
                color={theme.colors.notification}
                size={ms(25)}
              />
              <IoniconsIcons
                name={"wine-sharp"}
                color={theme.colors.notification}
                size={ms(25)}
              />
              <IoniconsIcons
                name={"wine"}
                color={theme.colors.notification}
                size={ms(25)}
              />
              <IoniconsIcons
                name={"wifi"}
                color={theme.colors.notification}
                size={ms(25)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.bookNowButton} onPress={() => navigation.navigate('BookingData')}>
            <Text style={styles.bookNowButtonText}>Book now</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <FlatList
        data={state.propertyList}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: 'white' }}>
        <Header />
        <HotelList />
        <Footer />
      </SafeAreaView>
      <AppLoader loading={state.isLoading} style={{ position: "absolute" }} />
    </>
  );
};

export default FilterStack;

const styles = StyleSheet.create({
  footerButton: {
    flex: 1,
    padding: ms(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerSortButton: {
    backgroundColor: "rgb(0,122,230)",
    paddingVertical: ms(15),
    paddingHorizontal: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: s(100),
    height: vs(150),
    backgroundColor: "red",
  },
  bookNowButton: {
    backgroundColor: theme.colors.notification,
    margin: ms(10),
    borderRadius: ms(15),
    justifyContent: 'center',
    alignItems: 'center',
    width: s(60),
    overflow: "hidden",
    shadowColor: "rgba(0,0,0,.60 )",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  bookNowButtonText: {
    color: 'white',
    textAlign: 'center',
    transform: [{ rotate: '270deg' }],
    width: s(90),
    fontSize: ms(16)
  }
})
