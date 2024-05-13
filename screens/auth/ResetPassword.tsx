import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../../components/input';
import Button from '../../components/Button';

export default function ResetPassword({ navigation }: { navigation: any }){
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <Input source={require("../../assets/message.png")} placeholder={"E-mail"} inputMode="text" />
      </View>
      <Text style={styles.resetPasswordText}>You can donate for ones in need and request blood if you need.</Text>

      <View style={styles.buttonWrapper}>
        <Button title={"SEND"} onPress={() => navigation.navigate("Login")} />
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
    marginTop: 20
  },
  resetPasswordText: {
    textAlign: "center",
    width: "90%",
    marginTop: 10,
    color: "#7E7E7E",
    lineHeight: 21
  },
});