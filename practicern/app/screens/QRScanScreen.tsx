import React, { useCallback, useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native"
// import { Camera, useCameraDevices } from "react-native-vision-camera"

type Props = {}

const QRScanScreen = (props: Props) => {
  // const [hasPermission, setHasPermission] = useState<boolean | any>(false)
  // const devices = useCameraDevices()
  // const device = devices.back

  // const requestCameraPermission = async (): Promise<any> => {
  //   const status = await Camera.requestCameraPermission()
  //   console.log("QRScanScreen.tsx: ", status)
  //   setHasPermission(status === "authorized")
  // }

  // useEffect(() => {
  //   requestCameraPermission()
  // }, [])
  // console.log("QRScanScreen.tsx: ", hasPermission, device)
  // if (!hasPermission) {
  //   ;<View>
  //     <Text style={{ marginTop: 50 }}>No Permission</Text>
  //   </View>
  // }
  // console.log("QRScanScreen.tsx: ", hasPermission, device)
  // if (device == null) return <ActivityIndicator style={{ marginTop: 50 }} />

  return (
    <View>
      {/* <SafeAreaView>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleText}>React Native Scanner</Text>
        </View>
      </SafeAreaView>
      <View style={styles.caption}>
        <Text style={styles.captionTitleText}> Welcome To React-Native-Camera Tutorial</Text>
      </View>
      
      <View>
        <TouchableOpacity>
          <Text>New QR Scan</Text>
        </TouchableOpacity>
      </View> */}
      {/* <Camera device={device} isActive={true} /> */}
      <Text>Hello</Text>
    </View>
  )
}

export default QRScanScreen

const styles = StyleSheet.create({})
