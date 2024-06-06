import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function App() {
  const myEmail = "222310005@student.ibik.ac.id";
  const myPass = "abcd";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenPass, setIsOpenPass] = useState(false);

  const handleSubmit = () => {
    if (email !== myEmail) {
      return alert("Email yang anda masukkan salah!");
    } else if (password !== myPass) {
      return alert("Password yang anda masukkan salah!");
    }
    alert('Selamat Datang Dandi Hendika', {email});
  };

  const handlerOpenPassword = () => {
    setIsOpenPass(!isOpenPass);
  };

  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, width: "80%", padding: 15 }}>
        <Text style={styles.title}>Login Email</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="npm@student.ibik.ac.id"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!isOpenPass}
              placeholder="Enter your password"
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable style={styles.eyeIcon} onPress={handlerOpenPassword}>
              <FontAwesome5 name={isOpenPass ? "eye" : "eye-slash"} size={20} color="grey" />
            </Pressable>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    marginBottom: 20,
    color: '#333',
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    color: '#555',
    fontWeight: "bold",
  },
  input: {
    width: '100%',
    padding: 7,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  passwordInput: {
    flex: 1,
    padding: 7,
  },
  eyeIcon: {
    padding: 7,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});