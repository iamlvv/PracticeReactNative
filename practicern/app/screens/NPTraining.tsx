import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import ProgressBar from "react-native-progress/Bar"

type Props = {}

const NPTraining = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/trainingimages/pattern_profile.png")}
        style={styles.pattern_profile}
      />
      <MaterialCommunityIcons
        name="arrow-down-drop-circle-outline"
        size={24}
        color="black"
        style={styles.dropdown_icon}
      />
      <View style={styles.bonus}>
        <Text style={styles.bonusText}>Sold Bonus</Text>
        <Image source={require("../../assets/trainingimages/eye.png")} />
      </View>
      <View style={styles.coin}>
        <Image source={require("../../assets/trainingimages/coin.png")} />
        <Text style={styles.coinText}>1 240 700</Text>
      </View>
      <View style={styles.avatar}>
        <Image source={require("../../assets/trainingimages/avatar_4.png")} />
        <View style={styles.pencil}>
          <Image
            source={require("../../assets/trainingimages/pencil.png")}
            style={{ width: 10, height: 10 }}
          />
        </View>
        <View style={{ marginTop: -15 }}>
          {/* <ImageBackground source={require("../../assets/trainingimages/ribbon_brown.png")}>
            <Text>Compagnon</Text>
          </ImageBackground> */}
          <Image source={require("../../assets/trainingimages/ribbon_brown.png")} />
          <Text style={styles.ribbonText}>Compagnon</Text>
        </View>
      </View>
      <View style={styles.fullName}>
        <Text style={styles.name}>Djibril Ndiaye</Text>
        <Text style={styles.nickName}>@Djib's</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.totalPoints}>
          <View style={styles.progress_points}>
            <Text>Total de points</Text>
            <Text style={styles.points}>2120 pts</Text>
          </View>
          <View>
            <ProgressBar progress={0.3} width={170} height={15} />
          </View>
        </View>
        <View style={styles.object}>
          <Text style={{ fontWeight: "bold" }}>Prochain objectif</Text>
          <View style={styles.green_ribbon}>
            <View>
              <Image source={require("../../assets/trainingimages/ribbon_green.png")} />
              <Text style={styles.mentor}>Mentor</Text>
            </View>
            <Text style={styles.ribbon_green_points}>5000 pts</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default NPTraining

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
  },
  pattern_profile: {
    borderRadius: 16,
    display: "flex",
    height: 250,
    width: 410,
    marginLeft: 10,
    marginTop: 30,
  },
  bonus: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    left: "40%",
    position: "absolute",
    top: 70,
  },
  bonusText: {
    fontWeight: "bold",
  },
  dropdown_icon: {
    position: "absolute",
    right: 20,
    top: 50,
  },
  coin: {
    position: "absolute",
    top: "25%",
    flexDirection: "row",
    alignItems: "center",
    left: "32%",
  },
  coinText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -60,
  },
  pencil: {
    border: "1px solid black",
    borderRadius: 50,
    position: "absolute",
    top: 1,
    left: 10,
  },
  ribbonText: {
    position: "absolute",
    top: 10,
    left: 60,
    color: "white",
    fontSize: 20,
  },
  fullName: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
  },
  nickName: {
    color: "grey",
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  totalPoints: {
    marginLeft: 20,
    gap: 10,
  },
  progress_points: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 170,
  },
  points: {
    fontWeight: "bold",
  },
  object: {
    justifyContent: "center",
    alignItems: "center",
    gap: -20,
  },
  green_ribbon: {
    alignItems: "center",
    gap: -50,
  },
  mentor: {
    position: "absolute",
    top: 37,
    left: 100,
    color: "white",
    fontSize: 24,
  },
  ribbon_green_points: {
    fontSize: 20,
    marginLeft: 15,
  },
})
