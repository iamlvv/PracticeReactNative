import { View, Text, StyleSheet } from "react-native"
import React, { useState } from "react"
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons"
type Props = {}

const NavigationBar = (props: Props) => {
  const [navigationItems, setNavigationItems] = useState(["Menu", "Cart", "Tools", "Find", "User"])
  return (
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
  )
}

const styles = StyleSheet.create({
  navigationBar: {
    alignItems: "center",
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
    marginTop: 280,
  },
  navigationItem: {
    alignItems: "center",
  },
})
export default NavigationBar
