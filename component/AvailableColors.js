import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
const AvailableColors = (props) => {
  return (
    <View style={styles.Container}>
      <View
        style={{
          ...styles.Color,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SimpleLineIcons name="check" size={30} color="black" />
      </View>
      <View style={{ ...styles.Color, backgroundColor: "#008080" }}></View>
      <View style={{ ...styles.Color, backgroundColor: "#FF8C00" }}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    marginTop: 20,
  },
  Color: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 10,
  },
});
export default AvailableColors;
