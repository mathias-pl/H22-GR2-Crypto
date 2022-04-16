import React, {Component} from "react";
import {StyleSheet, View, Image, KeyboardAvoidingView, ScrollView,Text} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";
import Accueil from "../AppScreen/Accueil";
import BarreMenu from "../../Components/Card/barreMenu";

function DefaultAppScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.defaultView}>
                <Accueil></Accueil>
                <BarreMenu
                style={styles.styleBarreMenu}
                icon3Name="account-group"
                icon3="magnify"
            />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    defaultView: {
        flex: 1
    },
    styleBarreMenu: {
        height: 56,
        width: '100%',
        backgroundColor: "#4da6a9",
        position: "absolute",
        bottom: 0,
    },
});

export default DefaultAppScreen;
