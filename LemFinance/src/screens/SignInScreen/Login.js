import React, {Component} from "react";
import {StyleSheet, View, Image, KeyboardAvoidingView, ScrollView, Platform} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";

const URL = 'http://34.95.8.78/api/login';

connApiLogin = async () => {
    const { username, password, email, phone_number } = this.state;
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

      alert(data["success"]);
      
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };
function Login(props) {
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
                            inputStyle="EMAIL"
                            style={styles.emailInput}
                        />
                        <MaterialUnderlineTextbox
                            inputStyle="Placeholder"
                            inputStyle="MOT DE PASSE"
                            style={styles.passwordInput}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <MaterialButtonPrimary
                caption="CONNEXION"
                style={styles.connexionButton}
                onPress={this.connApiLogin}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginLeft: 51
    },
    emailInput: {
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
    }
});

export default Login;
