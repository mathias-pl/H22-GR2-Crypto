import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ScrollView} from "react-native";
import ResumeCompteAccueil from "../../Components/Card/resumeCompteAccueil";
import FicheCrypto from "../../Components/Card/FicheCrypto"
import BarreMenu from "../../Components/Card/barreMenu";

function Accueil(props) {
    return (
        <ScrollView style={styles.container}>
            <ScrollView style={styles.menuPrincipal}>
                <View style={styles.groupNomUtilisateur}>
                    <Text style={styles.nomUtilisateur}>nomUtilisateur</Text>
                    <Text style={styles.montantArgent}>montantArgent</Text>
                </View>

                <ResumeCompteAccueil
                    style={styles.resumeCompteStyle}
                ></ResumeCompteAccueil>

                <ScrollView horizontal={true} style={styles.ligneCrypto}>
                    <FicheCrypto></FicheCrypto>
                    <FicheCrypto></FicheCrypto>
                    <FicheCrypto></FicheCrypto>
                    <FicheCrypto></FicheCrypto>
                </ScrollView>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuPrincipal: {
        width: 335,
        marginTop: 30,
        marginLeft: 20
    },
    resumeCompteStyle: {
        height: 221,
        width: 335,
        borderRadius: 12,
        backgroundColor: "rgba(77,166, 166,0.31)",
        marginTop: 15
    },
    //GROUPS
    groupNomUtilisateur: {
        width: 335,
        height: 44,
        marginTop: 15,
        marginLeft: 10
    },
    ligneCrypto: {
        width: 330,
        height: 92,
        flexDirection: "row",
        marginTop: 15,
        flex: 1
    },
    nomUtilisateur: {
        fontFamily: "Roboto",
        color: "#121212",
        fontSize: 18
    },
    montantArgent: {
        fontFamily: "Roboto",
        color: "#121212"
    }

    //Not used
    // materialCardWithoutImageColumnFiller: {
    //     flex: 1
    // },
    // materialIconButtonsFooter1: {
    //     height: 56,
    //     width: 375,
    //     backgroundColor: "#4da6a9"
    // }
});

export default Accueil;
