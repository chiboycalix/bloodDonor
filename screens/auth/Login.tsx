import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Input from '../../components/input';
import Button from '../../components/Button';

export default function Login({ navigation }: { navigation: any }) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../assets/dareToDonate.png")}
      />
      <View style={styles.inputWrapper}>
        <Input source={require("../../assets/message.png")} placeholder={"E-mail"} inputMode="text" />
        <Input source={require("../../assets/password.png")} placeholder={"Password"} inputMode="text" secureTextEntry />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={"LOG IN"} onPress={() => navigation.navigate("Dashboard")} />
        <Pressable onPress={() => navigation.navigate("ResetPassword")}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.dontHaveAnAccountText}>Don’t have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerNowText}>Register Now.</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  inputWrapper: {
    width: "100%",
    marginTop: 80
  },
  buttonWrapper: {
    width: "100%",
    marginTop: 100
  },
  forgotPasswordText: {
    textAlign: "center",
    marginTop: 10,
    color: "#FF2156"
  },

  textWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: 150
  },
  dontHaveAnAccountText: {
    color: "#7E7E7E",
  },
  registerNowText: {
    color: "#FF2156",
  }
});