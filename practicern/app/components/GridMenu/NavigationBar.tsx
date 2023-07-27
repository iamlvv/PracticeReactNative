import { View, Text, StyleSheet } from "react-native"
import React, { useState } from "react"
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons"
type Props = {}

const NavigationBar = (props: Props) => {
  const [navigationItems, setNavigationItems] = useState(["Menu", "Cart", "Tools", "Find", "User"])
  return (
    <View>
      <FontAwesome name="phone-square" size={50} color="black" style={styles.phone} />
      <View style={styles.navigationBar}>
        {navigationItems.map((item, index) => (
          <View key={index} style={styles.navigationItem}>
            {item === "Menu" && <MaterialCommunityIcons name="grid" size={24} color="black" />}
            {item === "Cart" && <FontAwesome5 name="shopping-cart" size={24} color="black" />}
            {item === "Tools" && <MaterialIcons name="build" size={40} color="black" />}
            {item === "Find" && <Ionicons name="md-search" size={24} color="black" />}
            {item === "User" && <FontAwesome5 name="user" size={24} color="black" />}
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationBar: {
    alignItems: "center",
    borderTop: "1px solid black",
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
    marginTop: 250,
  },
  navigationItem: {
    alignItems: "center",
  },
  phone: {
    position: "absolute",
    right: 10,
    top: 200,
  },
})
export default NavigationBar
