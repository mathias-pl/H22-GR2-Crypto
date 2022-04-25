import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function BarreMenu(props) {
    const pressHome = () => alert("Switch to Home")
    const pressWallet = () => alert("Switch to Wallet")
    const pressSearch = () => alert("Switch to Search")
    const pressSocial = () => alert("Switch to Social")

    return (
        <View style={[styles.container, props.style]}>

            <TouchableOpacity style={styles.buttonWrapper} onPress={pressHome}>
                <MaterialCommunityIconsIcon
                    name="home"
                    style={styles.activeIcon}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonWrapper} onPress={pressWallet}>
                <MaterialCommunityIconsIcon
                    name="wallet"
                    style={styles.idleIcon}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonWrapper} onPress={pressSearch}>
                <MaterialCommunityIconsIcon
                    name={props.icon3 || "magnify"}
                    style={styles.idleIcon}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonWrapper} onPress={pressSocial}>
                <MaterialCommunityIconsIcon
                    name="account-group"
                    style={styles.idleIcon}
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
    buttonWrapper: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    idleIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    },
    activeIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
    },
});

export default BarreMenu;
