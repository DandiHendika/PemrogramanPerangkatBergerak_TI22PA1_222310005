import React from 'react';
import { SafeAreaView } from 'react-native';
import MyFriends from "./src/components/Friends/MyFriends";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyFriends />
    </SafeAreaView>
  );
}
