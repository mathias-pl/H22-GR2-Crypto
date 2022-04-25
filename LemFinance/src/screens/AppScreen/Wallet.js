import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ScrollView} from "react-native";

function Wallet(props) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Wallet</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        margin: 30
    },
});

export default Wallet;