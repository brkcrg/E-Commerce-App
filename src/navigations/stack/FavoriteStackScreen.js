import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../../screens/favorite/FavoriteScreen";
const FavoriteStackScreen = () => {
  const FavoriteStack = createNativeStackNavigator();
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FavoriteStack.Screen
        name="favorite"
        component={FavoriteScreen}
      ></FavoriteStack.Screen>
    </FavoriteStack.Navigator>
  );
};

export default FavoriteStackScreen;
