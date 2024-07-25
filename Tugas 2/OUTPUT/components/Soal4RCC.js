import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Latihan4rcc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MyBio: {
                identity: {
                    npm: 222310005,
                    name: "Dandi Hendika",
                },
                education: [
                    { id: 3, school: "Institut Bisnis dan Informatika Kesatuan" },
                ],
                no_telpon: "08966727523",
                email: "222310005@student.ibik.ac.id",
                gender: "Pria",
                tall_body: 175,
                weight_body: 70
            }
        }
    }
    render() {
        const { MyBio } = this.state;
        const eduNow = this.state.MyBio.education.find((item) => item.id == 3);

        return (
            <View style={styles.container}>
                <Text style={styles.judul}>Biodata Diri Dengan RCC</Text>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>NPM :</Text>
                    <Text style={styles.data}>{MyBio.identity.npm}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>Nama :</Text>
                    <Text style={styles.data}>{MyBio.identity.name}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>Pendidikan :</Text>
                    <Text style={styles.data}>{eduNow?.school}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>No. Telpon :</Text>
                    <Text style={styles.data}>{MyBio.no_telpon}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>Email :</Text>
                    <Text style={styles.data}>{MyBio.email}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>Jenis Kelamin :</Text>
                    <Text style={styles.data}>{MyBio.gender}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>Tinggi :</Text>
                    <Text style={styles.data}>{MyBio.tall_body}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.label}>Berat :</Text>
                    <Text style={styles.data}>{MyBio.weight_body}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 20,
    },
    judul: {
        color: "white",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 20
    },
    dataContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        color: "white",
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
    data: {
        color: "white",
        fontSize: 16,
    },
});

export default Latihan4rcc;
