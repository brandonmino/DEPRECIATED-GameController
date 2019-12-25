import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    contentContainer: {
        paddingTop: 30,
    },
    profileContainer: {
        alignContent: 'center',
    },
    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    homeTitle: {
        fontSize: 28,
        textAlign: 'center',
        paddingBottom: 30,
    },
    homeOptions: {
        fontFamily: 'space-mono', 
        alignItems: 'center',
        marginVertical: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    homeLink: {
        paddingVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
});