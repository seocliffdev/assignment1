/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainDesign from './src/components/MainApp'


AppRegistry.registerComponent(appName, () => MainDesign);
