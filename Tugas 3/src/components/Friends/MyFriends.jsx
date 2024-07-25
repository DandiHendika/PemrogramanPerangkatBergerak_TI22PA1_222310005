// MyFriends.js

import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import SearchBarUI from './widgets/SearchBarUI';
import ExpScrollView from './modules/ExpScrollView';
import { Users } from '../const-data/User';
import ExpSectionList from './modules/ExpSectionList';

class MyFriends extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false}/>
                <View style={styles.header}>
                    <SearchBarUI/>
                </View>
                <View style={styles.body}>
                    <ExpScrollView Data={Users}/>
                </View>
                <View style={styles.secTion2}>
                    <ExpSectionList Users={Users}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    header:{
        justifyContent:"center",
        paddingHorizontal:10,
        marginBottom: 10
    },
    body:{
        flex:9
    },
    secTion:{
        flex:5,
    }
})

export default MyFriends;
