import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";

//import RnIncrementDecrementBtn from "react-native-increment-decrement-button";

const ProductDetailScreen = (navigation, route) => {
  const [item, setItem] = useState([]);
  const animate = useRef(new Animated.Value(0)).current;
  //setItem(route.params.product);
  useEffect(() => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [animate]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={26}
          ></MaterialCommunityIcons>
        </Pressable>
        <Ionicons name="notifications" size={30} />
      </View>
      <View style={styles.box_image}>
        <Image
          source={{
            uri: "https://www.korezin.com/wp-content/uploads/2020/02/download-36.jpg",
          }}
          style={styles.box_image}
        ></Image>
      </View>
      <View style={styles.box1_name}>
        <Animated.View style={{ opacity: animate }}>
          <Text style={styles.box1_name}> Hallingdal Chair</Text>
        </Animated.View>
        <NumericInput
          totalWidth={100}
          totalHeight={60}
          rounded
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="green"
          leftButtonBackgroundColor="#B22222"
          valueType="integer"
          minValue={1}
        ></NumericInput>
      </View>
      <View style={styles.box2_detail_title}>
        <Text style={styles.box2_detail_title}>sdfkpasujgag</Text>
      </View>
      <View style={styles.box3_detail_description}>
        <Text style={styles.box3_detail_description}>
          This is a simple example, but it shows how useful error messages and
          stacktraces can be if you take the time to decipher them. Debugging
          errors is one of the most frustrating, but also satisyfing parts of
          development, and
        </Text>
      </View>
      <Pressable style={styles.box4_AddCartButton}>
        <View style={styles.box4_AddCartButton}>
          <Button
            title="Add To Cart"
            color="#FFFFFF"
            backgroundColor="#2196F3"
            accessibilityLabel="Learn more about this purple button"
          ></Button>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#EBECF4",
  },
  header: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box_image: {
    flex: 8,
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  box1_name: {
    flex: 2,
    fontSize: 25,
    fontWeight: "600",

    paddingTop: 10,
    paddingRight: 30,
    //textAlign: "justify",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  box1_name_count: {
    justifyContent: "flex-end",
    fontSize: 16,
    paddingTop: 10,
  },
  box2_detail_title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "flex-end",
  },
  box3_detail_description: {
    flex: 3,
    fontSize: 12,
    color: "#D1D1DF",
    fontWeight: "600",
  },
  box4_AddCartButton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#2196F3",
    flexDirection: "row",
  },
});

export default ProductDetailScreen;
