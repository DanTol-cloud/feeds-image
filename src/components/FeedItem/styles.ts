import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 6,
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        alignSelf: 'center',

        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

        padding: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF'
    }
})

export default styles;