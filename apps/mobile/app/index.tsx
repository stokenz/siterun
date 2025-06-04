import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { OpenAPI as OpenAPIConfig } from "../api/requests/core/OpenAPI";
import * as SecureStore from "expo-secure-store";

export default function LoginScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  useEffect(() => {
    const getAccessToken = async () => {
      setLoading(true);
      const accessToken = await SecureStore.getItemAsync("accessToken");
      if (accessToken) {
        OpenAPIConfig.TOKEN = accessToken;
        router.replace("/dashboard");
      }
      setLoading(false);
    };

    getAccessToken();
  }, []);

  const handleLogin = async () => {
    let result = await WebBrowser.openAuthSessionAsync(
      process.env.NODE_ENV === "development"
        ? "http://192.168.0.195.nip.io:3001/sign-in?source=mobile"
        : "https://app.gositerun.com/sign-in?source=mobile",
    );

    if (result.type === "success") {
      const accessToken = new URL(result.url).searchParams.get("accessToken");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      await SecureStore.setItemAsync("accessToken", accessToken);
      OpenAPIConfig.TOKEN = accessToken;
      router.replace("/dashboard");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        colors={[
          "rgb(34, 139, 230)",
          "rgb(98, 167, 246)",
          "rgb(219, 234, 254)",
        ]}
        style={styles.loginGradient}
      >
        <View style={styles.loginContent}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/logo-white.svg")}
              contentFit="contain"
            />
          </View>

          <ThemedView
            style={styles.inputContainer}
            lightColor="rgba(255,255,255,0.7)"
            darkColor="rgba(0,0,0,0.7)"
          >
            <ThemedText style={styles.loginText}>
              Sign in using the button below.
            </ThemedText>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>Sign in</Text>
            </TouchableOpacity>
          </ThemedView>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginText: {
    textAlign: "center",
    fontSize: 16,
  },
  loginContainer: {
    flex: 1,
  },
  loginGradient: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  loginContent: {
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    maxHeight: 50,
    marginBottom: 50,
  },
  logoText: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  inputContainer: {
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "rgb(34, 139, 230)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: 15,
  },
  forgotPasswordText: {
    color: "#333",
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
