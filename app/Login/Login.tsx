import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
                 source={require("@/assets/images/Icon2.png")} // <-- change path/name
                 style={styles.logo}
                 resizeMode="contain"
               />
               <Text style={styles.text}>BudgetPay</Text>
               <Text style={styles.text1}>with AI Integration</Text>
              
               <View style={styles.hr} />

               <Text style={styles.text}>Your Money.</Text>
               <Text style={styles.text}>Now Intelligent</Text>
      </View>
      <View style={{position: 'absolute', top: 80, left: -100, right: 0}}>
        <Image source={require("@/assets/images/CornerSquare.png")} // <-- change path/name
                 style={styles.bglogo}
                 resizeMode="contain"/>
      </View>
      <View style={{position: 'absolute', top: -100,  right: 0}}>
        <Image source={require("@/assets/images/CornerSquare.png")} // <-- change path/name
                 style={styles.bglogo}
                 resizeMode="contain"/>
      </View>
      <View style={{position: 'absolute', top: 400,  right: -110}}>
        <Image source={require("@/assets/images/CornerSquare.png")} // <-- change path/name
                 style={styles.bglogo}
                 resizeMode="contain"/>
      </View>
      <View style={{position: 'absolute', bottom: 100,  left: -110}}>
        <Image source={require("@/assets/images/CornerSquare.png")} // <-- change path/name
                 style={styles.bglogo}
                 resizeMode="contain"/>
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative' },
  center: {
    flex: 1,
    // justifyContent: "center",
    paddingTop:200,
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
    // fontWeight: "700",
    // fontFamily: "Poppins-Bold",
    fontFamily: "Roboto-SemiBold",
    textAlign: "center",
    // lineHeight: 34,
  },
  text1: {
    color: "#FFFFFF",
    fontSize: 14,
    // fontWeight: "700",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    // lineHeight: 34,
  },
   hr: {
    width: 160, // change width if you want
    height: 1,
    backgroundColor: "#FFFFFF",
    marginVertical: 12,
    opacity: 0.5,
  },
});
