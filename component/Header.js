import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.Container}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Text style={styles.Heading}>{props.Heading}</Text>
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  Heading: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});
export default Header;
