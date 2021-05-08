import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
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
      },
      {
        id: "2",
        src: require("../assets/white.png"),
        header: "Register Donor",
        desc: "Click to Register a New Donor",
      },
      {
        id: "3",
        src: require("../assets/black.png"),
        header: "Patient List",
        desc: "Click to Check Patient List",
      },
      {
        id: "4",
        src: require("../assets/white.png"),
        header: "Donor List",
        desc: "Click to Check Donor List",
      },
    ];
    const cardvalue=(data.map((avatarcard,i)=>{
        return <Donarcard key={data[i].id} src={data[i].src} header={data[i].header} desc={data[i].desc}/>}))
    return (

        <View style={{backgroundColor:'#FAF0E6', height:'100%'}}>
            
          <View>
            <ImageBackground
              style={styles.header}
              source={require("../assets/header.png")}
            >
                <TouchableOpacity>
                <Image source={require('../assets/Vector.png')}
                style={styles.menu}/>
                </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{ flexDirection: "column",justifyContent:'space-between',marginTop:30 }}>
           {cardvalue}
          </View>
        </View>


    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    //position:'relative',
    //flex:2
  },
  menu:{
      height:40,
      width:40,
      margin:10,
      marginTop:20,
      //alignContent:'center',
      justifyContent:'center'
  }
  
});
