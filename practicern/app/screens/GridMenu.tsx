import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Header from "app/components/GridMenu/Header"
import GridContent from "app/components/GridMenu/GridContent"
import NavigationBar from "app/components/GridMenu/NavigationBar"

type Props = {}

const GridMenu = (props: Props) => {
  return (
    <View>
      <Header />
      <GridContent />
      <NavigationBar />
    </View>
  )
}

export default GridMenu

const styles = StyleSheet.create({})
