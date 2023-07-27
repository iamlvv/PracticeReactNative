import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { AntDesign, Feather, Entypo } from "@expo/vector-icons"
import { Platform } from "expo-modules-core"

type Props = {
  x: number
  y: number
  width: number
  height: number
  currentSelectedItem: number
  currentRow: number
}

const SubMenuItems = (props: Props) => {
  // The content of the sub menu is like a popup menu
  // It is a list of items, each item has an icon and a text. If the parent item is clicked
  // the sub menu will be shown, otherwise it will be hidden.
  // If the position of the sub menu is out of the screen, it will be moved to the left
  // or to the right of the parent item

  const topRow = props.y + props.height

  const styleTopRight = {
    top: topRow,
    left: props.x - 115,
    backgroundColor: "#eedf94",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    position: "absolute",
    elavation: Platform.OS === "android" ? 50 : 0,
    zIndex: 50,
    width: 200,
    opacity: 1,
    borderWidth: 1,
    borderColor: "#000",
  }
  const styleTopLeft = {
    top: topRow,
    left: props.x,
    backgroundColor: "#eedf94",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elavation: Platform.OS === "android" ? 50 : 0,
    position: "absolute",
    zIndex: 50,
    width: 200,
    opacity: 1,
    borderWidth: 1,
    borderColor: "#000",
  }
  const styleBottomRight = {
    top: props.y - 140,
    left: props.x - 115,
    backgroundColor: "#eedf94",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elavation: Platform.OS === "android" ? 50 : 0,
    position: "absolute",
    zIndex: 50,
    width: 200,
    opacity: 1,
    borderWidth: 1,
    borderColor: "#000",
  }
  const styleBottomLeft = {
    top: props.y - 140,
    left: props.x,
    backgroundColor: "#eedf94",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elavation: Platform.OS === "android" ? 50 : 0,
    position: "absolute",
    zIndex: 50,
    width: 200,
    opacity: 1,
    borderWidth: 1,
    borderColor: "#000",
  }
  if (props.x + props.width > 100) {
    styleTopRight.left = props.x + props.width
  }
  return props.currentRow === 0 ? (
    <View
      style={
        props.currentSelectedItem === 0 && props.currentRow === 0
          ? styleTopLeft
          : props.x + props.width > 100
          ? styleTopRight
          : styleTopRight
      }
    >
      <Entypo
        name="triangle-up"
        size={24}
        color="black"
        style={{ position: "absolute", top: -10, left: props.currentSelectedItem === 0 ? 20 : 150 }}
      />
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
    </View>
  ) : props.currentRow === 1 ? (
    <View
      style={
        props.currentSelectedItem === 0 && props.currentRow === 1
          ? styleTopLeft
          : props.x + props.width > 100
          ? styleTopRight
          : styleTopRight
      }
    >
      <Entypo
        name="triangle-up"
        size={24}
        color="black"
        style={{ position: "absolute", top: -10, left: props.currentSelectedItem === 0 ? 20 : 150 }}
      />
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
    </View>
  ) : props.currentRow === 2 ? (
    <View
      style={
        props.currentSelectedItem === 0 && props.currentRow === 2
          ? styleBottomLeft
          : props.x + props.width > 100
          ? styleBottomRight
          : styleBottomRight
      }
    >
      <Entypo
        name="triangle-down"
        size={24}
        color="black"
        style={{
          position: "absolute",
          top: 105,
          left: props.currentSelectedItem === 0 ? 20 : 150,
        }}
      />
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
    </View>
  ) : props.currentRow === 3 ? (
    <View
      style={
        props.currentSelectedItem === 0 && props.currentRow === 3
          ? styleBottomLeft
          : props.x + props.width > 100
          ? styleBottomRight
          : styleBottomRight
      }
    >
      <Entypo
        name="triangle-down"
        size={24}
        color="black"
        style={{
          position: "absolute",
          top: 105,
          left: props.currentSelectedItem === 0 ? 20 : 150,
        }}
      />
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
      <View style={styles.item}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>SubMenuItems</Text>
      </View>
    </View>
  ) : null
}

export default SubMenuItems

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    position: "absolute",
    zIndex: 10,
    elevation: Platform.OS === "android" ? 50 : 0,
    width: 200,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
