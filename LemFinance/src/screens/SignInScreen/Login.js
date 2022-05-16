import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    ScrollView,
    Button,
    Text,
    TouchableOpacity
} from "react-native";


const URL = 'http://34.95.8.78/api/account/login';
const URL2 = 'http://34.95.8.78/api/account/data'

export default class Login extends React.Component {

    onChangeText = (key, val) => {
        this.setState({[key]: val});
    };

    connApiLogin = async () => {
        const {username, password} = this.state;
        try {

            var response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: username,
                    password: password,
                }),
            })

            var data = await response.json();
            if(data['success']){
                var response2 = await fetch(URL2, {
                    method: 'POST',
                    headers: {
                        'Accept': 'applicaton/json',
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify({
                        key: data['key']
                    }),
                })

                var data2 = await response2.json();
                global.name = data2['content']['firstName']
                alert("Success")
            }else{                alert("Success")
            }

        } catch (err) {
            console.log('error signing up: ', err);
        }
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

                            <View style={styles.nomUtilisateurInput}>
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

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>


                <TouchableOpacity style={[styles.BTcontainer, styles.connexionButton]}
                                  onPress={() => {
                                      this.connApiLogin();
                                      this.props.nav.navigate('DefaultAppScreen');
                                  }}

                >

                    <Text style={styles.BTcaption}>CONNEXION</Text>
                </TouchableOpacity>
            </View>
        )
            ;
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
    TBcontainer: {
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",

    },
    TBinputStyle: {
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
