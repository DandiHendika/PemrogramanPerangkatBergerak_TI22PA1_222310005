import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const InstagramStoryUI = ({ items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.user_container}>
        <Image
          source={items.gender === "M" ? require("../../../../assets/boy.png") : require("../../../../assets/girl.png")}
          style={styles.user_ava}
        />
        <Text style={styles.text}>{items.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  user_container: {
    alignItems: "center",
    padding: 2,
  },

  user_ava: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#f0f8ff",
    marginBottom: 5,
    borderColor: "magenta",
    borderWidth: 2,
  },

  text: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});

export default InstagramStoryUI;
