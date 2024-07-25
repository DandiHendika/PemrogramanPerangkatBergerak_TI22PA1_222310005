import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';

const Latihan1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                History of Bicycle
            </Text>
            <View style={styles.contentContainer}>
                <Text style={styles.paragraph}>
                    A bicycle, also called a 
                    <Text style={{ ...styles.paragraph, color: "red" }}> pedal cycle</Text>,
                    <Text style={{ ...styles.paragraph, fontWeight: "bold" }}> bike</Text>,
                    <Text style={{ ...styles.paragraph, fontStyle: "italic" }}> push-bike or cycle</Text>,
                    is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
                </Text>
            </View>
            <Image
                source={require("../assets/elden.jpg")}
                style={styles.image}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "brown",
        color: "#fff",
        textAlign: "center",
        textDecorationLine: "underline",
        padding: 10,
        marginBottom: 10,
    },
    contentContainer: {
        borderWidth: 1,
        width: 220,
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: "justify",
    },
    image: {
        width: 220,
        height: 240,
    },
});

export default Latihan1;
