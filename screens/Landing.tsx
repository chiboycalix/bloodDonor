import React from 'react'
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

export default function Landing({ navigation }: { navigation: any }) {
  const onPress = () => {
    navigation.navigate('FindDonors')
  }
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPress}>
        <Image
          source={require("../assets/Logo.png")}
        />
        <Text style={styles.dareToDonate}>Dare To Donate</Text>
      </Pressable>

    </View>
  )
}



const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FF2156",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  dareToDonate: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginTop: 20
  }
});