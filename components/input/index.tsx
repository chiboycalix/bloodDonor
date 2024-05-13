import React from 'react'
import { View, TextInput, StyleSheet, Image, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Input({ source, placeholder, inputmode, secureTextEntry }: any) {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputImage}>
        <Image
          source={source}
        />
      </View>
      <TextInput placeholder={placeholder} style={styles.input} inputMode={inputmode} secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  inputImage: {
    backgroundColor: "#F8F8F8",
    flexBasis: "15%",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth:1,
    borderRightColor: "#E2E2E2",
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5
  },
  input: {
    backgroundColor: "#F8F8F8",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft:10,
    flex: 1,
    textAlign: "left",
    borderTopRightRadius:5,
    borderBottomRightRadius:5
  },

});
