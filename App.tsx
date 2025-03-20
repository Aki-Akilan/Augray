import StackMenu from './app/navigation/stackMenu';
import React from 'react';
import {StatusBar, View} from 'react-native';
import "./global.css"


function App(): React.JSX.Element {
  return (
    <View className="flex-1 bg-white" style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <StackMenu />
    </View>
  );
}

export default App;
