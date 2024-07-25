import React from 'react';
import { TextInput } from 'react-native';
import {View, StyleSheet} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchBar = () => {
    return (
        <View style={styles.search_box}>
            <View style={{justifyContent: "center"}}>
                <FontAwesome5 name={"search"} size={20} color="grey"/>
            </View>
            <TextInput style={styles.search_input} placeholder='Search'/>
        </View>
    );
}

const styles = StyleSheet.create({
    search_box: {
        padding: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 20,
        backgroundColor: "#fff",
    },

    search_input: {
        fontSize: 18,
        width: "90%",
        color: "grey",
        marginLeft: 10,
    },

})

export default SearchBar;
