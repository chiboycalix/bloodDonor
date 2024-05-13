import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Input from '../../components/input';
import Button from '../../components/Button';

export default function Register({ navigation }: { navigation: any }) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../assets/dareToDonate.png")}
      />
      <View style={styles.inputWrapper}>
        <Input source={require("../../assets/user_active.png")} placeholder={"Full Name"} inputMode="text" />
        <Input source={require("../../assets/message.png")} placeholder={"E-mail"} inputMode="text" />
        <Input source={require("../../assets/password.png")} placeholder={"Password"} inputMode="text" secureTextEntry />
        <Input source={require("../../assets/phone.png")} placeholder={"Phone Number"} inputMode="numeric" />
        <Input source={require("../../assets/noto_drop-of-blood.png")} placeholder={"Blood Group"} inputMode="text" />
        <Input source={require("../../assets/location.png")} placeholder={"Location"} inputMode="text" />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={"REGISTER"} onPress={() => navigation.navigate("Verify")} />
        <View style={styles.textWrapper}>
          <Text style={styles.alreadyHaveAccount}>Already have an account?</Text> 
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerNowText}>Log In.</Text>
          </Pressable>
        </View>
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
    marginTop: 40
  },
  buttonWrapper: {
    width: "100%",
    marginTop: 50
  },
  forgotPasswordText: {
    textAlign: "center",
    marginTop: 10,
    color: "#FF2156"
  },
  textWrapper: {
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: 20
  },
  alreadyHaveAccount:{
    color: "#7E7E7E"
  },
  registerNowText: {
    color: "#FF2156",
  }
});