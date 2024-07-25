import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import InstagramHeader from "./widgets/InstagramHeaderUI";
import ExpScrollView from "../modules/ExpScrollView";
import { Users } from "./data/Users";
import ExpFlatList from "../modules/ExpFlatList";

class InstagramUI extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.header}>
          <InstagramHeader />
        </View>
        <View style={styles.story}>
          <ExpFlatList Users={Users} />
        </View>
        <View style={styles.body}>
          <ExpScrollView Users={Users} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    backgroundColor: "black",
  },
  story: {
    flex: 2,
    backgroundColor: "black",
  },
  body: {
    flex: 15,
    backgroundColor: "black",
  },
  footer: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default InstagramUI;
