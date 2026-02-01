// Transcation.tsx
import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import TopHeadder from "../components/Transaction/TopHeadder";
import Header from "../components/Transaction/Header";
import SearchNdFilter from "../components/Transaction/SearchNdFilter";
import TransactionSummary from "../components/Transaction/TransactionSummary";

const Transcation = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe} edges={["left", "right"]}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0B0B" />

      {/* ✅ Add safe-area insets manually */}
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,      // top notch/statusbar space
            paddingBottom: insets.bottom // bottom home-indicator space
          },
        ]}
      >
        <TopHeadder />
        <Header/>
        {/* screen content below */}
        <SearchNdFilter/>
        <TransactionSummary/>
      </View>
    </SafeAreaView>
  );
};

export default Transcation;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },
});
