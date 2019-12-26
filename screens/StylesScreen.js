import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    contentContainer: {
        paddingTop: 30,
    },
    optionsContainer: {
        alignContent: 'center',
        justifyContent: "center",
        paddingTop: 150,
    },
    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    homeTitle: {
        fontSize: 28,
        textAlign: 'center',
        paddingTop: 100,
    },
    homeOptions: {
        fontFamily: 'space-mono', 
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    homeLink: {
        paddingVertical: 7,
    },
    navigationFilename: {
        marginTop: 5,
    },
    backContainer: {
        paddingTop: 30,
    },
    backButton: {
        alignSelf: 'flex-start',
        alignItems: 'left',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 10,
        padding: 5,
        flex: 1,
    },
});