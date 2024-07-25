import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import InstagramBodyUI from "../Instagram/widgets/InstagramBodyUI";

const ExpScrollView = ({ Users }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Users.map((item, index) => (
          <InstagramBodyUI items={item} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

export default ExpScrollView;
