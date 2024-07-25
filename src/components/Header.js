import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Header = ({ navigation, showHeader = true }) => {
  if (!showHeader) return null;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingTop: 0,
        paddingBottom: 16,
        backgroundColor: "#007400",
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require("../../assets/hamburger-icon.png")}
          style={{ width: 24, height: 24, tintColor: "#FFF" }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          color: "#FFF",
          fontWeight: "bold",
        }}
      >
        LigaLocal Fut
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Image
          source={require("../../assets/search-icon.png")}
          style={{ width: 28, height: 28, tintColor: "#FFF" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
