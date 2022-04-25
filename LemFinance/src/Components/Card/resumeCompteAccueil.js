import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

function ResumeCompteAccueil(props) {
    return (<View style={[styles.container, props.style]}>
        <View style={styles.messageAccueil}>
            <Text style={styles.nomUtilisateur}>Bonjour nomUtilisateur</Text>
            <Text style={styles.pourcentage}>+3.58%</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.texteNormal}>Votre portefeuille vaut</Text>
        </View>

        <View>
            <Text style={styles.infoArgent}>23&#39;592.40$ USD</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderRadius: 2,
        // borderColor: "#CCC",
        // flexWrap: "nowrap",
        // backgroundColor: "#FFF",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: -2, height: 2
        // },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        overflow: "hidden",
        justifyContent: "space-evenly"
    }, messageAccueil: {
        padding: 25, paddingTop: 15, justifyContent: "center"
    }, nomUtilisateur: {
        fontSize: 28, color: "#000", lineHeight: 28
    }, pourcentage: {
        fontSize: 22, color: "rgba(65,111,16,1)", lineHeight: 22, opacity: 0.7
    }, body: {
        padding: 10, paddingTop: 8, alignSelf: "center"
    }, texteNormal: {
        lineHeight: 22, fontSize: 22, color: "#000", flexWrap: "wrap" //Ancienne couleur : "#424242"
    }, infoArgent: {
        alignSelf: "center", lineHeight: 24, fontSize: 24, color: "#000", opacity: 0.9
    },
});

export default ResumeCompteAccueil;
