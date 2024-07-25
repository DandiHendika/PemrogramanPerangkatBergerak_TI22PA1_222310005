import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const InstagramFooterUI = () => {
  return (
    <View style={styles.container}>
      <View style={styles.interactionButton}>
        <TouchableOpacity>
          <FontAwesome5Icon
            name={"home"}
            color={"white"}
            size={25}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5Icon
            name={"search"}
            color={"white"}
            size={25}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5Icon
            name={"plus-square"}
            size={25}
            color={"white"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5Icon
            name={"film"}
            size={25}
            color={"white"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5Icon
            name={"user-circle"}
            size={25}
            color={"white"}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
  interactionButton: {
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
});

export default InstagramFooterUI;
