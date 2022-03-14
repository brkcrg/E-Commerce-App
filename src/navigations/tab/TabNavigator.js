import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackScreen from "../stack/HomeStackScreen";
import SearchStackScreen from "../stack/SearchStackScreen";
import CartStackScreen from "../stack/CartStackScreen";
import FavoriteStackScreen from "../stack/FavoriteStackScreen";
import ProfileStackScreen from "../stack/ProfileStackScreen";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import CartContext from "../../store/CartContext";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const { cart } = useContext(CartContext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Cart"
          component={CartStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="cart" color={color} size={26} />
            ),
            tabBarBadge: cart.length,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Favorite"
          component={FavoriteStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cards-heart"
                color={color}
                size={26}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigator;
