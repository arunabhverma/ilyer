import { Platform } from 'react-native';
const themeDefault = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgba(233, 36, 0, 1)',
    lightGray: 'rgb(115, 116, 111)',
    searchBox: 'rgba(142, 142, 147, 0.12)',
    searchText: 'rgb(142, 142, 147)',
    fbButtonColor: 'rgb(56, 98, 175)',
    fbButtonColorDisable: 'rgb(138,159,205)',
    dividerLine: 'rgba(14, 12, 29, 0.09)',
    gray241: 'rgb(241, 241, 241)',
    grayborder241: 'rgb(241, 244, 249)',
    darkGray12: 'rgba(166, 166, 167, 0.12)',
    darkGray35: 'rgba(166, 166, 167, 0.35)',
    searchBarBorder: 'rgba(14, 12, 29, 0.09)',
    loginBlack: 'rgb(28, 28, 34)',
    searchBarBacjground: 'rgba(14, 12, 29, 0.09)',
    gray216: 'rgb(216, 216, 216)',
    textInputFieldTitle: 'rgba(51, 51, 51, 0.7)',
    gray51: 'rgb(51, 51, 51)',
    infoBorder: 'rgba(151, 151, 151, 0.13)',
    genderBorder: 'rgb(151, 151, 151)',
    gray244: 'rgb(244, 244, 244)',
    gray117: 'rgb(117, 117, 117)',
    gray113: 'rgb(113, 113, 113)',
    gameStartBack: 'rgb(239, 242, 247)'
  },

  fonts: Platform.select({
    ios: {
      'SFProTextRegular': "SFProText-Regular",
      'SFProTextMedium': "SFProText-Medium",
      'SFProTextSemibold': "SFProText-Semibold",
      'SFProTextBold': "SFProText-Bold",
      'SFProDisplaySemibold': "SFProDisplay-Semibold",
      'SFProDisplayBold': "SFProDisplay-Bold",
    },
    android: {
      'SFProTextRegular': "SF-Pro-Text-Regular",
      'SFProTextMedium': "SF-Pro-Text-Medium",
      'SFProTextSemibold': "SF-Pro-Text-Semibold",
      'SFProTextBold': "SF-Pro-Text-Bold",
      'SFProDisplaySemibold': "SF-Pro-Display-Semibold",
      'SFProDisplayBold': "SF-Pro-Display-Bold",
    }
  })
};


export default themeDefault;
