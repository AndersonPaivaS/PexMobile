import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/login.module.js';
import stylesInputAndButton from '../styles/inputAndButton.module.js';
import styleFirstRegistration from '../styles/FistRegistration.module';

export function FirstRegistration({navigation}) {

    function openLogin() {
        navigation.navigate('login');
    };
 

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Men.png')} />
            <View>
                <Text style={styles.headerTitle}>Crie sua conta na PEX</Text>
                <Text style={styles.headerDescription}>Informe o seus dados para criar sua conta na PEX e economizar muito na sua obra</Text>
            </View>

            <View style={stylesInputAndButton.input}>
                <Image style={stylesInputAndButton.inputImage} source={require( '../assets/Message.png' )} />
                <TextInput placeholder="Email" />
            </View>

            <View style={stylesInputAndButton.input}>
                <Image style={stylesInputAndButton.inputImage} source={require( '../assets/Lock.png' )} />
                <TextInput placeholder="Senha" />
            </View>

            <View style={styleFirstRegistration.checkboxContainer}>
                <TouchableOpacity style={styleFirstRegistration.checkbox}></TouchableOpacity> 

                <Text style={styleFirstRegistration.textsContainer}> Li e aceito os <Text onPress={openLogin}>Termos de serviço</Text> e política de privacidade
                </Text>
            </View>

            

            <View style={stylesInputAndButton.footer}>
                <TouchableOpacity style={stylesInputAndButton.button}>
                    <Text style={stylesInputAndButton.buttonText}> Continuar </Text>
                </TouchableOpacity>

                <View style={stylesInputAndButton.footerText}>
                    <Text style={stylesInputAndButton.questionText}> Já possui uma conta? </Text>
                    <TouchableOpacity onPress={openLogin}>
                        <Text style={stylesInputAndButton.createAccountText}>Acessar</Text>
                    </TouchableOpacity> 
                </View>
                
            </View>
        </View>
    );
}