import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        height: 50,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        // gap: 30,
    },
    SearchIcon:{
        width: 30,
        height: 30,
    },
    searchText: {
        flex: 1,
        fontSize: 20,
        color: '#b1b1b1',
        fontWeight: '400',
        marginLeft: 8,
    },
    searchFilter: {
        width: 18,
        height: 15,
        marginHorizontal: 4,
    }
})

export default styles;