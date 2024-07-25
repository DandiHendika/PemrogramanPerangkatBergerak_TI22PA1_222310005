import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import InstagramStoryUI from "../Instagram/widgets/InstagramStoryUI";

const ExpFlatList = ({ Users }) => {
  return (
    <FlatList
      horizontal={true}  
      data={Users}
      renderItem={({ item }) => <InstagramStoryUI items={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ExpFlatList;
