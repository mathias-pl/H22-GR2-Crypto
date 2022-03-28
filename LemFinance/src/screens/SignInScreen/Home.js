import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary"
import MaterialButtonPrimary1 from "../../Components/CustomButton/MaterialButtonPrimary1";

function Home(props) {
    return (
        <View style={styles.container}>
            <Image
                source={require("./../../../assets/images/logo-transparent_bllL..png")}
                resizeMode="contain"
                style={styles.logo}
            ></Image>
            <MaterialButtonPrimary
                style={styles.identificationButton}
            ></MaterialButtonPrimary>
            <MaterialButtonPrimary1
                caption="BUTTON"
                caption="CRÉER UN COMPTE"
                style={styles.accountCreationButton}
            ></MaterialButtonPrimary1>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: 150,
        marginLeft: 88
    },
    identificationButton: {
        height: 46,
        width: 274,
        borderRadius: 12,
        backgroundColor: "rgba(77,166,169,1)",
        marginTop: 263,
        marginLeft: 51
    },
    accountCreationButton: {
        height: 46,
        width: 274,
        backgroundColor: "rgba(160,189,191,1)",
        borderRadius: 12,
        marginTop: 22,
        marginLeft: 51
    }
});

export default Home;
