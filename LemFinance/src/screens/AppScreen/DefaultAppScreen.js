import React, {Component} from "react";
import {StyleSheet, View, Image, KeyboardAvoidingView, ScrollView, Text} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";
import Accueil from "../AppScreen/Accueil";
import MaterialIconButtonsFooter1 from "../../Components/Card/MaterialIconButtonsFooter1";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../SignInScreen/Home";
import LoginHelper from "../SignInScreen/LoginHelper";
import SignupHelper from "../SignInScreen/signupHelper";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function DefaultAppScreen(props) {
    return (
        <View style={styles.container}>

            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="Home"
                                 screenOptions={{
                                     headerShown: false
                                 }}>
                    <Stack.Screen
                        name="Home"
                        component={Accueil}
                    />

                </Stack.Navigator>
            </NavigationContainer>

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
    styleBarreMenu: {
        height: 50,
        width: '100%',
        backgroundColor: "#4da6a9",
        position: "absolute",
        bottom: 0,
    },
});

export default DefaultAppScreen;
