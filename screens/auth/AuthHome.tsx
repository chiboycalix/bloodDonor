import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Button from '../../components/Button';

export default function AuthHome({ navigation }: { navigation: any }) {
  const login = () => {
    navigation.navigate("Login")
  }
  const register = () => {
    navigation.navigate("Register")
  }
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../assets/Logo2.png")}
      />
      <Text style={styles.dareToDonate}>Dare To Donate</Text>
      <Text style={styles.donateLongText}>You can donate for ones in need and request blood if you need.</Text>
      <View style={styles.buttonWrapper}>
        <Button outline title={"LOG IN"} onPress={login}/>
        <Button title={"REGISTER"} onPress={register}/>
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
  dareToDonate: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#FF2156',
    marginTop: 20
  },
  donateLongText: {
    textAlign: "center",
    width: "60%",
    marginTop: 30,
    marginBottom: 50,
    lineHeight: 21,
    color: "#7E7E7E",
  },
  buttonWrapper: {
    display: "flex",
    gap:20,
    width: "100%",
  }
});