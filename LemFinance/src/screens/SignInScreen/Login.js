import React, {Component} from "react";
import {StyleSheet, View, Image, KeyboardAvoidingView, TextInput, ScrollView, Button} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";


const URL = 'http://34.95.8.78/api/login';

export default class Login extends React.Component {

    onChangeText = (key, val) => {
        this.setState({[key]: val});
    };

    connApiLogin = async () => {
        const {username, password} = this.state;
        alert(username)
        // try {
        //
        //     var response = await fetch(URL, {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             _id: username,
        //             password: password,
        //         }),
        //     })
        //
        //     var data = await response.json();
        //
        //     alert(data["success"]);
        //
        // } catch (err) {
        //     console.log('error signing up: ', err);
        // }
    };

    render() {
        return (
            <View>
                <Image
                    source={require("./../../../assets/images/LEM_Logo.png")}
                    resizeMode="contain"
                    style={styles.logo}
                ></Image>

                <KeyboardAvoidingView behavior="position">
                    <ScrollView bounces={false}>
                        <View>
                            <MaterialUnderlineTextbox
                                inputStyle="Placeholder"
                                inputStyle="NOM D'UTILISATEUR"
                                style={styles.nomUtilisateurInput}
                            />

                            <TextInput
                                placeholder="Username"
                                onChangeText={(val) => this.onChangeText('username', val)}
                            ></TextInput>

                            <MaterialUnderlineTextbox
                                inputStyle="Placeholder"
                                inputStyle="MOT DE PASSE"
                                style={styles.passwordInput}
                                onChangeText={(val) => this.onChangeText('password', val)}
                            />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>

                {/*<MaterialButtonPrimary*/}
                {/*    caption="CONNEXION"*/}
                {/*    style={styles.connexionButton}*/}
                {/*    onPress={this.connApiLogin}*/}
                {/*/>*/}
                <Button title="Log in" onPress={this.connApiLogin}/>
            </View>
        );
    }
}
// export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(77,166,169,1)",
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: 150,
        alignSelf: "center"
    },
    connexionButton: {
        height: 46,
        width: 274,
        borderRadius: 12,
        backgroundColor: "rgba(77,166,169,1)",
        marginTop: 31,
        alignSelf: "center"
    },
    nomUtilisateurInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 192,
        alignSelf: "center"
    },
    passwordInput: {
        height: 43,
        width: 300,
        borderRadius: 12,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 18,
        alignSelf: "center"
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },

});
