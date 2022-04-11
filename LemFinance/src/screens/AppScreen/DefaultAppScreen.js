import React, {Component} from "react";
import {StyleSheet, View, Image, KeyboardAvoidingView, ScrollView,Text} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";
import Accueil from "../AppScreen/Accueil";
import MaterialIconButtonsFooter1 from "../../Components/Card/MaterialIconButtonsFooter1";

function DefaultAppScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.defaultView}>
                <Accueil></Accueil>
            </View>
            <MaterialIconButtonsFooter1
                style={styles.materialIconButtonsFooter1}
                icon3Name="account-group"
                icon3="magnify"
            />
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
    materialIconButtonsFooter1: {
        height: 56,
        width: 375,
        backgroundColor: "#4da6a9",
        position: "absolute",
        bottom: 0,
    },
});

export default DefaultAppScreen;
