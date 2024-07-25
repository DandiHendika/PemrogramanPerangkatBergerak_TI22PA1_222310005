import React, { Component } from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';

class Latihan3 extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/logo_ibik.png')}
                        style={{ width:83, height:80, backgroundColor: 'purple'}}/>
                </View>
                <Text style={styles.textLoad}>Loading...</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    backgroundColor:"purple",
    container :{
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:70
    },
    textLoad :{
        color: 'black',
        backgroundColor: 'purple',
        fontSize:15,
        textAlign:'center',
        marginBottom:70
    }
})

export default Latihan3;
