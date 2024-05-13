import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function Button({ onPress, outline, children, title }: any) {
  return (
    <Pressable onPress={onPress} style={outline ? styles.outlineButton : styles.filledButton}>
      <Text style={outline?styles.outlineTextStyles:styles.filledTextStyles}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  outlineButton: {
    borderColor: "#FF2156",
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom:10,
    width: "100%",
    borderRadius: 50,
    textAlign:"center"
  },
  filledButton: {
    backgroundColor:"#FF2156",
    paddingTop: 10,
    paddingBottom:10,
    width: "100%",
    borderRadius: 50,
    textAlign:"center"
  },
  outlineTextStyles: {
    textAlign:"center",
    color:"#FF2156",
    fontWeight: "600",
  },
  filledTextStyles: {
    textAlign:"center",
    color: "#ffffff",
    fontWeight: "600",
  }
});