import { StyleSheet } from "react-native";


// const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
    mainContainer: {
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 26,
        paddingTop: 24,
    },
    mainContainer1: {
        height: 145,
    },
    dotIndicatorStyle: {
        backgroundColor: '#ffffff',
        height: 7,
        width: 7,
        borderRadius: 5,
        borderWidth: 0.2,
        marginHorizontal: 6,
    },
    dotIndicatorStyle2: {
        backgroundColor: '#fc6c85',
        height: 7,
        width: 7,
        borderRadius: 5,
        borderColor: '#ffffff',
        borderWidth: 0.2,
        marginHorizontal: 6,
    },
    dotIndicatorView:{
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: 122,
        alignItems: 'center',
        paddingLeft: 170,
        // marginTop: 0,
    }
})

export default styles;