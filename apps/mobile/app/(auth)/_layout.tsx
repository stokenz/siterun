import { useUsersServiceFindMe } from "@/api/queries";
import { AuthContext } from "@/hooks/useAuth";
import { Slot } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function AuthLayout() {
  const { data: user, isPending, isError, error } = useUsersServiceFindMe();

  if (isPending) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Error</Text>
      </SafeAreaView>
    );
  }

  return (
    <AuthContext.Provider value={user}>
      <Slot />
    </AuthContext.Provider>
  );
}
