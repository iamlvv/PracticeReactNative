import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { AntDesign } from "@expo/vector-icons"

type Props = {
  x: number
  y: number
  width: number
  height: number
  currentSelectedItem: number
  currentRow: number
}

const SubMenuItems2 = (props: Props) => {
  // The content of the sub menu is like a popup menu
  // It is a list of items, each item has an icon and a text. If the parent item is clicked
  // the sub menu will be shown, otherwise it will be hidden.
  // If the position of the sub menu is out of the screen, it will be moved to the left
  // or to the right of the parent item

  const topRow1 = props.y + props.height + 100
  const topRow2 = props.y + props.height + 200

  const styleTopRightRow1 = {
    top: topRow1,
    left: props.x - 100,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    position: "absolute",
    zIndex: 10,
    width: 200,
    opacity: 1,
  }
  const styleTopLeftRow1 = {
    top: topRow1,
    left: props.x,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    position: "absolute",
    zIndex: 10,
    width: 200,
  }
  const styleBottomRight = {
    top: props.y - 100,
    left: props.x - 100,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    position: "absolute",
    zIndex: 10,
    width: 200,
    opacity: 1,
  }
  const styleBottomLeft = {
    top: props.y - 100,
    left: props.x + props.width,
  }
  if (props.x + props.width > 100) {
    styleTopRightRow1.left = props.x + props.width
  }
  console.log(props.currentSelectedItem, props.currentRow, props.x + props.width)
  return props.currentRow === 1 ? (
    <View
      style={
        props.currentSelectedItem === 0 && props.currentRow === 1
          ? styleTopLeftRow1
          : props.x + props.width > 100
          ? styleTopRightRow1
          : styleTopRightRow1
      }
    >
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
          ? styleTopLeftRow0
          : props.x + props.width > 100
          ? styleTopRightRow0
          : styleTopRightRow0
      }
    >
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

export default SubMenuItems2

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    position: "absolute",
    zIndex: 10,
    width: 200,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
