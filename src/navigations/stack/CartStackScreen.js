import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../../screens/cart/CartScreen";
const CartStackScreen = () => {
  const CartStack = createNativeStackNavigator();
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStack.Screen name="cart" component={CartScreen}></CartStack.Screen>
    </CartStack.Navigator>
  );
};

export default CartStackScreen;
