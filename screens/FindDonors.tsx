import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

export default function FindDonors({ navigation }: { navigation: any }) {
  const onPressSkip = () => {
    navigation.navigate("AuthHome")
  }
  const onPressNext = () => {
    navigation.navigate("PostBloodRequest")
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <Image
          source={require("../assets/pageOne.png")}
        />
        <Text style={styles.findBloodDonors}>Find Blood Donors</Text>
        <View style={styles.longTextWrapper}>
          <Text style={styles.longText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tristique tristique quam in.</Text>
        </View>
        <Image
          source={require("../assets/pageOneIndicator.png")}
        />
      </View>
      <View style={styles.navigationWrapper}>
        <Pressable onPress={onPressSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
        <Pressable onPress={onPressNext}>
          <Text style={styles.nextText}>Next</Text>
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
    padding: 20
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  findBloodDonors: {
    color: "#272A2F",
    fontWeight: "600",
    marginTop: 50,
    fontSize: 20
  },
  longTextWrapper: {
    width: "70%",
    marginTop: 30,
    marginBottom: 20
  },
  longText: {
    color: "#7E7E7E",
    textAlign: "center",
    lineHeight: 21,
  },
  navigationWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
    marginTop: 180
  },
  skipText: {
    color: "#3A4351"
  },
  nextText: {
    color: "#FF2156"
  }
});