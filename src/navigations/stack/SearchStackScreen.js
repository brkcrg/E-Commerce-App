import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../screens/search/SearchScreen";
const SearcStackScreen = () => {
  const SearchStack = createNativeStackNavigator();
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen
        name="search"
        component={SearchScreen}
      ></SearchStack.Screen>
    </SearchStack.Navigator>
  );
};

export default SearcStackScreen;
