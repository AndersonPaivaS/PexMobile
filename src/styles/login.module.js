import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: 299

    },

    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#000000',
        marginTop: 24,
        marginBottom: 8,
    },

    headerDescription: {
        width: 311,
        height: 40,
        fontStyle: 'normal',
        justifyContent: 'flex-end',
        fontSize: 14,
        fontWeight: '400',
        color: '#999999',
        marginBottom: 32,
    },

    forgotPassword: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18,
        color: '#F09200',
        marginTop: 8,
        marginBottom: 80,
    },
})

export default styles