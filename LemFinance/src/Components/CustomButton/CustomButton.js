import React from 'react';
import {Text, View, Image, StyleSheet, Pressable, useWindowDimensions} from 'react-native';

const CustomButton = ({onPress, text, color}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`Container_${type}`]]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>)
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: 20,
        marginVertical: 5,

        alignItems: "center",
        borderRadius: 10,
    },
    container_Blue: {
        backgroundColor: "#4DA6A9",
    },
    container_Grey: {
        backgroundColor: "#A0BDBF",
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 28,
        // fontFamily:"",
    }
})

export default CustomButton;