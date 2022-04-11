import React, {Component} from "react";
import {StyleSheet, View, TextInput, KeyboardAvoidingView} from "react-native";

function MaterialUnderlineTextbox(props) {

    return (
        <View style={[styles.container, props.style]}>
            <TextInput
                placeholder={props.inputStyle || "Placeholder"}
                style={styles.inputStyle}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    TBcontainer: {
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",

    },
    TBinputStyle: {
        color: "#000",
        paddingRight: 5,
        fontSize: 16,
        alignSelf: "stretch",
        flex: 1,
        lineHeight: 16,
        paddingTop: 10,
        paddingBottom: 8,
        marginLeft: 20
    }
});

export default MaterialUnderlineTextbox;
