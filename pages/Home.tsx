import React from 'react'
import { Dimensions, Text, View, StyleSheet, Image  } from 'react-native';

export default function Dashboard({ navigation }: { navigation: any }) {
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image
          source={require("../assets/four_square.png")}
        />
        <Image
          source={require("../assets/notification.png")}
        />
      </View>
      <View style={styles.sliderWrapper}>
        <Image
          source={require("../assets/dashboard.png")}
          style={{width:"100%", height: "100%", objectFit: "fill"}}
        />
      </View>
      <View style={styles.cardWrapper}>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
    marginTop: 70,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  sliderWrapper: {
    width:"100%",
    height: 250
  },
  cardWrapper: {
    
  }
});