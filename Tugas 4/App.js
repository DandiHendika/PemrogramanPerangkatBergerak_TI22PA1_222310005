import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MyFriend from "./src/components/Friend/MyFriend";
import InstagramUI from "./src/components/Instagram/InstagramUI";
import SignIn from "./src/components/const-data/SignIn";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          }

          return <FontAwesome5Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "black", paddingBottom: 5, height: 60 },
      })}
    >
      <Tab.Screen name="Home" component={InstagramUI} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={MyFriend} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default App;
