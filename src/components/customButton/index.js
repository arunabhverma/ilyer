import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ms, vs, s } from "react-native-size-matters/extend";
import PropTypes from "prop-types";
import { Text, Image } from "@components";
import theme from "@theme";

const CustomButton = ({
  image,
  title,
  textColor,
  rightTitle,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress();
      }}
      style={{
        height: vs(44),
        marginTop: vs(12),
        borderColor: theme.colors.searchBarBorder,
        borderWidth: ms(1),
        borderRadius: vs(22),
        backgroundColor: backgroundColor ?? theme.colors.fbButtonColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={image}
        style={{ height: ms(20), width: ms(20), marginLeft: ms(20) }}
        resizeMode="contain"
      ></Image>
      <Text
        style={{
          fontSize: 17,
          fontFamily: theme.fonts.SFProDisplaySemibold,
          color: textColor ?? theme.colors.card,
        }}
      >
        {title}
      </Text>
      <View style={{ height: ms(20), width: ms(20), marginLeft: ms(20) }}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: theme.fonts.SFProDisplaySemibold,
            color: textColor ?? theme.colors.card,
          }}
        >
          {rightTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
CustomButton.propTypes = {
  image: PropTypes.number,
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  rightTitle: PropTypes.string,
    backgroundColor: PropTypes.string,
  onPress: PropTypes.func.isRequired
};
export default CustomButton;
