import React, {Component} from "react";
import {StyleSheet, View, Image, ScrollView, KeyboardAvoidingView} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary"
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../../Components/CustomButton/MaterialUnderlineTextbox1";

function Signup(props) {
    return (
        //Main view
        <View style={styles.container}>
            {/*Logo*/}
            <Image
                source={require("./../../../assets/images/LEM_Logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <KeyboardAvoidingView behavior="position">
                <ScrollView bounces={false}>
                    {/*view for text inputs*/}
                    <View style={styles.textBoxStyle}>

                        <View style={styles.materialUnderlineTextbox1Row}>
                            <MaterialUnderlineTextbox1
                                inputStyle="PRÉNOM"
                                style={styles.materialUnderlineTextbox1}
                            />
                            <MaterialUnderlineTextbox1
                                inputStyle="NOM"
                                style={styles.materialUnderlineTextbox2}
                            />
                        </View>

                        <MaterialUnderlineTextbox
                            inputStyle="EMAIL"
                            style={styles.emailInput}
                        />
                        <MaterialUnderlineTextbox
                            inputStyle="NOM D'UTILISATEUR"
                            style={styles.usernameInput}
                        />
                        <MaterialUnderlineTextbox
                            inputStyle="MOT DE PASSE"
                            style={styles.passwordInput}
                        />

                        <MaterialUnderlineTextbox
                            inputStyle="RÉPÉTER LE MOT DE PASSE"
                            style={styles.confirmPasswordInput}
                        />


                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            {/*Button*/}
            <MaterialButtonPrimary
                caption="INSCRIPTION"
                style={styles.connexionButton1}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        height: 120,
        width: 120,
        marginTop: 76,
        alignSelf: "center"
    },
    emailInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 10,
        alignSelf: "center",
    },
    usernameInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        alignSelf: "center",
        marginTop: 10,
        // marginTop: 15,
        // marginLeft: 38
    },
    passwordInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        alignSelf: "center",
        marginTop: 10,

        // marginTop: 49,
        // marginLeft: 43
    },
    confirmPasswordInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        alignSelf: "center",
        marginTop: 10,
    },
    connexionButton1: {
        height: 46,
        width: 274,
        borderRadius: 12,
        backgroundColor: "rgba(77,166,169,1)",
        alignSelf: "center",
        marginBottom: 35,
        marginTop: 50,
    },
    materialUnderlineTextbox1: {
        height: 43,
        width: 144,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 12,
        alignSelf: "center",
    },
    materialUnderlineTextbox2: {
        height: 43,
        width: 144,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 12,
        marginLeft: 10,
        alignSelf: "center"
    },
    materialUnderlineTextbox1Row: {
        height: 43,
        flexDirection: "row",
        marginTop: 162,
        alignSelf: "center"
        // marginLeft: 39,
        // marginRight: 38
    },
    textBoxStyle: {}
});

export default Signup;
