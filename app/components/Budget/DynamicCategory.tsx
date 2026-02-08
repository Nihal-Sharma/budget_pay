import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type CategoryItem = {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  color: string; // border + progress color
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

type Props = {
  title?: string;
  categories?: CategoryItem[];
};

const formatINR = (n: number) => {
  try {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);
  } catch {
    return String(Math.round(n));
  }
};

const DynamicCategory: React.FC<Props> = ({
  title = "Dynamic Categories",
  categories = [
    {
      id: "travel",
      name: "Travel",
      allocated: 2000,
      spent: 2000,
      color: "#22C55E",
      icon: "airplane",
    },
    {
      id: "food",
      name: "Food",
      allocated: 2000,
      spent: 2000,
      color: "#F97316",
      icon: "food",
    },
  ],
}) => {
  const computed = useMemo(() => {
    return categories.map((c) => {
      const pct = c.allocated > 0 ? Math.min((c.spent / c.allocated) * 100, 100) : 0;
      const remaining = Math.max(c.allocated - c.spent, 0);
      return { ...c, pct, remaining };
    });
  }, [categories]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>{title}</Text>

      {computed.map((c) => (
        <View key={c.id} style={[styles.card, { borderColor: c.color }]}>
          {/* Header row */}
          <View style={styles.cardTop}>
            <View style={styles.leftHead}>
              <MaterialCommunityIcons name={c.icon} size={18} color={c.color} />
              <Text style={[styles.catName, { color: c.color }]}>{c.name}</Text>
              <Text style={styles.sep}>—</Text>
              <Text style={[styles.pctText, { color: c.color }]}>
                {Math.round(c.pct)}%
              </Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${c.pct}%`, backgroundColor: c.color },
              ]}
            />
          </View>

          {/* Bottom stats */}
          <View style={styles.statsRow}>
            <View style={styles.statCol}>
              <Text style={styles.statLabel}>Allocated</Text>
              <Text style={styles.statValue}>₹{formatINR(c.allocated)}</Text>
            </View>

            <View style={styles.statColCenter}>
              <Text style={styles.statLabel}>Spent</Text>
              <Text style={styles.statValue}>₹{formatINR(c.spent)}</Text>
            </View>

            <View style={styles.statColRight}>
              <Text style={styles.statLabel}>Remaining</Text>
              <Text style={[styles.statValue, styles.remaining]}>
                ₹{formatINR(c.remaining)}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DynamicCategory;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  heading: {
    color: "rgba(255,255,255,0.92)",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 12,
  },

  card: {
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 12,
    backgroundColor: "rgba(255,255,255,0.02)",
    marginBottom: 14,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  catName: {
    fontSize: 15,
    fontFamily: "Poppins-SemiBold",
  },

  sep: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 14,
    marginHorizontal: 2,
  },

  pctText: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },

  progressTrack: {
    height: 10,
    borderRadius: 999,
    marginTop: 10,
    backgroundColor: "rgba(255,255,255,0.16)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 999,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  statCol: { width: "33%" },
  statColCenter: { width: "33%", alignItems: "center" },
  statColRight: { width: "33%", alignItems: "flex-end" },

  statLabel: {
    color: "rgba(255,255,255,0.70)",
    fontSize: 12.5,
    fontFamily: "Poppins-Medium",
    marginBottom: 6,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },

  remaining: {
    color: "#22C55E", // green remaining like screenshot
  },
});