import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../assets/colors";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Focus Item" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});
