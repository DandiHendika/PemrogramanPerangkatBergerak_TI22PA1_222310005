import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email) {
      Alert.alert("Masukkan email");
      return;
    }
    if (!password) {
      Alert.alert("Masukkan password");
      return;
    }

    navigation.replace("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.welcome}>Welcome to Instagram</Text>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#fff",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#ff6347",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignIn;
