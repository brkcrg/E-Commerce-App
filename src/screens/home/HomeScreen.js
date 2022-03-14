import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import ImageZoom from "react-native-image-pan-zoom";
import StarRating from "react-native-star-rating";
import CartContext from "../../store/CartContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//https://www.korezin.com/wp-content/uploads/2020/02/download-36.jpg

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const AddCart = (item) => {
    //sepete ürün ekleme yapılırken kotrol edilen kısım.
    var cartItem = cart.find((c) => c.id == item.id);
    if (cartItem == undefined) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      cartItem.quantity = cartItem.quantity + 1;
      setCart([...cart]);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.box2_box} key={item.id}>
        <View style={styles.box2_box_element_image}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.box2_box_image}
          ></Image>
        </View>

        <View style={styles.box2_box_element_detail}>
          <Pressable
            onPress={() => navigation.navigate("Product", { product: item })}
          >
            <Text style={styles.box2_detail_name}>{item.title}</Text>
          </Pressable>
          <View style={styles.box2_box_element_detail_star}>
            <StarRating
              disabled={false}
              starSize={25}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={5}
              fullStarColor={"#FFA657"}
            ></StarRating>
          </View>
        </View>
        <View style={styles.box2_box_element_price}>
          <Text style={styles.box2_price_name}>{item.description}</Text>
        </View>
        <View style={styles.box2_box_element_button}>
          <Text style={styles.box2_price_number}>
            {item.price}
            <Text style={{ fontSize: 14, fontWeight: "bold" }}> TL</Text>
          </Text>

          <Pressable style={styles.cart_pressable}>
            <Text
              onPress={() => AddCart(item)}
              style={styles.cart_pressable_text}
            >
              Sepete Ekle
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.header_pressable}>
          <MaterialCommunityIcons name="menu" size={45} />
        </Pressable>
        <Pressable style={styles.header_pressable}>
          <Ionicons name="notifications" size={30} />
        </Pressable>
      </View>
      <View style={styles.box1}>
        <Text style={styles.box1_text}>New Arrival</Text>
        <Pressable>
          <MaterialCommunityIcons
            name="arrow-right"
            size={26}
          ></MaterialCommunityIcons>
        </Pressable>
      </View>
      <View style={styles.box2}>
        <FlatList
          data={products}
          renderItem={renderItem}
          horizontal
          style={styles.flatlist}
        ></FlatList>
      </View>
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
  flatlist: {
    flex: 1,
    backgroundColor: "#EBECF4",
  },
  header: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_pressable: {
    backgroundColor: "#F0F0FF",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cart_pressable: {
    backgroundColor: "#F0F0FF",
    height: 40,
    width: 100,
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cart_pressable_text: {
    fontWeight: "700",
  },
  box1: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box1_text: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
  box2: {
    flex: 15,
    flexDirection: "row",
  },
  box2_box: {
    flex: 2,
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    marginRight: 20,
    borderRadius: 15,
    width: 300,
  },
  box2_box_element_image: {
    flex: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  box2_box_element_button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: "center",
  },
  box2_box_element_detail: {
    flex: 2,
    justifyContent: "flex-start",
    paddingLeft: 10,
  },
  box2_box_element_detail_star: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  box2_detail_name: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
    textAlign: "justify",
  },
  box2_price_name: {
    fontSize: 12,
    color: "#D1D1DF",
    fontWeight: "600",
    paddingBottom: 10,
    textAlign: "justify",
  },
  box2_price_number: {
    color: "green",
    fontWeight: "bold",
    fontSize: 30,
  },
  box2_box_element_price: {
    flex: 2,
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
  },
  box2_box_image: {
    flex: 1,
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "contain",
  },
  box2_box_button: {
    flex: 1,
    borderStyle: "solid",
  },
});

export default HomeScreen;
