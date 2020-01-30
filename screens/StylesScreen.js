import {StyleSheet} from 'react-native'

const styleglobal = StyleSheet.create({
    contentContainer: {
        paddingTop: 30,
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
        fontFamily: 'Georgia', 
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 10,
        padding: 5,
        flex: 1,
    },
    settingsHomeContainer: {
        paddingBottom: 100,
    },
    settingsButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        marginRight: 20,
        marginBottom: 10,
        padding: 5,
        flex: 1,
        position: "absolute", 
        bottom: 0,
    },
});

export { styleglobal };