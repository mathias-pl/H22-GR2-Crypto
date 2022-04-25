import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ScrollView} from "react-native";

function Social(props) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Social</Text>
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

export default Social;