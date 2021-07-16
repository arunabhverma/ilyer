import React from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import IGStoryCircle from "react-native-instagram-story-circle";
import theme from '@theme';
import {
  ScreenHeadingText,
  SecondaryText,
  ButtonText
} from "@components";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { s, vs, ms } from "react-native-size-matters/extend";

const SupportStack = ({ navigation }) => {


 return (
  <View style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
  <View style={{ alignItems: 'center', backgroundColor: 'red',marginBottom:vs(20), paddingVertical: vs(5) }}>
    <ButtonText fontSize={ms(25)} color={'white'} >{'Support'}</ButtonText>
     </View>
     <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:s(20), borderWidth: ms(1.5), marginHorizontal: s(25), marginTop: vs(20), height: vs(40) }}>
       <ButtonText fontSize={ms(12)} color={'black'} >{'How can i change my password ?'}</ButtonText>
       <IoniconsIcons
            name={'chevron-down-outline'}
            color="#000"
            size={26}
          />
     </View>
     <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:s(20), borderWidth: ms(1.5), marginHorizontal: s(25), marginTop: vs(20), height: vs(40) }}>
       <ButtonText fontSize={ms(12)} color={'black'} >{'How can i change my password ?'}</ButtonText>
       <IoniconsIcons
            name={'chevron-down-outline'}
            color="#000"
            size={26}
          />
     </View>
     <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:s(20), borderWidth: ms(1.5), marginHorizontal: s(25), marginTop: vs(20), height: vs(40) }}>
       <ButtonText fontSize={ms(12)} color={'black'} >{'How can i change my password ?'}</ButtonText>
       <IoniconsIcons
            name={'chevron-down-outline'}
            color="#000"
            size={26}
          />
     </View>
     <View style={{ flexDirection: 'row', justifyContent:'space-evenly', marginTop:vs(40) }}>
       <View style={{ height:vs(280), width:s(160), backgroundColor:'rgb(249,249,249)', shadowColor: "rgba(0,0,0,.60 )",
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: 0.4,
         shadowRadius: 12,
   alignItems:'center',
   elevation: 10,}}>
      <IoniconsIcons
            name={'ios-mail-outline'}
            color="#000"
            size={ms(60)}
         />
         <ButtonText fontSize={ms(14)} color={'red'} >{'Send us an email'}</ButtonText>
         <View style={{ marginTop: vs(20), marginHorizontal: s(10) }}>
         <SecondaryText fontSize={ms(12)} textAlign={'center'} color={'black'} >{'Have a question to ask? mail it to support@ilyerooms.com and we\'ll get back to you'}</SecondaryText>
         </View>
         <TouchableOpacity
              onPress={() => navigation.push("Verification")}
              style={{ height: vs(30), marginTop:vs(15), alignSelf:'center', borderColor: 'red', borderWidth:ms(2), alignItems: 'center', justifyContent: 'center', marginBottom: vs(5), width: s(80), borderRadius: ms(15), }}>
              <ButtonText fontSize={ms(10)} color={'black'}>{'Contact us'}</ButtonText>
            </TouchableOpacity>
       </View>
       <View style={{ height:vs(280), width:s(160), alignItems:'center', backgroundColor:'rgb(249,249,249)', shadowColor: "rgba(0,0,0,.60 )",
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: 0.4,
   shadowRadius: 12,
   elevation: 10,}}>
<IoniconsIcons
            name={'call-outline'}
            color="#000"
            size={ms(60)}
         />
         <ButtonText fontSize={ms(14)} color={'red'} >{'Call us'}</ButtonText>
         <View style={{ marginTop: vs(55), marginBottom:vs(10), marginHorizontal: s(10) }}>
           <SecondaryText fontSize={ms(12)} textAlign={'center'} color={'black'} >{'1800-210-210-996'}</SecondaryText>
           
         </View>
         <SecondaryText fontSize={ms(10)} textAlign={'center'} color={'black'} >{'mon-fri 9:00 Am to 8PM'}</SecondaryText>
         <TouchableOpacity
              onPress={() => navigation.push("Verification")}
              style={{ height: vs(30), marginTop:vs(15), alignSelf:'center', borderColor: 'red', borderWidth:ms(2), alignItems: 'center', justifyContent: 'center', marginBottom: vs(5), width: s(80), borderRadius: ms(15), }}>
              <ButtonText fontSize={ms(10)} color={'black'}>{'Call us'}</ButtonText>
            </TouchableOpacity>
       </View>
     </View>
   </View>
 )
}
export default SupportStack