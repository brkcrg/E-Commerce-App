import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import ProductScreen from "../../screens/home/ProductScreen";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="home" component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen
        name="Product"
        component={ProductScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
