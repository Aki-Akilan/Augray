import {Platform, StatusBar} from 'react-native';

const BarHeight = Platform.OS == "android" ?  StatusBar.currentHeight : 0;

export {BarHeight};
