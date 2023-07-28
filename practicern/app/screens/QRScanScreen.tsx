import React, { useCallback, useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner"
import { RNCamera } from "react-native-camera"
import QRCodeList from "app/components/QRCodeScan/QRCodeList"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ScrollView } from "react-native-gesture-handler"

type Props = {}

const QRScanScreen = (props: Props) => {
  let camera = React.useRef(null)

  const [result, setResult] = useState<string>("")
  const [qrCodeList, setQRCodeList] = useState<string[]>([])
  const [reactivateQR, setReactivateQR] = useState<boolean>(false)
  const storeItem = async (qrCodeList: string[]) => {
    try {
      const jsonValue = JSON.stringify(qrCodeList)
      await AsyncStorage.setItem("@qrCode", jsonValue)
    } catch (e) {
      console.log(e)
    }
  }
  const getItem = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@qrCode")
      console.log(jsonValue, typeof jsonValue)
      if (jsonValue != null) {
        setQRCodeList(JSON.parse(jsonValue))
        console.log("qrCodeList", qrCodeList)
      }
    } catch (e) {
      console.log(e)
    }
  }
  console.log("qrCodeList", qrCodeList)
  useEffect(() => {
    getItem()
    setReactivateQR(true)
  }, [result])

  const checkDuplicate = (qrCode: string) => {
    if (qrCodeList.includes(qrCode)) {
      return true
    } else {
      return false
    }
  }
  const handleSuccess = (e: any) => {
    console.log(e)
    setResult(e.data)
    if (!checkDuplicate(e.data)) {
      setQRCodeList((qrCodeList) => [...qrCodeList, e.data])
      storeItem(qrCodeList)
      console.log("stored")
    }
  }

  return (
    // <View>
    //   {/* <QRCodeScanner
    //     onRead={handleSuccess}
    //     flashMode={RNCamera.Constants.FlashMode.torch}
    //     reactivate={true}
    //     showMarker={true}
    //   /> */}
    //   {/* */}
    // </View>
    <View style={{ marginTop: 10 }}>
      <View style={{ height: "50%" }}>
        <RNCamera
          ref={(ref) => {
            camera = ref
          }}
          captureAudio={false}
          style={{ height: "80%" }}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          onBarCodeRead={handleSuccess}
        />
      </View>
      <View>
        <QRCodeList qrCodeList={qrCodeList} setQRCodeList={setQRCodeList} />
      </View>
    </View>
  )
}

export default QRScanScreen

const styles = StyleSheet.create({})
