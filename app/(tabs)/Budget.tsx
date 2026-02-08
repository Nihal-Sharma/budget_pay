import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Budget/Header";
import GlassEffectBoxes from "../components/Budget/GlassEffectBoxes";
import OverallBudgetProgress from "../components/Budget/OverallBudgetProgress";
import DynamicCategory from "../components/Budget/DynamicCategory";

import data from "../../store/data.json";

const Budget = () => {
  const monthlyIncome = data.user.monthlyIncome;
  const monthlySpend = data.user.monthlySpend;

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="never" // ✅ iOS: removes extra bottom inset space
          overScrollMode="never"                 // ✅ Android: prevents extra overscroll area
          bounces={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Header />

          <GlassEffectBoxes
            monthlyAllocated={monthlyIncome}
            monthlySpent={monthlySpend}
          />

          <OverallBudgetProgress
            monthlyAllocated={monthlyIncome}
            monthlySpent={monthlySpend}
          />

          <View style={styles.divider} />

          <DynamicCategory categories={data.categories} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Budget;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#101010",
  },
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 10, // ✅ keep small; remove insets-based padding
  },
  divider: {
    backgroundColor: "white",
    height: 0.5,
    opacity: 0.2,
  },
});