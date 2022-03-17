import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        style={styles.searchbar_box}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      ></Searchbar>
      <FlatList
        style={styles.flatlist}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  searchbar_box: {
    flex: 0.1,
    borderRadius: 15,
    backgroundColor: "gray",
    marginTop: 10,
  },
  flatlist: {
    flex: 10,
    backgroundColor: "green",
  },
});

export default SearchScreen;
