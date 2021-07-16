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
import DatePicker from "react-native-date-picker";
import axios from "axios";
import moment from "moment";
import RBSheet from "react-native-raw-bottom-sheet";
import { AppLoader } from "@components";
import theme from "@theme";
import DateRBsheet from "./DatePicker";

const FilterStack = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    propertyList: [],
    checkInDate: "",
    checkOutDate: "",
    dateValue: "",
    adult: 0,
    kid: 0,
    room: 0,
  });
  const checkInDateOut = useRef();
  const checkOutDateOut = useRef();
  const openDatePicker = ({ checkIn }) => {
    checkIn ? checkInDateOut.current.open() : checkOutDateOut.current.open();
  };

  const onCloseDate = ({ checkIn }) => {
    checkIn ? checkInDateOut.current.close() : checkOutDateOut.current.close();
  };

  const onDoneDate = (value) => {
    console.log("value", value);
    if (value.checkIn) {
      setState((prev) => ({
        ...prev,
        checkInDate: moment(value.value).format("DD/MM/YYYY"),
        dateValue: value,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        checkOutDate: moment(value.value).format("DD/MM/YYYY"),
        dateValue: value,
      }));
    }
  };

  // useEffect(() => {
  //   console.log('datevalue', state.dateValue)
  // }, [state.checkInDate, state.dateValue])

  const RbDateCheckIn = () => {
    return (
      <RBSheet
        ref={checkInDateOut}
        closeOnDragDown={false}
        closeOnPressMask={false}
        customStyles={{
          container: {
            borderTopLeftRadius: s(12),
            borderTopRightRadius: s(12),
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: vs(20),
            paddingTop: vs(30),
          },
          wrapper: {
            backgroundColor: "rgba(25, 25, 25,0.50)",
          },
        }}
      >
        <DateRBsheet
          onDonePress={(value) => onDoneDate({ value, checkIn: true })}
          onCloseRB={(value) => onCloseDate({ checkIn: true })}
          mode={"date"}
        />
      </RBSheet>
    );
  };

  const RbDateCheckOut = () => {
    return (
      <RBSheet
        ref={checkOutDateOut}
        closeOnDragDown={false}
        closeOnPressMask={false}
        customStyles={{
          container: {
            borderTopLeftRadius: s(12),
            borderTopRightRadius: s(12),
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: vs(20),
            paddingTop: vs(30),
          },
          wrapper: {
            backgroundColor: "rgba(25, 25, 25,0.50)",
          },
        }}
      >
        <DateRBsheet
          minimumDate={new Date(state.checkInDate)}
          onDonePress={(value) => onDoneDate({ value, checkIn: false })}
          onCloseRB={(value) => onCloseDate({ checkIn: false })}
          mode={"date"}
        />
      </RBSheet>
    );
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <IoniconsIcons
            name={"chevron-back-outline"}
            color={theme.colors.notification}
            size={ms(25)}
          />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={{ color: "white", fontSize: ms(25) }}>Room Booking</Text>
        </View>
        <View style={{ width: s(32) }} />
      </View>
    );
  };

  const Footer = () => {
    const FooterButton = ({ text, fill }) => {
      return (
        <TouchableOpacity
          style={fill ? styles.fillButton : styles.normalButton}
        >
          <Text style={fill ? styles.fillText : styles.normalText}>{text}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.footer}>
        <FooterButton text={"clear"} />
        <FooterButton text={"apply"} fill={true} />
      </View>
    );
  };

  const Counter = ({ increase, decrease, count }) => {
    let data = count.toString();
    console.log(data.length === 1);
    return (
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={increase}>
          <IoniconsIcons
            name={"add-circle-outline"}
            color={"rgb(172,172,172)"}
            size={ms(18)}
          />
        </TouchableOpacity>
        <Text style={styles.counterValue}>
          {data.length === 1 ? `0${data}` : data}
        </Text>
        <TouchableOpacity disabled={!(count > 0)} onPress={decrease}>
          <IoniconsIcons
            name={"remove-circle-outline"}
            color={"rgb(172,172,172)"}
            size={ms(18)}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const DateLimit = ({ name, first, second }) => {
    let dateNow = moment().format("L");
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>{name}</Text>
        <View style={styles.detailBoxContent}>
          <View style={styles.detailBox}>
            <Text style={styles.detailFirstText}>{first}</Text>
            <TouchableOpacity onPress={() => openDatePicker({ checkIn: true })}>
              <Text style={{ color: "rgb(105,105,105)" }}>
                {state.checkInDate ? state.checkInDate : dateNow}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailFirstText}>{second}</Text>
            <TouchableOpacity
              onPress={() => openDatePicker({ checkIn: false })}
            >
              <Text style={{ color: "rgb(105,105,105)" }}>
                {state.checkOutDate ? state.checkOutDate : dateNow}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const Guests = ({ name, first, second }) => {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>{name}</Text>
        <View style={styles.detailBoxContent}>
          <View style={styles.detailBox}>
            <Text style={styles.detailFirstText}>{first}</Text>
            <Counter
              count={state.adult}
              increase={() =>
                setState((prev) => ({ ...prev, adult: state.adult + 1 }))
              }
              decrease={() =>
                setState((prev) => ({ ...prev, adult: state.adult - 1 }))
              }
            />
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailFirstText}>{second}</Text>
            <Counter
              count={state.kid}
              increase={() =>
                setState((prev) => ({ ...prev, kid: state.kid + 1 }))
              }
              decrease={() =>
                setState((prev) => ({ ...prev, kid: state.kid - 1 }))
              }
            />
          </View>
        </View>
      </View>
    );
  };
  const Details = ({ name, first, second }) => {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>{name}</Text>
        <View style={styles.detailBoxContent}>
          <View style={styles.detailBox}>
            <Text style={styles.detailFirstText}>{first}</Text>
            <IoniconsIcons
              name={"chevron-down"}
              color={theme.colors.text}
              size={ms(20)}
            />
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailFirstText}>{second}</Text>
            <Counter
              count={state.room}
              increase={() =>
                setState((prev) => ({ ...prev, room: state.room + 1 }))
              }
              decrease={() =>
                setState((prev) => ({ ...prev, room: state.room - 1 }))
              }
            />
          </View>
        </View>
      </View>
    );
  };
  const BookingDetails = () => {
    return (
      <View style={styles.bodyContainer}>
        <DateLimit
          name={"Booking Date"}
          first={"CheckIn"}
          second={"CheckOut"}
          date={[true, true]}
          counter={[false, false]}
          stateVal={[state.adult, state.kid]}
          dropDown={false}
        />
        <Guests
          name={"Guests"}
          first={"Adult"}
          second={"Kid"}
          date={[false, false]}
          counter={[true, true]}
          stateVal={[state.adult, state.kid]}
          dropDown={false}
        />
        <Details
          name={"Room Details"}
          first={"Room Category"}
          second={"No of Room"}
          date={[false, false]}
          counter={[false, true]}
          stateVal={[state.adult, state.kid]}
          dropDown={true}
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <BookingDetails />
        <Footer />
        <RbDateCheckIn />
        <RbDateCheckOut />
      </SafeAreaView>
      <AppLoader loading={state.isLoading} style={{ position: "absolute" }} />
    </>
  );
};

