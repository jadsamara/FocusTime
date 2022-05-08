import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../../assets/colors";
import { RoundedButton } from "./RoundedButton";
import { fontSizes, spacing } from "../../assets/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FocusTime</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.text}
          onChangeText={(subject) => setSubject(subject)}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
  },
  header: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "700",
    fontSize: 30,
    marginBottom: 15,
  },
  button: {
    justifyContent: "center",
    marginLeft: 15,
  },

  text: {
    flex: 1,

    marginRight: spacing.sm,
    borderRadius: 10,
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
  },

  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
