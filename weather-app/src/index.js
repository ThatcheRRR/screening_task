import { AppRegistry } from "react-native";
import App from './Components/App/App';

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});