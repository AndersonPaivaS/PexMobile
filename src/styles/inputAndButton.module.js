import { StyleSheet } from 'react-native';

const stylesInputAndButton = StyleSheet.create({
    input: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        width: 311,
        height: 56,
        backgroundColor: '#F8F8F9',
        borderRadius: 12,
    },

    inputImage: {
        marginLeft: 18,
        marginRight: 10,
    },

    footer: {
        alignItems: 'center',
    },

    button: {
        width: 311,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F09200',
        borderRadius: 12,
        marginBottom: 24,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18,
    },

    footerText: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    questionText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
        color: '#999999',
    },

    createAccountText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18,
        color: '#F09200',
    }
})

export default stylesInputAndButton