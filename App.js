import { CartProvider } from "./src/store/CartContext";
import TabNavigator from "./src/navigations/tab/TabNavigator";
import React from "react";
export default function App() {
  return (
    <>
      <CartProvider>
        <TabNavigator></TabNavigator>
      </CartProvider>
    </>
  );
}
