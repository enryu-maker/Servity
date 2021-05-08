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
            <View style={styles.header}>
                <TouchableOpacity>
                <Image source={require('../assets/Vector.png')}
                style={styles.menu}/>
                </TouchableOpacity>
                <Text style={styles.header_text}>SERVITY</Text>
            </View>
          </View>
          <ScrollView>
          <View style={{ flexDirection: "column",justifyContent:'space-between',marginTop:30 }}>
           {cardvalue}
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
    backgroundColor:'#3e5f9c',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignSelf:'center',
    marginTop:20

  },
  menu:{
      height:40,
      width:40,
      margin:10,
      marginTop:20,
      //alignContent:'center',
      justifyContent:'center'
  },
  header_text:{
      fontSize:35,
      color:'#fff',
      alignSelf:'center',
      letterSpacing: 4,
      alignContent:'center',
      marginLeft:55
      
  }
  
});
