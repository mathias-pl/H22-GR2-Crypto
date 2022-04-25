import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary"
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../../Components/CustomButton/MaterialUnderlineTextbox1";

const URL = 'http://34.95.8.78/api/register';

export default class Signup extends React.Component {

    onChangeText = (key, val) => {
        this.setState({[key]: val});
    };

    connApiSignup = async () => {
        const {firstname, lastname, username, password, email} = this.state;
        try {

            var response = await fetch(URL, {
                method: 'POST', headers: {
                    'Accept': 'application/json', 'Content-Type': 'application/json',
                }, body: JSON.stringify({
                    _id: username, password: password, email: email, firstName: firstname, lastName: lastname,
                }),
            })

            var data = await response.json();

            alert(data["success"]);

        } catch (err) {
            console.log('error signing up: ', err);
        }
    };

    render() {
        return (//Main view
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

                                <View style={styles.materialUnderlineTextbox1}>
                                    <View style={styles.TBcontainer}>
                                        <TextInput
                                            placeholder="PRÉNOM"
                                            style={styles.TBinputStyle}
                                            onChangeText={(val) => this.onChangeText('firstname', val)}
                                        ></TextInput>
                                    </View>
                                </View>
                                <View style={styles.materialUnderlineTextbox2}>
                                    <View style={styles.TBcontainer}>
                                        <TextInput
                                            placeholder="NOM"
                                            style={styles.TBinputStyle}
                                            onChangeText={(val) => this.onChangeText('lastname', val)}
                                        ></TextInput>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.emailInput}>
                                <View style={styles.TBcontainer}>
                                    <TextInput
                                        placeholder="EMAIL"
                                        style={styles.TBinputStyle}
                                        onChangeText={(val) => this.onChangeText('email', val)}
                                    />
                                </View>
                            </View>

                            <View style={styles.usernameInput}>
                                <View style={styles.TBcontainer}>
                                    <TextInput
                                        placeholder="NOM D'UTILISATEUR"
                                        style={styles.TBinputStyle}
                                        onChangeText={(val) => this.onChangeText('username', val)}
                                    />
                                </View>
                            </View>

                            <View style={styles.passwordInput}>
                                <View style={styles.TBcontainer}>
                                    <TextInput
                                        placeholder="MOT DE PASSE"
                                        style={styles.TBinputStyle}
                                        secureTextEntry={true}
                                        onChangeText={(val) => this.onChangeText('password', val)}
                                    />
                                </View>
                            </View>

                            <View style={styles.confirmPasswordInput}>
                                <View style={styles.TBcontainer}>
                                    <TextInput
                                        placeholder="RÉPÉTER LE MOT DE PASSE"
                                        secureTextEntry={true}
                                        style={styles.TBinputStyle}
                                        // onChangeText={(val) => this.onChangeText('password', val)}
                                    />
                                </View>
                            </View>


                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>

                <View style={styles.connexionButton1}>
                    <TouchableOpacity style={styles.BTcontainer}
                                      onPress={() =>
                                          this.props.nav.navigate('DefaultAppScreen')}>
                        <Text style={styles.BTcaption}>{"INSCRIPTION"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, logo: {
        height: 120, width: 120, marginTop: 76, alignSelf: "center"
    }, emailInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 10,
        alignSelf: "center",
    }, usernameInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        alignSelf: "center",
        marginTop: 10, // marginTop: 15,
        // marginLeft: 38
    }, passwordInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        alignSelf: "center",
        marginTop: 10,

        // marginTop: 49,
        // marginLeft: 43
    }, confirmPasswordInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        alignSelf: "center",
        marginTop: 10,
    }, connexionButton1: {
        height: 46,
        width: 274,
        borderRadius: 12,
        backgroundColor: "rgba(77,166,169,1)",
        alignSelf: "center",
        marginBottom: 35,
        marginTop: 50,
    }, materialUnderlineTextbox1: {
        height: 43, width: 144, backgroundColor: "rgba(230, 230, 230,1)", borderRadius: 12, alignSelf: "center",
    }, materialUnderlineTextbox2: {
        height: 43,
        width: 144,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 12,
        marginLeft: 10,
        alignSelf: "center"
    }, materialUnderlineTextbox1Row: {
        height: 43, flexDirection: "row", marginTop: 162, alignSelf: "center"
        // marginLeft: 39,
        // marginRight: 38
    }, TBcontainer: {
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",

    }, TBinputStyle: {
        color: "#000",
        paddingRight: 5,
        fontSize: 16,
        alignSelf: "stretch",
        flex: 1,
        lineHeight: 16,
        paddingTop: 15,
        paddingBottom: 8,
        marginLeft: 20
    },
    BTcontainer: {
        alignItems: "center",
        padding: 10,
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,

        minWidth: 88,

    },
    BTcaption: {
        color: "#fff",
        fontSize: 14,

    }
});

