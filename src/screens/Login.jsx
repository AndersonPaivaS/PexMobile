import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/login.module.js'
import stylesInputAndButton from '../styles/inputAndButton.module.js'


export function Login({navigation}) {

    function openFirstRegistration() {
        navigation.navigate('firstRegistration');
    }


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Image.png')} />
            <View>
                <Text style={styles.headerTitle}>Bem vindo a PEX</Text>
                <Text style={styles.headerDescription}>Informe os seus dados para ter acesso a um mundo de economia para sua obra </Text>
            </View>

            <View style={stylesInputAndButton.input}>
                <Image style={stylesInputAndButton.inputImage} source={require( '../assets/Message.png' )} />
                <TextInput placeholder="Email" />
            </View>

            <View style={stylesInputAndButton.input}>
                <Image style={stylesInputAndButton.inputImage} source={require( '../assets/Lock.png' )} />
                <TextInput placeholder="Senha" />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>


            <View style={stylesInputAndButton.footer}>
                <TouchableOpacity style={stylesInputAndButton.button}>
                    <Text style={stylesInputAndButton.buttonText}> Acessar </Text>
                </TouchableOpacity>

                <View style={stylesInputAndButton.footerText}>
                    <Text style={stylesInputAndButton.questionText}> Não possui uma conta? </Text>
                    <TouchableOpacity onPress={openFirstRegistration}>
                        <Text style={stylesInputAndButton.createAccountText}>Criar conta</Text>
                    </TouchableOpacity> 
                </View>
                
            </View>
        </View>
    );
}