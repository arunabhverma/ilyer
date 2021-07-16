import React, { useState, useMemo, useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import theme from '@theme';
import {
 ButtonText,
 SecondaryText,
} from "@components";
import TextInputField from './widgets/textInputField'
import { ms, vs, s } from "react-native-size-matters/extend";

const Signup = ({ navigation }) => {
 const [email, setEmail] = useState("");
 const [pass, setPass] = useState("");

 const InputContainer = useMemo(() => {
  return (
   <View style={{ marginHorizontal: s(20) }}>
    <TextInputField
     title="Username"
     value={email}
     keyboardType={"email-address"}
     onChangeText={setEmail}
    />
    <TextInputField
     title="Email"
     value={email}
     keyboardType={"email-address"}
     onChangeText={setEmail}
    />
    <TextInputField
     title="Password"
     value={pass}
     onChangeText={setPass}
     isPassword={true}
    />
   </View>
  );
 }, [email, pass]);

 return (
  <View style={{ flex: 1, backgroundColor: theme.colors.card, }}>
   <Image
    style={{ height: vs(150), width: s(260), alignSelf: 'center' }}
    source={require('@images/logo.png')}
    resizeMode={"contain"}
   />
   <View style={{
    width: '100%', backgroundColor: theme.colors.card, borderRadius: s(55)
   }} >
    <Image
     style={{ height: vs(150), width: s(260), alignSelf: 'center' }}
     source={require('@images/signupPic.png')}
     resizeMode={"contain"}
    />
    {InputContainer}
    <TouchableOpacity

     onPress={() => navigation.push("Verification")}
     style={{ height: vs(40), backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginTop: vs(60), marginHorizontal: s(25), borderRadius: ms(35), }}>
     <ButtonText>{'SIGN UP'}</ButtonText>
    </TouchableOpacity>
   </View>
   <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: vs(30) }}>
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
     <SecondaryText fontSize={14} textAlign={'center'}>{'Already have an account? '}</SecondaryText>
     <TouchableOpacity onPress={() => navigation.pop()}>
      <SecondaryText fontSize={14} textAlign={'center'} color={'red'}>{'Sign in'}</SecondaryText>
     </TouchableOpacity>
    </View>
   </View>
  </View>
 )
}
export default Signup