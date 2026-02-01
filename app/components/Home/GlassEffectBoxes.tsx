import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

type BoxItem = {
  id: string;
  title: string;
  value: string;
  subText?: string;
  subColor?: string;
  badge?: {
    bg: string;
    icon: keyof typeof Ionicons.glyphMap;
  };
};

const GlassEffectBoxes = () => {
  const data: BoxItem[] = useMemo(
    () => [
      { id: "income", title: "Monthly Income", value: "₹20,000" },
      {
        id: "remaining",
        title: "Monthly Remaining",
        value: "₹20,000",
        subText: "No spending yet",
        subColor: "#ff3b30",
        badge: { bg: "#ff3b30", icon: "trending-down" },
      },
      {
        id: "spent",
        title: "Monthly Spent",
        value: "₹20,000",
        subText: "Monthly Total",
        subColor: "#34c759",
        badge: { bg: "#34c759", icon: "trending-up" },
      },
      {
        id: "savings",
        title: "Savings Progress",
        value: "125.8%",
        subText: "₹12,581 / ₹10,000",
        subColor: "rgba(255,255,255,0.75)",
      },
    ],
    []
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.grid}>
        {data.map((item) => (
          <View key={item.id} style={styles.cardOuter}>
            {/* ✅ Glass */}
            <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill} />

            {/* ✅ Top inner highlight ONLY (thin strip) */}
            <LinearGradient
              colors={["rgba(255,255,255,0.28)", "rgba(255,255,255,0.00)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.topHighlight}
            />

            {/* ✅ Bottom inner shadow */}
            <LinearGradient
              colors={["rgba(0,0,0,0.00)", "rgba(0,0,0,0.60)"]}
              start={{ x: 0.5, y: 0.2 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.bottomShadow}
            />

            {/* ✅ Content */}
            <View style={styles.cardContent}>
              {item.badge ? (
                <View style={[styles.badge, { backgroundColor: item.badge.bg }]}>
                  <Ionicons name={item.badge.icon} size={18} color="#000" />
                </View>
              ) : null}

              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.value}>{item.value}</Text>

              {item.subText ? (
                <Text style={[styles.subText, { color: item.subColor || "#aaa" }]}>
                  {item.subText}
                </Text>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GlassEffectBoxes;

const styles = StyleSheet.create({
  wrapper: { paddingTop: 6, },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardOuter: {
    width: "48%",
    height: 118,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,

    // ✅ Stroke
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",

    backgroundColor: "rgba(255,255,255,0.04)",

    shadowColor: "#000",
    shadowOpacity: 0.45,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  // ✅ only a thin strip on top
  topHighlight: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 8, // 👈 adjust: 16-26 looks best
  },

  // ✅ shadow can stay full but better to focus bottom
  bottomShadow: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },

  cardContent: { flex: 1, padding: 14 },

  badge: {
    position: "absolute",
    right: 12,
    top: 36,
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "rgba(255,255,255,0.92)",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    marginBottom: 10,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 6,
  },

  subText: { fontSize: 12, fontFamily: "Poppins-Regular" },
});
