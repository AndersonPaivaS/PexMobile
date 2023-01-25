import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/start.module.js'

export function Start({navigation}) {

    function openLogin() {
        navigation.navigate('login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image style={styles.imageLogo} source={require('../assets/Frame.png')} />
                <View style={styles.texts}>
                    <Text style={styles.mainText}> Bem vindo a PEX </Text>
                    <Text style={styles.description}> fskjdhfjkdshkjfhkjsd </Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textContinue}> Continuar </Text>

                <TouchableOpacity style={styles.button} onPress={openLogin}>
                    <Text>
                        <Image style={styles.imageButton} source={require('../assets/Icon.png')} />
                    </Text>
                </TouchableOpacity>
            </View>

            


        </View>
    );
}

