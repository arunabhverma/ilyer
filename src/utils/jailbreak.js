import { NativeModules, Platform } from 'react-native';

export const checkJailBroken = () => {
  let CheckJailbreak;
  if (Platform.OS === 'ios') {
    CheckJailbreak = NativeModules.CheckJailbreakModule;
    return CheckJailbreak.isJailBroken && Platform.OS === 'ios';
  } else {
    return false;
  }
};
