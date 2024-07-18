import { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { ActivityIndicator, View } from "react-native";

import { AuthContext } from "../contexts/authContext";

export default function Routes() {
  const { logged, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItem: "center", justifyContent: "center" }}>
        <ActivityIndicator size={40} color="#3530D5" />
      </View>
    );
  }

  return logged ? <AppRoutes /> : <AuthRoutes />;
}
