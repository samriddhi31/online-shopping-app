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
    textContainer: {
        justifyContent: 'space-between', 
        color: '#303030', 
        paddingLeft: 18, 
        paddingVertical: 15,
        fontSize: 20, 
        fontWeight: '500',
    }

})

export default styles;