// TransactionSummary.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type SummaryRow = {
  label: string;
  value: string; // "₹20,000"
  accent: string; // left border + text color
  bg: string; // row background
};

type Props = {
  title?: string;
  rows?: SummaryRow[];
};

const BG = "#0B0B0B";

const TransactionSummary: React.FC<Props> = ({
  title = "Transaction Summary – This Month",
  rows = [
    {
      label: "Total Transactions",
      value: "₹20,000",
      accent: "#5AA2FF",
      bg: "#EAF2FF",
    },
    {
      label: "Total Amount",
      value: "₹20,000",
      accent: "#2FE67A",
      bg: "#EAFBF0",
    },
    {
      label: "Average Amount",
      value: "₹20,000",
      accent: "#B07BFF",
      bg: "#F3ECFF",
    },
  ],
}) => {
  return (
    <View style={{ flex: 1,paddingHorizontal:16,}}>
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.list}>
        {rows.map((r) => (
          <View
            key={r.label}
            style={[
              styles.row,
              { backgroundColor: r.bg, borderLeftColor: r.accent },
            ]}
          >
            <Text style={[styles.rowLabel, { color: r.accent }]}>{r.label}</Text>
            <Text style={[styles.rowValue, { color: r.accent }]}>{r.value}</Text>
          </View>
        ))}
      </View>
    </View>
    </View>
  );
};

export default TransactionSummary;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#141414",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",

    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    // fontWeight: "900",
    fontFamily: "Poppins-SemiBold",
    marginBottom: 12,
  },

  list: {
    gap: 12,
  },

  row: {
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },

  rowLabel: {
    fontSize: 16,

    // fontWeight: "800",
    fontFamily: "Poppins-Medium",
  },

  rowValue: {
    fontSize: 22,
     fontFamily: "Poppins-SemiBold",
  },
});
