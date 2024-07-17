import { createStackNavigator } from "@react-navigation/stack";

import EntryPage from "../pages/AuthPages/EntryPage";
import Login from "../pages/AuthPages/Login";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EntryPage" component={EntryPage} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
