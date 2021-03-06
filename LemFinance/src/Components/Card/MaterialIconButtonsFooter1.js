import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconButtonsFooter1(props) {
    const pressHome = () => alert("Switch to Home")
    const pressWallet = () => alert("Switch to Wallet")
    const pressSearch = () => alert("Switch to Search")
    const pressSocial = () => alert("Switch to Social")

    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity style={styles.buttonWrapper1}
                              onPress={() => pressHome()}
            >
                <MaterialCommunityIconsIcon
                    name="home"
                    style={styles.icon1}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWrapper2} onPress={() => pressWallet()}>
                <MaterialCommunityIconsIcon
                    name="wallet"
                    style={styles.activeIcon}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWrapper3} onPress={() => pressSearch()}>
                <MaterialCommunityIconsIcon
                    name={props.icon3 || "magnify"}
                    style={styles.icon3}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWrapper4 } onPress={() => pressSocial()}>
                <MaterialCommunityIconsIcon
                    name="account-group"
                    style={styles.icon4}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3f51b5",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 3
    },
    buttonWrapper1: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    icon1: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    },
    buttonWrapper2: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    activeIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
    },
    buttonWrapper3: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    icon3: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    },
    buttonWrapper4: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    icon4: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    }
});

export default MaterialIconButtonsFooter1;
