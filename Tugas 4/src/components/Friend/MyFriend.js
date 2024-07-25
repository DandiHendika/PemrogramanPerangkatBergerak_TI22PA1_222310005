import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import SearchBar from './widgets/SearchBar';
import ExpScrollView from './modules/ExpScrollView';
import { Users } from '../const-data/Users';
import ExpFlatList from './modules/ExpFlatList';
import ExpSectionList from './modules/ExpSectionList';

class MyFriend extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.header}>
                    <SearchBar/>
                </View>
                <View style={styles.body}>
                    <ExpSectionList Users={Users} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        flex: 1,
        // backgroundColor: "pink",
        paddingHorizontal: 10,
        justifyContent: "center"

    },
    body: {
        flex: 10,
        // backgroundColor: "salmon"
    }
})

export default MyFriend;
