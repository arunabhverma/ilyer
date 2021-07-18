import React, { useState } from 'react';
import {

  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { s, vs, ms } from 'react-native-size-matters/extend';
import { Picker } from '@react-native-picker/picker';
import { AppLoader, PlainText, SectionHeadingText } from '@components';
import theme from '@theme';

const BookingReview = () => {

  const [state, setState] = useState({
    me: '',
    another: '',
    gender: 'Mrs.'
  })
  const Header = () => {
    return (
      <View style={styles.header}>
        <IoniconsIcons
          name={'arrow-back'}
          color={theme.colors.genderBorder}
          size={ms(25)}
        />
        <PlainText style={styles.headerText}>Review Booking</PlainText>
      </View>
    );
  };

  const FooterPolicyText = () => {
    const Texts = (props) => {
      return (
        <TouchableOpacity style={styles.termsButton}>
          <PlainText style={styles.termsButtonText}>{props.children}</PlainText>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.footerTermsContainer}>
        <View style={{ flexDirection: 'row' }}>
          <PlainText style={styles.termsText}>
            {'By proceeding, I agree to'}
          </PlainText>
          <Texts>{' User Agreement,'}</Texts>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Texts>{' Terms of Service'}</Texts>
          <PlainText style={styles.termsText}>{' and '}</PlainText>
          <Texts>{'Cancellation & Hotel Booking Policies'}</Texts>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <FooterPolicyText />
        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['rgb(0,157,247)', 'rgb(0,85,230)']}
            style={styles.linerGradient}
          >
            <PlainText
              style={{
                color: theme.colors.card,
                fontWeight: 'bold',
                fontSize: ms(18),
              }}
            >
              CONTINUE
            </PlainText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  const BookingForPlate = () => {
    return (
      <View>
        <SectionHeadingText color={theme.colors.text} fontWeight={'bold'} >I am booking for</SectionHeadingText>
        <View style={{ flexDirection: 'row', marginVertical: vs(10) }}>
          <TouchableOpacity activeOpacity={1} onPress={() => setState((prev) => ({ ...prev, me: !state.me, another: false }))} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IoniconsIcons
              name={state.me ? 'radio-button-on' : 'radio-button-off'}
              color={state.me ? 'rgb(0,131,233)' : theme.colors.genderBorder}
              size={ms(25)}
              style={{ marginRight: s(5) }}
            />
            <SectionHeadingText fontSize={ms(18)} color={theme.colors.text}>Myself</SectionHeadingText>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => setState((prev) => ({ ...prev, another: !state.another, me: false }))} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: s(15) }}>
            <IoniconsIcons
              name={state.another ? 'radio-button-on' : 'radio-button-off'}
              color={state.another ? 'rgb(0,131,233)' : theme.colors.genderBorder}
              size={ms(25)}
              style={{ marginRight: s(5) }}
            />
            <SectionHeadingText fontSize={ms(18)} color={theme.colors.text}>Someone Else</SectionHeadingText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const Name = () => {
    return (
      <View>
        <Picker
          selectedValue={state.gender}
          onValueChange={(itemValue, itemIndex) =>
            setState((prev) => ({ ...prev, gender: itemValue }))
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <PlainText>hello world</PlainText>
      </View>
    );
  }

  const BookingFor = () => {
    return (
      <View style={[styles.roomStyles, { padding: ms(15) }]}>
        <BookingForPlate />
        <Name />
      </View>
    );
  }

  const BookingDetails = () => {
    const RoomTape = (props) => {
      return (
        <View style={props.serviceFee ? styles.serviceFeeActive : styles.serviceFeeDefault}>
          <View
            style={
              props.serviceFee
                ? { flexDirection: 'row', alignItems: 'center' }
                : { paddingVertical: ms(10) }
            }>
            <PlainText
              style={
                props.serviceFee
                  ? { color: theme.colors.text }
                  : { fontWeight: 'bold', color: theme.colors.text }
              }>
              {props.details}
            </PlainText>
            {props.basePrice ? (
              <PlainText style={styles.basePrice}>{'Base Price'}</PlainText>
            ) : null}
            {props.serviceFee ? (
              <IoniconsIcons
                name={'alert-circle-outline'}
                color={theme.colors.genderBorder}
                size={ms(25)}
                style={{ marginHorizontal: s(10) }}
              />
            ) : null}
          </View>
          <PlainText
            style={
              props.totalAmount
                ? styles.totalAmountActive
                : props.serviceFee
                  ? { color: theme.colors.text }
                  : { fontWeight: 'bold', color: theme.colors.text }
            }>
            {props.amount}
          </PlainText>
        </View>
      );
    };

    const Rooms = () => {
      return (
        <View style={styles.roomStyles}>
          <RoomTape
            details={'1 Room x 1 Night'}
            amount={'\u20B9  850'}
            basePrice={true}
          />
          <RoomTape
            details={'Service Fees'}
            amount={'\u20B9  51'}
            serviceFee={true}
          />
          <RoomTape
            details={'Total Amount to be paid'}
            amount={'\u20B9 843'}
            totalAmount={true}
          />
        </View>
      );
    }
    return (
      <View style={styles.bookingContainer}>
        <Rooms />
        <BookingFor />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BookingDetails />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    alignItems: 'center',
    padding: ms(10),
    shadowColor: 'rgba(0,0,0,.60 )',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  headerText: {
    fontSize: ms(20),
    color: theme.colors.text,
    marginLeft: s(15),
  },
  footerContainer: {
    margin: ms(10),
  },
  linerGradient: {
    paddingVertical: ms(10),
    borderRadius: ms(5),
    paddingHorizontal: s(55),
  },
  footerTermsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ms(15),
  },
  termsButton: {
    justifyContent: 'center',
  },
  termsText: {
    fontSize: ms(12),
  },
  termsButtonText: {
    fontSize: ms(12),
    color: theme.colors.modify,
  },
  bookingContainer: {
    flex: 1,
  },
  roomStyles: {
    backgroundColor: theme.colors.card,
    margin: s(10),
    borderRadius: ms(5),
    borderWidth: 1,
    borderColor: theme.colors.genderBorder,
    overflow: 'hidden',
  },
  serviceFeeActive: {
    backgroundColor: theme.colors.card,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: ms(15),
    marginHorizontal: ms(15),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.genderBorder,
  },
  serviceFeeDefault: {
    backgroundColor: theme.colors.card,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ms(15),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.genderBorder,
  },
  basePrice: {
    textAlign: 'left',
    fontSize: ms(15),
    color: theme.colors.text,
  },
  totalAmountActive: { fontWeight: 'bold', color: '#8D2828' },
});

export default BookingReview;
