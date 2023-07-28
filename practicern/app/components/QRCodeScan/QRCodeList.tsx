import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

type Props = {
  qrCodeList: Array<string>
  setQRCodeList: React.Dispatch<React.SetStateAction<string[]>>
}

const QRCodeList = (props: Props) => {
  // Check if the QR code is already in the list
  // If it is, then don't add it
  // If it isn't, then add it

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem("@qrCode")
      props.setQRCodeList([])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.qrcodelist}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Text style={styles.heading}>QR Code List</Text>
        <TouchableOpacity
          onPress={() => {
            removeItem()
          }}
          style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
        >
          <Text style={{ color: "white" }}>Remove</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.scrollView}>
          <View style={styles.list} contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
            {props.qrCodeList.length > 0 ? (
              props.qrCodeList
                .slice()
                .reverse()
                .map((qrCode, index) => {
                  return (
                    <Pressable key={index}>
                      <Text style={styles.item}>{qrCode}</Text>
                    </Pressable>
                  )
                })
            ) : (
              <Text style={styles.item}>No QR Code scanned</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default QRCodeList

const styles = StyleSheet.create({
  heading: { fontSize: 24, justifyContent: "center", flexDirection: "row", marginBottom: 10 },
  scrollView: {
    marginHorizontal: 20,
    flex: 1,
  },
  qrcodelist: {
    top: 200,
    minHeight: "100%",
    height: "auto",
    flex: 1,
  },
  list: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
  },
  item: {
    fontSize: 18,
    justifyContent: "center",
    flexDirection: "row",
  },
})
