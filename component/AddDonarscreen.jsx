import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Dimensions } from "react-native";
export default class Adddonar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Age: "",
      Blood_group: "",
      Hospital_Name: "",
      House_Address: "",
      Contact_Number: "",
      Any_message: "",
    };
  }
  render() {
    //const screen = Dimensions.get("screen");
    //var wid = screen.width / 2;
    return (
      <View style={{ backgroundColor: "#F4EEE8", height: "100%" }}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.header_text}>Register Donar</Text>
          </View>

          <ScrollView>
            <Text style={styles.heading_text}>Name</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="Name"
              returnKeyType={"next"}
              onChangeText={(text) => this.setState({ Name: text })}
            />
            <Text style={styles.heading_text}>Age</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="Age"
              returnKeyType="next"
              onChangeText={(text) => this.setState({ Age: text })}
            />
            <Text style={styles.heading_text}>Blood Group</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="Blood Group"
              returnKeyType="next"
              onChangeText={(text) => this.setState({ Blood_group: text })}
            />
            <Text style={styles.heading_text}>Hospital Name</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="Hospital Name"
              returnKeyType="next"
              onChangeText={(text) => this.setState({ Hospital_Name: text })}
            />
            <Text style={styles.heading_text}>House Address</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="House Address"
              returnKeyType="next"
              onChangeText={(text) => this.setState({ House_Address: text })}
            />
            <Text style={styles.heading_text}>Contact Number</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="Contact Number"
              returnKeyType="next"
              onChangeText={(text) => this.setState({ Contact_Number: text })}
            />
            <Text style={styles.heading_text}>Any message</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="Any message"
              returnKeyType="next"
              onChangeText={(text) => this.setState({ Any_message: text })}
            />

            <TouchableOpacity>
              <View style={styles.btn}>
                <Text style={styles.btn_text}>Submit</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    //marginTop:20,
    position: "relative",
  },
  menu: {
    height: 40,
    width: 40,
    margin: 10,
    marginTop: 20,
    //alignContent:'center',
    justifyContent: "center",
  },
  header_text: {
    fontSize: 28,
    color: "#fff",
    alignSelf: "center",
    //letterSpacing: 4,
    alignContent: "center",
    //marginLeft: 55,
    justifyContent: "center",
    margin: 40,
  },
  input: {
    height: 60,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  heading_text: {
    marginTop: 10,
    //padding:8,
    marginLeft: 15,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#3e5f9c",
    height: 50,
    width: 100,
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    margin: 20,
    alignSelf: "center",
  },
  btn_text: {
    color: "#fff",
    fontSize: 17,
  },
});
