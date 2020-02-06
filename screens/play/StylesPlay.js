import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styleplay = StyleSheet.create({
    newButton: {
        position: "absolute",
        width: vw(10),
        height: vw(10),
        borderRadius: vw(5),
    },
    arrowButton: {
        position: "absolute",
        backgroundColor: 'gray',
        width: vw(9),
        height: vw(9),
        borderRadius: vw(1),
    },
    BL: {
        backgroundColor: 'yellow',
        left: vw(60-5),
        top: vh(50-10),
    },
    BR: {
        backgroundColor: 'blue',
        left: vw(80-5),
        top: vh(50-10),
    },
    BU: {
        backgroundColor: 'red',
        left: vw(70-5),
        top: vh(30-10),
    },
    BD: {
        backgroundColor: 'green',
        left: vw(70-5),
        top: vh(70-10),
    },
    AL: {
        left: vw(20-4.5),
        top: vh(50-9),
    },
    AR: {
        left: vw(40-4.5),
        top: vh(50-9),
    },
    AU: {
        left: vw(30-4.5),
        top: vh(30-9),
    },
    AD: {
        left: vw(30-4.5),
        top: vh(70-9),
    },
});

export { styleplay };