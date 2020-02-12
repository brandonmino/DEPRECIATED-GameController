import {StyleSheet} from 'react-native'

const stylehome = StyleSheet.create({
    listStyle: {
        backgroundColor: '#DCDCDC',
        height: '20%',
        flexDirection: 'row',
        marginTop: 75,
    },
    listText: {
        backgroundColor: '#DCDCDC',
        paddingLeft: 115,
    },
    listTextCon: {
        backgroundColor: '#DCDCDC',
        alignSelf: 'center',
        alignItems: 'center',
        flex: 6,
        justifyContent: 'flex-end',
    },
    settingLogo: {
        maxHeight: '60%',
        maxWidth: '60%',
    },
    settingLogoCon: {
        backgroundColor: '#DCDCDC',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    },
    settingClickLogo: {
        backgroundColor: '#DCDCDC',
        alignItems: 'flex-end',
        alignSelf: 'center',
        paddingTop: 15,
    },
});

export { stylehome };