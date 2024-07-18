import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

import AuthProvider from "./src/contexts/authContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#353840" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
