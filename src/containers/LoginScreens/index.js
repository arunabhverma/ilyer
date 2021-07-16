import React from "react";
import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { s, vs, ms } from "react-native-size-matters";
import theme from "@theme";
import Login from './Login'
import { ScreenHeadingText, Container, Text } from "@components";
import Signup from "./Signup";
import Verification from "./Verification"
const Stack = createStackNavigator();

const LoginStack = ({navigation, route}) => {
  
  const HeaderGoBack = ({ navigation }) => {
    return (
        <IoniconsIcons
          name="chevron-back-outline"
          color="#000"
          style={{marginLeft:s(15)}}
          size={26}
        />
    );
  };
  const HeaderLogin = ({ navigation }) => {
    return (
      <Container>
          <Text color= {'red'}>Sign up</Text>
      </Container>
    );
  };
  const HeaderSignUp = ({ navigation }) => {
    return (
      <Container>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text color={theme.colors.fbButtonColor}>Sign Up</Text>
        </TouchableOpacity>
      </Container>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
          shadowOpacity: 0,
          elevation: 0,
        },
        headerBackImage: (props) => <HeaderGoBack navigation={navigation} />,
        headerTintColor: theme.colors.text,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 24,
          letterSpacing: 0.29,
          fontFamily: theme.fonts.SFProDisplayBold,
        },
        headerLeftContainerStyle: {},
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
         headerShown:false
        })}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({ navigation }) => ({
         headerTitle: (props) => null,
         headerRight: () => <HeaderLogin navigation={navigation} />,
       })}
      />
       <Stack.Screen
        name="Verification"
        component={Verification}
        options={({ navigation }) => ({
          headerShown:true,
          headerTitleAlign:'center'
       })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    height: vs(54),
    width: s(71),
    justifyContent: "center",
    // alignSelf: "center",
  },
});

export default LoginStack;
