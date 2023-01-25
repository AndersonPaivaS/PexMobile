import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8',
    },

    body: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageLogo: {
        width:224,
        height:121,
        marginTop: 241
    },

    texts: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainText: {
        fontSize: 32,
        fontWeight: '500',
        lineHeight: 41,
        color: '#000000',
        marginTop: 122,
    },

    description: {
        fontSize: 14,
        fontWeight: '400',
        color: '#999999',
        marginTop: 16,
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '60%',
        bottom: '0%',
        marginBottom: 64,
    },

    textContinue: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18,
        color: '#000000'
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 13,

        width: 62,
        height: 62,
        marginLeft: 13,

        
        backgroundColor: '#F09200',
        borderRadius: 84,
    },

    imageButton: {
        width: 24,
        height: 24,
        marginTop: 85
    },

})

export default styles