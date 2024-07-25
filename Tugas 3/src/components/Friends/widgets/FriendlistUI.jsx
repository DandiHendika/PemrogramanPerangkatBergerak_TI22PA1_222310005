import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const FriendlistUI = ({ items }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.userAvatarContainer}>
        <Image
          source={items.gender === "M" ? require("../../../../assets/icons/boy.png") : require("../../../../assets/icons/girl.png")}
          style={styles.userAvatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{items.name}</Text>
          <Text style={styles.fullName}>{items.fullname}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#292929",
    borderRadius: 10,
    marginVertical: 5,
  },

  userAvatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },

  userInfo: {
    justifyContent: "center",
  },

  name: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },

  fullName: {
    fontSize: 14,
    color: "white",
  },

  followButton: {
    backgroundColor: "purple",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  followButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FriendlistUI;
