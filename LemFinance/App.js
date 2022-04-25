import 'react-native-gesture-handler';
import React from "react";
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/SignInScreen/Home";

import DefaultAppScreen from "./src/screens/AppScreen/DefaultAppScreen";
import SignupHelper from "./src/screens/SignInScreen/signupHelper";
import LoginHelper from "./src/screens/SignInScreen/LoginHelper";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                             screenOptions={{
                                 headerShown: false
                             }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginHelper}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupHelper}
                />
                <Stack.Screen
                    name="DefaultAppScreen"
                    component={DefaultAppScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>


        // <View style={styles.root}>
        //
        //   {/*<Home/>*/}
        //   <Login/>
        //   {/*<Signup/>*/}
        //   {/*<Accueil/>*/}
        //   {/*<DefaultAppScreen/>*/}
        //
        // </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
