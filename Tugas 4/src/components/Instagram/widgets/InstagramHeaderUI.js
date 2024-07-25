import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const InstagramHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram</Text>
      <View style={styles.iconContainer}>
        <FontAwesome5
          name={"heart"}
          size={23}
          color={"white"}
          style={styles.icon}
        />
        <FontAwesome5
          name={"facebook-messenger"}
          size={23}
          color={"white"}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginRight: 15,
  },
  text: {
    color: "white",
    fontSize: 26,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
  },
});

export default InstagramHeader;
