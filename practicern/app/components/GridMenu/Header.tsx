import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={24} color="white" />
      <AntDesign name="shoppingcart" size={24} color="white" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#242054",
    paddingVertical: 10,
  },
})
