/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@root/index';
import {MMKV} from 'react-native-mmkv';
import { store } from '@library/store';



export const storage = new MMKV();

const ModuleContainer = () => (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <App />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );


AppRegistry.registerComponent(appName, () => ModuleContainer);
