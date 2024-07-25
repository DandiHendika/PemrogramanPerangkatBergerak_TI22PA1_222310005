import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

const Latihan4rfc = () => {
    const [MyBio] = useState({
        identity: {
            npm: 222310005,
            nama: "Dandi Hendika",
        },
        pendidikan: [
            { id: 3, sekolah: "Institut Bisnis dan Informatika Kesatuan" },
        ],
        no_telpon: "088966727523",
        email: "222310005@student.ibik.ac.id",
        jenis_kelamin: "Pria",
        tinggi: 175,
        berat: 70
    });

    const pendidikanSekarang = MyBio.pendidikan.find((item) => item.id === 3);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.judul}>Biodata Diri Dengan RFC</Text>
            <View style={styles.dataContainer}>
                <Text style={styles.label}>NPM :</Text>
                <Text style={styles.data}>{MyBio.identity.npm}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.label}>Nama :</Text>
                <Text style={styles.data}>{MyBio.identity.nama}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.label}>Pendidikan :</Text>
                <Text style={styles.data}>{pendidikanSekarang?.sekolah}</Text>
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
                <Text style={styles.data}>{MyBio.jenis_kelamin}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.label}>Tinggi :</Text>
                <Text style={styles.data}>{MyBio.tinggi}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.label}>Berat :</Text>
                <Text style={styles.data}>{MyBio.berat}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#021526',
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

export default Latihan4rfc;
