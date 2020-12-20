import { registerRootComponent } from "expo";

/** // todo: connect to spotfiy api, 
 * setup env with keys
 * 0auth with spotify
 * setup db with mongodb and mongooose
 * 


**/
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
