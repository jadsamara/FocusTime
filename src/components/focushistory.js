import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../../assets/colors";
import { fontSizes, spacing } from "../../assets/sizes";

export const FocusHistory = ({ history }) => {
  if (!history.length)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Focused so far:</Text>
        <Text style={styles.item}>We haven't focused on anything yet.</Text>
      </View>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focused so far:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    flex: 1,
  },

  text: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
});
