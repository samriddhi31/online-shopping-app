import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    logoView:{
       flexDirection: 'row',
        // paddingTop: 8,
        paddingLeft: 19,
        // backgroundColor: 'gray',
    },
    headerImage: {
        width: 52,   
        height: 52,   
        // resizeMode: 'contain',
    },
    headerContent:{
        width: '100%',
        justifyContent:'center',
        alignContent: 'center',
        // backgroundColor: 'red',
        flex: 1,
    },
    textContainer1: {
        marginBottom: 5,
        marginTop: 2,
        paddingLeft: 15,
        fontSize: 19,
        lineHeight: 19,
        fontWeight: '400',
    },
    textContainer2: {
        paddingLeft: 15,
        fontSize: 22,
        fontFamily: 'Inter',
        fontWeight: '600',
    },
    sideContainer: {
        width: 50,
        height: 50,
        aspectRatio: 1,
        justifyContent:'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginRight: 26,
        maxHeight: 28,
        marginTop: 18,
    },
    solarBellStyle: {
        width: 28,
        height: 28,
    },
    heartIconStyle: {
        width: 28,
        height: 28,
        marginLeft: 8,
    }
})


export default styles;