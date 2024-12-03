import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'flex-start',

        alignSelf: 'center',

        marginVertical: 12,
        marginHorizontal: 16,

        paddingVertical: 12,
        paddingHorizontal: 8,

        borderRadius: 16,
    },
    imageContainer: {
        width: '20%',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    infoContainer: {
        width: '80%',
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 14,
        fontWeight: '600',
    }
})

export default styles;