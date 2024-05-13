import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { OtpInput } from "react-native-otp-entry";
import Button from '../../components/Button';

export default function Verify({ navigation }: { navigation: any }) {
  return (
    <View style={styles.wrapper}>
      <OtpInput
        numberOfDigits={4}
        focusColor="#FF2156"
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        theme={{
          pinCodeContainerStyle: styles.pinCodeContainer,
        }}
      />
      <Text style={styles.resendText}>Resend code in 49s</Text>
      <View style={styles.buttonWrapper}>
        <Button title={"VERIFY"} onPress={() => navigation.navigate("Success")} />
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
  buttonWrapper: {
    width: "100%",
    marginTop: 20
  },
  pinCodeContainer: {
    backgroundColor: "#F8F8F8",
    borderRadius:4,
    width: 70
  },
  resendText: {
    color: "#FF2156", 
    display: "flex", 
    alignItems: "flex-end",
    marginTop: 30
  }
});