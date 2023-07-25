import { View, Text, StyleSheet, Dimensions } from "react-native"
import React from "react"
import { FontAwesome } from "@expo/vector-icons"
type Props = {}

const { width } = Dimensions.get("window")
const gap = 12
const itemPerRow = 4
const totalGapSize = (itemPerRow - 1) * gap
const windowWidth = width
const childWidth = (windowWidth - totalGapSize) / itemPerRow

const GridContent = (props: Props) => {
  const gridContent: string[] = [
    "Trang chu",
    "Tinh toan son",
    "Danh muc mau",
    "Phoi mau 3D",
    "Tim nhanh",
    "Kiem tra ma",
    "Mua hang",
    "Ve Johton",
    "Tim dai ly",
    "Dich vu son",
    "thanh vien",
    "Tai khoan",
    "Doi qua hay",
    "khuyen mai",
    "Quet ma tich diem",
    "San pham",
  ]
  // The content of the grid menu is a list of string, divided into 4 columns, each column has 4 items
  return (
    <View>
      <Text>Menu</Text>
      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
          {gridContent.slice(0, 4).map((item, index) => (
            <View key={index} style={styles.gridContent}>
              <FontAwesome name="home" size={24} color="black" />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.gridRow}>
          {gridContent.slice(4, 8).map((item, index) => (
            <View key={index} style={styles.gridContent}>
              <FontAwesome name="home" size={24} color="black" />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.gridRow}>
          {gridContent.slice(8, 12).map((item, index) => (
            <View key={index} style={styles.gridContent}>
              <FontAwesome name="home" size={24} color="black" />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.gridRow}>
          {gridContent.slice(12, 16).map((item, index) => (
            <View key={index} style={styles.gridContent}>
              <FontAwesome name="home" size={24} color="black" />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gridContainer: {
    gap: 20,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    gap: 10,
  },
  gridContent: {
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    width: childWidth,
    backgroundColor: "#f5f5",
    padding: 2,
    border: "1px solid black",
  },
})
export default GridContent
