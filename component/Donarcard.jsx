import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'

export default class Donarcard extends Component {
    render() {
        return (
            <TouchableOpacity>
              <View style={styles.card}>
                <Image
                  style={styles.logo}
                  source={this.props.src}
                />
                <View
                  style={{ flexDirection: "column", justifyContent: "center" }}
                >
                  <Text style={styles.header_text}>{this.props.header}</Text>
                  <Text style={styles.main_text}>
                    {this.props.desc}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        margin: 20,
      },
      card: {
        borderWidth: 1,
        borderColor:'black',
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 20,
        margin:20,
        height: 90,
        //width: "80%",
        borderRadius: 20,
      },
      header_text: {
          fontSize:20,
      },
      main_text: {
          fontSize:14,
          color:'grey'
      },
})
