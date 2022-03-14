import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screens/profile/ProfileScreen";
const ProfileStackScreen = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen
        name="profile"
        component={ProfileScreen}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
