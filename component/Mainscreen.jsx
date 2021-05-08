import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'

export default class Mainscreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Image
                    style={styles.header}
                    source={require('../assets/header.png')}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <View style={styles.card}>
                            <Image style={styles.logo}
                            source={require('../assets/black,png')}/>
                            <View>
                                
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'55%'

    },
    card:{
        
    }
})
