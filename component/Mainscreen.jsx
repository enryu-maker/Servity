import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import Donarcard from "./Donarcard";
export default class Mainscreen extends Component {
  render() {
    const data = [
      {
        id: "1",
        src: require("../assets/black.png"),
        header: "Register Patient",
        desc: "Click to Register a New Patient",
        nav_link: "Patient",
      },
      {
        id: "2",
        src: require("../assets/white.png"),
        header: "Register Donor",
        desc: "Click to Register a New Donor",
        nav_link: "AddD",
      },
      {
        id: "3",
        src: require("../assets/black.png"),
        header: "Patient List",
        desc: "Click to Check Patient List",
        nav_link: "AddP",
      },
      {
        id: "4",
        src: require("../assets/white.png"),
        header: "Donor List",
        desc: "Click to Check Donor List",
        nav_link: "AddP",
      },
    ];
    const cardvalue = data.map((avatarcard, i) => {
      return (
        <Donarcard
          key={data[i].id}
          src={data[i].src}
          header={data[i].header}
          desc={data[i].desc}
          nav_link={data[i].nav_link}
        />
      );
    });
    return (
      <View style={{ backgroundColor: "#F4EEE8", height: "100%" }}>
        <View>
          <View style={styles.header}>
            <Text style={styles.header_text}>SERVITY</Text>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Patient");
              }}
            >
              <Donarcard
                key={data[0].id}
                src={data[0].src}
                header={data[0].header}
                desc={data[0].desc}
                nav_link={data[0].nav_link}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Donar");
              }}
            >
              <Donarcard
                key={data[1].id}
                src={data[1].src}
                header={data[1].header}
                desc={data[1].desc}
                nav_link={data[1].nav_link}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Patient");
              }}
            >
              <Donarcard
                key={data[2].id}
                src={data[2].src}
                header={data[2].header}
                desc={data[2].desc}
                nav_link={data[2].nav_link}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Donar");
              }}
            >
              <Donarcard
                key={data[3].id}
                src={data[3].src}
                header={data[3].header}
                desc={data[3].desc}
                nav_link={data[3].nav_link}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#325288",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    //marginTop:20
  },

  header_text: {
    fontSize: 35,
    color: "#fff",
    alignSelf: "center",
    letterSpacing: 4,
    alignContent: "center",
    //marginLeft:55
  },
});
