import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";

import CartContext from "../../store/CartContext";
const CartScreen = () => {
  const { cart, setCart } = useContext(CartContext);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartbox}>
        <View style={styles.cartbox_photo}>
          <Image
            style={styles.cartbox_photo_photo}
            source={{
              uri: item.image,
            }}
          ></Image>
        </View>
        <View style={styles.cartbox_nameandprice}>
          <View style={styles.cartbox_nameandprice_details}>
            <Text style={styles.cartbox_nameandprice_details_name}>
              {item.title}
            </Text>
            <View
              style={{
                flex: 1,
                alignContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Ionicons name="trash-outline" size={20} color="red"></Ionicons>
            </View>
          </View>
          <View style={styles.cartbox_nameandprice_details_total}>
            <Text style={{ fontSize: 25, fontWeight: "600" }}>
              {item.price}
              <Text style={{ fontSize: 12 }}>TL/adet</Text>
            </Text>
          </View>

          <View style={styles.cartbox_nameandprice_price}>
            {/* <TextInput
              keyboardType="numeric"
              numeric
              style={styles.cartbox_nameandprice_price_quantity}
              defaultValue={item.quantity}
            ></TextInput> */}
            <View style={styles.cartbox_nameandprice_price_num}>
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
            {/* <View style={styles.cartbox_nameandprice_price_buttons}>
              <Pressable>
                <Ionicons
                  name="arrow-up-circle"
                  size={30}
                  style={{ marginBottom: 10 }}
                  color="green"
                ></Ionicons>
              </Pressable>
              <Pressable>
                <Ionicons
                  name="arrow-down-circle"
                  size={30}
                  color="#B22222"
                ></Ionicons>
              </Pressable>
            </View> */}
            {/* TOTAL PRICE STYLE*/}
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "#32CD32",
                }}
              >
                {item.price * item.quantity}
                <Text style={{ fontSize: 12 }}>TL</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={cart}
        renderItem={renderItem}
      ></FlatList>
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
  cartbox: {
    height: 200,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  cartbox_photo: {
    flex: 1,
    flexDirection: "row",
  },
  cartbox_nameandprice: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: 12,
    alignContent: "space-between",
  },
  cartbox_nameandprice_details: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cartbox_photo_photo: {
    width: 100,
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  cartbox_nameandprice_details_name: {
    flex: 3,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "justify",
  },
  cartbox_nameandprice_details_total: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cartbox_nameandprice_price: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cartbox_nameandprice_price_price: {
    flex: 3,
    fontSize: 26,
    fontWeight: "600",
  },
  cartbox_nameandprice_price_num: {
    flex: 1,
    width: 40,
  },
  cartbox_nameandprice_price_quantity: {
    flex: 2,
    backgroundColor: "#F0F0F0",
    maxWidth: 50,
    height: 70,
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    borderRadius: 5,
  },
  cartbox_nameandprice_price_buttons: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10,
  },
});

export default CartScreen;
