import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ArrayOfImages from "../constant/ArrayOfImages";
import { FontAwesome } from "@expo/vector-icons";

const Similars = () => {
  return (
    <View styles={styles.Container}>
      <Text style={styles.Heading}>You may also like</Text>
      <View style={styles.SimilarContainer}>
        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={ArrayOfImages.Similars[0]} />
        </View>
        <View style={styles.DescriptionContainer}>
          <Text style={styles.Title}>Levi's Women Pullover</Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...styles.Title, color: "#4267B2" }}>$24.90</Text>
            <Text style={{ ...styles.Title, color: "#FF7417" }}>
              <FontAwesome name="star" size={22} color="#FF7417" />
              4.5
            </Text>
          </View>
          <Text style={styles.SubTitle}>
            Maroon self-design pullover sweater, has a round neck, long sleeves
          </Text>
        </View>
      </View>
      <View style={styles.SimilarContainer}>
        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={ArrayOfImages.Similars[1]} />
        </View>
        <View style={styles.DescriptionContainer}>
          <Text style={styles.Title}>Roadster Black Jacket</Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...styles.Title, color: "#4267B2" }}>$24.90</Text>
            <Text style={{ ...styles.Title, color: "#FF7417" }}>
              <FontAwesome name="star" size={22} color="#FF7417" />4
            </Text>
          </View>
          <Text style={styles.SubTitle}>
            Women Black Solid Active Bomber Jacket For Daily Use
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
  Heading: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 20,
  },
  SimilarContainer: {
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 20,
    padding: 15,
    flexDirection: "row",
    width: "100%",
  },
  ImageContainer: {
    width: "30%",
  },
  Image: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    borderRadius: 15,
  },
  DescriptionContainer: {
    paddingLeft: 20,
    width: "70%",
  },
  Title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
  SubTitle: {
    fontFamily: "open-sans",
    textAlign: "justify",
    fontSize: 12,
  },
});
export default Similars;
