import React from 'react';
import {Text, View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/LEM_Logo.png'
import CustomButton from '../../Components/CustomButton'

const PageZeroScreen = () => {
    const {height} = useWindowDimensions();
    
    const onSignInPressed = () => {
      console.warn("sign in");
    }
    
    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height*0.3}]} resizeMode="contain"/>
            <CustomButton onPress={onSignInPressed} text={"S'indentifier"} color="Blue"/>
            <CustomButton onPress={onSignInPressed} text={"Créer un compte"} color="Grey"/>
        </View>)
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding:20,
        paddingTop: 150,
    },
    logo: {
        width: "75%",
        maxWidth: 350,
        maxHeight: 350,
    }
})

export default PageZeroScreen;