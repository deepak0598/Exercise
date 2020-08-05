import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "../component/Header";
import ArrayOfImages from "../constant/ArrayOfImages";
import { EvilIcons, Feather, FontAwesome } from "@expo/vector-icons";
import Colors from "../component/AvailableColors";
import Similars from "../component/Similars";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <View style={styles.Container}>
      <View>
        <Header Heading="T-Shirt" />
      </View>
      <ScrollView>
        <View>
          <View style={styles.ImageContainer}>
            <Image
              style={styles.Image}
              source={ArrayOfImages.IMAGES[currentImage]}
            />
          </View>
          <View style={styles.Like}>
            <EvilIcons name="heart" size={50} color="black" />
          </View>
          <View style={styles.ChangeImageContainer}>
            {ArrayOfImages.IMAGES.map((image, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => setCurrentImage(index)}
              >
                <Image style={styles.ChangeImage} key={index} source={image} />
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
        <View
          style={{
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.Title}>Roadster</Text>
          <Text style={styles.Description}>
            White Longline T-shirt with Raw Edge
          </Text>
        </View>
        <View style={styles.PurchaseOptionContainer}>
          <View style={styles.PurchaseOption}>
            <View style={styles.PurchaseOptionIcon}>
              <Feather name="truck" size={24} color="#4267B2" />
            </View>
            <Text style={styles.PurchaseOptionTitle}>Free{"\n"}Shipping</Text>
          </View>
          <View style={styles.PurchaseOption}>
            <View style={styles.PurchaseOptionIcon}>
              <Feather name="clock" size={24} color="#4267B2" />
            </View>
            <Text style={styles.PurchaseOptionTitle}>
              24 Hour{"\n"}Delivery
            </Text>
          </View>
          <View style={styles.PurchaseOption}>
            <View style={styles.PurchaseOptionIcon}>
              <FontAwesome name="credit-card" size={24} color="#4267B2" />
            </View>
            <Text style={styles.PurchaseOptionTitle}>COD {"\n"}Available</Text>
          </View>
        </View>
        <View style={styles.ProductRatingContainer}>
          <View style={styles.ProductRating}>
            <Text style={{ ...styles.TextStyle, color: "black" }}>
              ProductRating
            </Text>
            <Text style={styles.TextStyle}>39 Reviews</Text>
          </View>
          <View style={styles.ProductRatingStar}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="star" size={22} color="#FF7417" />
              <FontAwesome name="star" size={22} color="#FF7417" />
              <FontAwesome name="star" size={22} color="#FF7417" />
              <FontAwesome name="star" size={22} color="#FF7417" />
              <FontAwesome name="star-half-empty" size={22} color="#FF7417" />
              <Text style={styles.TextStyle}>4.5</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              {ArrayOfImages.MODELS.map((model, index) => (
                <Image
                  key={index}
                  source={model}
                  style={{
                    ...styles.Model,
                    right: 30 * (ArrayOfImages.MODELS.length - 1) - 30 * index,
                  }}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.Size}>
          <Text style={{ ...styles.TextStyle, color: "black" }}>Size</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingTop: 20,
            }}
          >
            <View style={styles.SizeBlock}>
              <Text style={{ ...styles.SizeAvailable, color: "#4267B2" }}>
                S
              </Text>
            </View>
            <View style={styles.SizeBlock}>
              <Text style={styles.SizeAvailable}>M</Text>
            </View>
            <View style={styles.SizeBlock}>
              <Text style={styles.SizeAvailable}>L</Text>
            </View>
            <View style={styles.SizeBlock}>
              <Text style={styles.SizeAvailable}>XL</Text>
            </View>
            <View style={styles.SizeBlock}>
              <Text style={styles.SizeAvailable}>2XL</Text>
            </View>
            <View style={styles.SizeBlock}>
              <Text style={styles.SizeAvailable}>3XL</Text>
            </View>
          </View>
        </View>
        <View style={styles.AvailableColors}>
          <Text style={{ ...styles.TextStyle, color: "black" }}>Colors</Text>
          <Colors />
        </View>
        <View style={styles.SimilarProducts}>
          <Similars />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  ImageContainer: {
    width: "100%",
    height: 600,
  },
  Image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  Like: {
    backgroundColor: "white",
    position: "absolute",
    right: 20,
    top: 20,
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ChangeImageContainer: {
    paddingHorizontal: 80,
    width: "100%",
    flexDirection: "row",
    height: 70,
    backgroundColor: "transparent",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
  },
  ChangeImage: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  Title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  Description: {
    fontFamily: "open-sans",
    marginTop: 4,
    fontSize: 15,
  },
  PurchaseOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 40,
  },
  PurchaseOption: {
    alignItems: "center",
    flexDirection: "row",
  },
  PurchaseOptionIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 55,
    width: 55,
    borderRadius: 15,
    marginRight: 10,
  },
  PurchaseOptionTitle: {
    fontFamily: "open-sans-bold",
  },
  ProductRatingContainer: {
    paddingHorizontal: 20,
  },
  ProductRating: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ProductRatingStar: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextStyle: {
    fontFamily: "open-sans-bold",
    color: "#FF7417",
    fontSize: 20,
  },
  Model: {
    height: 40,
    width: 40,
    resizeMode: "cover",
    borderRadius: 100,
    position: "absolute",
  },
  Size: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  SizeBlock: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 45,
    backgroundColor: "white",
    borderRadius: 10,
  },
  SizeAvailable: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  AvailableColors: {
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  SimilarProducts: {
    marginTop: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
export default Home;
