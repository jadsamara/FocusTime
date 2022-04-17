import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../../assets/colors";
import { RoundedButton } from "./RoundedButton";

export const Focus = () => {
  const [subject, setSubject] = useState();
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 50,
    justifyContent: "flex-start",
  },
});
