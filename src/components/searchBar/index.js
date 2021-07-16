import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { s, vs, ms } from "react-native-size-matters";
import PropTypes from "prop-types";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import theme from "@theme";

const SearchBar = ({
  placeholder,
  onSubmit,
  setSearchCardShow,
  searchText,
}) => {
  const [value, onChangeText] = useState("");

  useEffect(() => {
    onChangeText(searchText);
  }, [searchText]);

  const ClearButton = () => {
    if (value.trim().length == 0) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => {
          onChangeText("");
          setSearchCardShow(false);
        }}
        style={styled.touchStyle}
      >
        <IoniconsIcons
          name="close"
          color="#000"
          size={ms(15)}
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styled.boxStyle}>
      <IoniconsIcons
        name="search-outline"
        color="#000"
        size={ms(20)}
        style={{ marginHorizontal: ms(8) }}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.searchText}
        onChangeText={(text) => onChangeText(text)}
        autoCorrect={false}
        value={value}
        onSubmitEditing={() => {
          if (value.trim().length !== 0) onSubmit(value);
        }}
        style={styled.inputText}
      ></TextInput>
      <ClearButton />
    </View>
  );
};
const styled = StyleSheet.create({
  boxStyle: {
    flexDirection: "row",
    height: vs(40),
    backgroundColor: theme.colors.searchBox,
    borderRadius: ms(15),
    alignItems: "center",
  },
  inputText: {
    fontSize: ms(17),
    lineHeight: 22,
    fontFamily: theme.fonts.SFProTextRegular,
    flex: 1,
    
  },
  touchStyle: {
    height: s(22),
    width: s(22),
    borderRadius: s(11),
    backgroundColor: theme.colors.searchBarBacjground,
    justifyContent: "center",
    marginHorizontal: ms(8),
  },
});

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  setSearchCardShow: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
