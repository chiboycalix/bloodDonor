import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from '../../components/Button';

export default function Success({ navigation }: { navigation: any }){
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../assets/success.png")}
      />
      <View style={styles.buttonWrapper}>
        <Button title={"FINISH"} onPress={() => navigation.navigate("Dashboard")} />
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
    marginTop: 40
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