import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import TopHeader from "../components/Home/TopHeader";
import Header from "../components/Home/Header";
import GlassEffectBoxes from "../components/Home/GlassEffectBoxes";
import StreakBox from "../components/Home/StreakBox";
import FirstGraph from "../components/Home/FirstGraph";

import data from "../../store/data.json";

const Index = () => {
  const name = data.user.name;
  const monthlyIncome = data.user.monthlyIncome;
  const monthlySpend = data.user.monthlySpend;
  const saving = data.user.saving;

  return (
    <View style={styles.screen}>
      <View style={styles.topArea}>
        <TopHeader
          name={name}
          onPressBell={() => console.log("bell")}
          onPressProfile={() => console.log("profile")}
        />
        <Header />
      </View>

      <View style={styles.bottomSheet}>
        {/* ✅ Handle Line */}
        <View style={styles.handleWrap}>
          <View style={styles.handle} />
        </View>

        {/* ✅ Scrollable content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <GlassEffectBoxes
            monthlyIncome={monthlyIncome}
            monthlySpend={monthlySpend}
            saving={saving}
          />

          <StreakBox />

          <FirstGraph
            labels={["Week1", "Week2", "Week3", "Week4"]}
            pointsPerLabel={7}
            enableWeekFilter={true}
          />

          <View style={{ height: 900 }} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#101010",
  },

  topArea: {
    backgroundColor: "#101010",
    paddingBottom: 10,
  },

  bottomSheet: {
    flex: 1,
    backgroundColor: "#000000",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: "hidden",
    marginTop: 8,
  },

  handleWrap: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 8,
  },

  handle: {
    width: 92,
    height: 5,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.35)",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});