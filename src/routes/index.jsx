import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { ActivityIndicator, View } from "react-native";

export default function Routes() {
  const loading = false;
  const signed = false;

  if (loading) {
    return (
      <View style={{ flex: 1, alignItem: "center", justifyContent: "center" }}>
        <ActivityIndicator size={40} color="#3530D5" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
