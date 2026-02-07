import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TopHeader from "../components/Home/TopHeader";
import GlassEffectBoxes from "../components/Home/GlassEffectBoxes";
import Header from "../components/Home/Header";
import StreakBox from "../components/Home/StreakBox";
import FirstGraph from "../components/Home/FirstGraph";
import data from '../../store/data.json'

const Index = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.topArea}>
        <TopHeader
          name={data.name}
          onPressBell={() => console.log("bell")}
          onPressProfile={() => console.log("profile")}
        />
        <Header />
      </View>

      <View style={styles.bottomSheet}>
        {/* ✅ Handle Line (fixed) */}
        <View style={styles.handleWrap}>
          <View style={styles.handle} />
        </View>

        {/* ✅ Scrollable content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <GlassEffectBoxes
  monthlyIncome={data.monthlyIncome}
  monthlySpend={data.monthlySpend}
  saving={data.saving}
/>
          <StreakBox/>
          <FirstGraph
  // data={apiResponse.dailyAmounts}   // number[]
  labels={["Week1","Week2","Week3","Week4"]}
  pointsPerLabel={7}                // if 7 days per week
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
