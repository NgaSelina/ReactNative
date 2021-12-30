/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { AppContainer } from './MyProjects/Navigators';
// import { App1 } from './MyProjects/Flatlist';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