export default FilterStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  bodyContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    paddingVertical: vs(30),
    paddingHorizontal: s(20),
  },
  detailsContainer: {
    justifyContent: "center",
    marginBottom: vs(10),
  },
  detailBoxContent: {
    flexDirection: "row",
    // backgroundColor: 'blue',
    justifyContent: "space-between",
    marginVertical: vs(10),
  },
  counterValue: {
    marginHorizontal: s(2),
    color: "rgb(105,105,105)",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.notification,
    paddingVertical: ms(7),
    paddingHorizontal: ms(10),
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detailTitle: {
    fontSize: ms(18),
  },
  detailBox: {
    paddingHorizontal: s(10),
    paddingVertical: vs(20),
    backgroundColor: "rgb(243,243,243)",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
    shadowColor: "rgba(0,0,0,.60 )",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  detailFirstText: {
    fontSize: ms(12),
    color: theme.colors.notification,
  },
  backButton: {
    width: s(32),
    height: s(32),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: ms(10),
    padding: ms(3),
    shadowColor: "rgba(0,0,0,.60 )",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fillButton: {
    margin: ms(10),
    paddingHorizontal: ms(60),
    paddingVertical: ms(15),
    borderRadius: ms(50),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.notification,
    backgroundColor: theme.colors.notification,
  },
  normalButton: {
    margin: ms(10),
    paddingHorizontal: ms(60),
    paddingVertical: ms(15),
    borderRadius: ms(50),
    borderWidth: 1,
    borderColor: theme.colors.notification,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.card,
  },
  fillText: {
    textTransform: "uppercase",
    fontSize: ms(15),
    color: theme.colors.card,
  },
  normalText: {
    textTransform: "uppercase",
    fontSize: ms(15),
    color: theme.colors.text,
  },
});
