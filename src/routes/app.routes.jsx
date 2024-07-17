import { createStackNavigator } from "@react-navigation/stack";

import Balance from "../pages/Balance";
import Datails from "../pages/Datails";

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Balance" component={Balance} />
      <Stack.Screen name="Datails" component={Datails} />
    </Stack.Navigator>
  );
}
