import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const stylehome = StyleSheet.create({
    listStyle: {
        backgroundColor: '#DCDCDC',
        height: vh(14),
        marginBottom: vh(2),
    },
    listText: {
        textAlign: 'center',
        lineHeight: vh(14),
        width: vw(64),
        flex: 1
    },
    listTextCon: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    settingLogo: {
        width: vh(12),
        height: vh(12),
    },
    settingLogoCon: {
        position: 'absolute',
        right: vw(10),
        top: vh(1),
        //backgroundColor: 'red',
        width: vh(12),
        height: vh(12),
    },
    createButton: {
        backgroundColor: 'indianred',
        borderRadius: 10,
        padding: vw(1),
        margin: vw(2.5),
    },
    settingsButton: {
        backgroundColor: 'indianred',
        borderRadius: 10,
        padding: vw(1),
        margin: vw(2.5),
    },
    bottomButtonCon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});

export { stylehome };