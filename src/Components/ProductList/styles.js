import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    coverImage: {
        height: 268,
        borderRadius: 20,
        width: 168,
        marginVertical: 10,
        position: 'relative',
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 20,
        right: 40,
    }
})
export default styles;