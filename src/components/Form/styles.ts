import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer: {

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 1,
        borderRadius: 15,

    },
    form: {
        flex: 1,

        fontSize: 16,

        fontWeight: '600',
        textAlign: 'center',
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
        right: 10,
    },
    errors: {
        color: 'red',
        fontSize: 14,
    }
})

export default styles;