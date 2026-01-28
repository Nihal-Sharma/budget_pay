import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router"; // ✅ add this

const Login = () => {
  return (
    <LinearGradient
      colors={["#000000", "#023C01"]}
      locations={[0.1, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.center}>
        <Image
          source={require("@/assets/images/Icon2.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>BudgetPay</Text>
        <Text style={styles.text1}>with AI Integration</Text>

        <View style={styles.hr} />

        <Text style={styles.text}>Your Money.</Text>
        <Text style={styles.text}>Now Intelligent</Text>
      </View>

      {/* Background corner squares */}
      <View style={{ position: "absolute", top: 80, left: -100, right: 0 }}>
        <Image
          source={require("@/assets/images/CornerSquare.png")}
          style={styles.bglogo}
          resizeMode="contain"
        />
      </View>
      <View style={{ position: "absolute", top: -100, right: 0 }}>
        <Image
          source={require("@/assets/images/CornerSquare.png")}
          style={styles.bglogo}
          resizeMode="contain"
        />
      </View>
      <View style={{ position: "absolute", top: 400, right: -110 }}>
        <Image
          source={require("@/assets/images/CornerSquare.png")}
          style={styles.bglogo}
          resizeMode="contain"
        />
      </View>
      <View style={{ position: "absolute", bottom: 100, left: -110 }}>
        <Image
          source={require("@/assets/images/CornerSquare.png")}
          style={styles.bglogo}
          resizeMode="contain"
        />
      </View>

      {/* ✅ Bottom Buttons */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[styles.btn, styles.googleBtn]}
          onPress={() => {
            // TODO: handle google login
          }}
        >
          <Text style={styles.googleBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.85}
          style={[styles.btn, styles.loginBtn]}
          onPress={() => {
            // ✅ go to tabs index
            router.replace("/(tabs)"); // or "/(tabs)/" (both work)
          }}
        >
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Login;

// ...styles same as yours


const styles = StyleSheet.create({
  container: { flex: 1, position: "relative" },

  center: {
    flex: 1,
    paddingTop: 200,
    alignItems: "center",
    paddingHorizontal: 24,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 8,
  },

  bglogo: {
    width: 210,
    height: 210,
    marginBottom: 8,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Roboto-SemiBold",
    textAlign: "center",
  },

  text1: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },

  hr: {
    width: 160,
    height: 1,
    backgroundColor: "#FFFFFF",
    marginVertical: 12,
    opacity: 0.5,
  },

  /* ✅ Bottom Buttons */
  bottomArea: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 40, // increase/decrease to move up/down
    gap: 12,
    paddingBottom: Platform.OS === "ios" ? 10 : 0,
  },

  btn: {
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  googleBtn: {
    backgroundColor: "#FFFFFF",
  },

  googleBtnText: {
    color: "#111111",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },

  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },

  loginBtn: {
    backgroundColor: "#1E7A1B", // adjust as you want
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  loginBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});
