import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { FontAwesome } from "@expo/vector-icons"
import SubMenuItems from "./SubMenuItems"
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

  const [layoutList, setLayoutList] = useState<any[]>([])
  const [zIndexRow0, setZIndexRow0] = useState<number>(3)
  const [elavationRow0, setElavationRow0] = useState<number>(0)
  const [zIndexRow1, setZIndexRow1] = useState<number>(-1)
  const [zIndexRow2, setZIndexRow2] = useState<number>(-3)
  const [zIndexRow3, setZIndexRow3] = useState<number>(-1)
  const [elavationRow1, setElavationRow1] = useState<number>(-3)
  const [elavationRow2, setElavationRow2] = useState<number>(5)
  const [elavationRow3, setElavationRow3] = useState<number>(-1)
  const [showContextMenu0, setShowContextMenu0] = useState<boolean>(false)
  const [showContextMenu1, setShowContextMenu1] = useState<boolean>(false)
  const [showContextMenu2, setShowContextMenu2] = useState<boolean>(false)
  const [showContextMenu3, setShowContextMenu3] = useState<boolean>(false)
  const [currentSelectedItem, setCurrentSelectedItem] = useState<number>(0)
  // The content of the grid menu is a list of string, divided into 4 columns, each column has 4 items
  return (
    <View>
      <Text style={styles.heading}>Menu</Text>
      <View style={styles.gridContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 5,
            gap: 10,
            position: "relative",
            zIndex: zIndexRow0,
            elevation: elavationRow0,
          }}
        >
          {gridContent.slice(0, 4).map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                key={index}
                style={
                  index === 0 || index === 3
                    ? { ...styles.gridContent, backgroundColor: "#eedf95" }
                    : styles.gridContent
                }
                onLayout={(event) => {
                  const { x, y, width, height } = event.nativeEvent.layout
                  setLayoutList((prev) => [...prev, { x, y, width, height }])
                }}
                onPress={() => {
                  // console.log layout of each item
                  setShowContextMenu0(!showContextMenu0)
                  setShowContextMenu1(false)
                  setShowContextMenu2(false)
                  setShowContextMenu3(false)
                  setCurrentSelectedItem(index)
                  setZIndexRow0(3)
                  setElavationRow0(0)
                }}
              >
                <FontAwesome name="home" size={24} color="black" />
                <Text>{item}</Text>
              </TouchableOpacity>
              {((index === currentSelectedItem && index === 0) ||
                (index === currentSelectedItem && index === 3)) &&
                showContextMenu0 && (
                  <SubMenuItems
                    x={layoutList[index].x}
                    y={layoutList[index].y}
                    width={layoutList[index].width}
                    height={layoutList[index].height}
                    currentSelectedItem={currentSelectedItem}
                    currentRow={0}
                  />
                )}
            </View>
          ))}
        </View>
        <View
          style={{
            position: "relative",
            top: 0,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            paddingHorizontal: 5,
            zIndex: zIndexRow1,
            elevation: elavationRow1,
          }}
        >
          {gridContent.slice(4, 8).map((item, index) => (
            <View key={index} style={styles.gridRowItem}>
              <TouchableOpacity
                key={index}
                style={
                  index === 1
                    ? { ...styles.gridContent, backgroundColor: "#eedf95" }
                    : styles.gridContent
                }
                onLayout={(event) => {
                  const { x, y, width, height } = event.nativeEvent.layout
                  setLayoutList((prev) => [...prev, { x, y, width, height }])
                }}
                onPress={() => {
                  // console.log layout of each item
                  index === 1 && setShowContextMenu1(!showContextMenu1)
                  setShowContextMenu0(false)
                  setShowContextMenu2(false)
                  setShowContextMenu3(false)
                  setCurrentSelectedItem(index)
                  setZIndexRow1(0)
                  setElavationRow1(5)
                  setZIndexRow2(-1)
                  setElavationRow2(-3)
                }}
              >
                <FontAwesome name="home" size={24} color="black" />
                <Text>{item}</Text>
              </TouchableOpacity>
              {index === currentSelectedItem && index === 1 && showContextMenu1 && (
                <SubMenuItems
                  x={layoutList[index].x}
                  y={layoutList[index].y}
                  width={layoutList[index].width}
                  height={layoutList[index].height}
                  currentSelectedItem={currentSelectedItem}
                  currentRow={1}
                />
              )}
            </View>
          ))}
        </View>
        <View
          style={{
            position: "relative",
            top: 0,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            paddingHorizontal: 5,
            zIndex: zIndexRow2,
            elevation: elavationRow2,
          }}
        >
          {gridContent.slice(8, 12).map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                key={index}
                style={
                  index === 0
                    ? { ...styles.gridContent, backgroundColor: "#eedf95" }
                    : styles.gridContent
                }
                onLayout={(event) => {
                  const { x, y, width, height } = event.nativeEvent.layout
                  setLayoutList((prev) => [...prev, { x, y, width, height }])
                }}
                onPress={() => {
                  // console.log layout of each item
                  index === 0 && setShowContextMenu2(!showContextMenu2)
                  setShowContextMenu0(false)
                  setShowContextMenu1(false)
                  setShowContextMenu3(false)
                  setCurrentSelectedItem(index)
                  setZIndexRow2(-1)
                  setElavationRow2(5)
                  setZIndexRow1(-1)
                  setElavationRow1(-3)
                  setZIndexRow0(-1)
                  setElavationRow0(-3)
                }}
              >
                <FontAwesome name="home" size={24} color="black" />
                <Text>{item}</Text>
              </TouchableOpacity>
              {index === currentSelectedItem && index === 0 && showContextMenu2 && (
                <SubMenuItems
                  x={layoutList[index].x}
                  y={layoutList[index].y}
                  width={layoutList[index].width}
                  height={layoutList[index].height}
                  currentSelectedItem={currentSelectedItem}
                  currentRow={2}
                />
              )}
            </View>
          ))}
        </View>
        <View
          style={{
            position: "relative",
            top: 0,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            paddingHorizontal: 5,
            zIndex: -1,
            elevation: 5,
          }}
        >
          {gridContent.slice(12, 16).map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                key={index}
                style={
                  index === 0 || index === 2
                    ? { ...styles.gridContent, backgroundColor: "#eedf95" }
                    : styles.gridContent
                }
                onLayout={(event) => {
                  const { x, y, width, height } = event.nativeEvent.layout
                  setLayoutList((prev) => [...prev, { x, y, width, height }])
                }}
                onPress={() => {
                  // console.log layout of each item
                  ;(index === 0 || index === 2) && setShowContextMenu3(!showContextMenu3)
                  setShowContextMenu0(false)
                  setShowContextMenu1(false)
                  setShowContextMenu2(false)
                  setCurrentSelectedItem(index)
                  setZIndexRow2(-1)
                  setElavationRow2(-3)
                  setZIndexRow1(-1)
                  setElavationRow1(-3)
                }}
              >
                <FontAwesome name="home" size={24} color="black" />
                <Text>{item}</Text>
              </TouchableOpacity>
              {((index === currentSelectedItem && index === 0) ||
                (index === currentSelectedItem && index === 2)) &&
                showContextMenu3 && (
                  <SubMenuItems
                    x={layoutList[index].x}
                    y={layoutList[index].y}
                    width={layoutList[index].width}
                    height={layoutList[index].height}
                    currentSelectedItem={currentSelectedItem}
                    currentRow={3}
                  />
                )}
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
    justifyContent: "center",
    paddingHorizontal: 5,
    gap: 10,
    position: "relative",
    zIndex: 3,
    elevation: 0,
  },
  gridContent: {
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    width: childWidth,
    backgroundColor: "#f5f5",
    padding: 2,
    border: "1px solid black",
    borderRadius: 16,
    elevation: 0,
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    marginLeft: 10,
  },
  gridRowItem: {
    elevation: 0,
    position: "relative",
    zIndex: 1,
  },
})
export default GridContent
