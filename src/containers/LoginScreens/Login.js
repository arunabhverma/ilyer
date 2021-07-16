import React, { useState, useMemo, useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import theme from '@theme';
import {
 ButtonText,
 SecondaryText,
} from "@components";
import TextInputField from './widgets/textInputField'
import { ms, vs, s } from "react-native-size-matters/extend";

const Login = ({ navigation }) => {
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
     title="Password"
     value={pass}
     onChangeText={setPass}
     isPassword
    />
   </View>
  );
 }, [email, pass]);

 return (
  <View style={{ flex: 1, backgroundColor: theme.colors.card, }}>
   <Image
    style={{ height: vs(400), width: '100%' }}
    source={{
     uri: 'https://i.imgur.com/UPrs1EWl.jpg'
    }}
   />
 
   <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: vs(30) }}>
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
     <SecondaryText fontSize={14} textAlign={'center'}>{'Don\'t have an account? '}</SecondaryText>
     <TouchableOpacity onPress={() => navigation.push('Signup')}>
      <SecondaryText fontSize={14} textAlign={'center'} color={'red'}>{'Signup'}</SecondaryText>
     </TouchableOpacity>
    </View>

   </View>
   <View style={{ width: '100%', shadowColor: "rgba(0,0,0,.60 )",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10, backgroundColor: theme.colors.card, position: 'absolute', top: vs(200), borderRadius: s(55)
   }} >
    <View style={{ marginTop: vs(35), alignItems: 'center', marginHorizontal: s(60) }}>
     <SecondaryText fontSize={24}>{'Welcome'}</SecondaryText>
     <View style={{ marginTop: vs(10) }}></View>
     <SecondaryText fontSize={14} textAlign={'center'}>{'Sign up to get started and experience great shopping deals'}</SecondaryText>
    </View>
    {InputContainer}
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: s(30) }}>
     <View />
     <SecondaryText fontSize={14} textAlign={'center'}>{'Forgot Password?'}</SecondaryText>
    </View>
    <TouchableOpacity
     onPress={()=> navigation.push("Verification")}
     style={{ height: vs(40), backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginTop: vs(20), marginBottom:vs(40), marginHorizontal: s(25), borderRadius: ms(35), }}>
     <ButtonText>{'SIGN IN'}</ButtonText>
    </TouchableOpacity>
   </View>
  </View>
 )
}
export default Login