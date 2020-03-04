import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const stylecontroller = StyleSheet.create({
    createnew: {
        position: 'absolute',
        bottom: vh(10),
        right: vw(5),
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        padding: vw(1),
        margin: vw(2.5),
    },
    playContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    colorButton: {
        backgroundColor: 'pink', //Just a placeholder, should never be visible
        width: vw(10),
        height: vw(10),
        borderRadius: vw(5),
    },
    arrowButton: {
        backgroundColor: 'gray',
        width: vw(9),
        height: vw(9),
        borderRadius: vw(1),
    },
    CL: {
        backgroundColor: 'yellow',
    },
    CR: {
        backgroundColor: 'blue',
    },
    CU: {
        backgroundColor: 'red',
    },
    CD: {
        backgroundColor: 'green',
    }
});

const dragPosition = {
    CL: {
        x: vw(60-5),
        y: vh(50-10),
    },
    CR: {
        x: vw(80-5),
        y: vh(50-10),
    },
    CU: {
        x: vw(70-5),
        y: vh(30-10),
    },
    CD: {
        x: vw(70-5),
        y: vh(70-10),
    },
    AL: {
        x: vw(20-4.5),
        y: vh(50-9),
    },
    AR: {
        x: vw(40-4.5),
        y: vh(50-9),
    },
    AU: {
        x: vw(30-4.5),
        y: vh(30-9),
    },
    AD: {
        x: vw(30-4.5),
        y: vh(70-9),
    }
}

export { stylecontroller, dragPosition};