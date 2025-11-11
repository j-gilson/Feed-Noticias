import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useAuthViewModel } from "../viewmodel/useAuthViewModel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  const { email, setEmail, password, setPassword, error, login } = useAuthViewModel();

  function handleLogin() {
    if (login()) {
      navigation.replace("Home"); // garante que não volta mais para login
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Notícias</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    backgroundColor: "#eaeaea",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  btn: {
    width: "100%",
    backgroundColor: "#0066ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
